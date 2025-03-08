import { ethers, run } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const UnityToken = await ethers.getContractFactory("UnityToken");

  // Replace these with actual wallet addresses from environment variables
  const treasuryWallet = process.env.TREASURY_WALLET;
  const teamWallet = process.env.TEAM_WALLET;
  const marketingWallet = process.env.MARKETING_WALLET;
  const liquidityWallet = process.env.LIQUIDITY_WALLET;

  if (!treasuryWallet || !teamWallet || !marketingWallet || !liquidityWallet) {
    throw new Error("Missing wallet addresses in environment variables");
  }

  const unityToken = await UnityToken.deploy(
    treasuryWallet,
    teamWallet,
    marketingWallet,
    liquidityWallet
  );

  await unityToken.deployed();

  console.log("UnityToken deployed to:", unityToken.address);

  // Verify contract on Etherscan
  if (process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...");
    await unityToken.deployTransaction.wait(6);
    await verify(unityToken.address, [
      treasuryWallet,
      teamWallet,
      marketingWallet,
      liquidityWallet,
    ]);
  }
}

async function verify(contractAddress: string, args: any[]) {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if ((e as Error).message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(e);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 