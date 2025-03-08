import { getContract } from "thirdweb";
import { ethereum } from "thirdweb/chains";
import { client } from "../consts/client";
import { balanceOf } from "thirdweb/extensions/erc20";

const UNITY_TOKEN_ADDRESS = "YOUR_DEPLOYED_TOKEN_ADDRESS" as const; // Replace after deployment
const REQUIRED_BALANCE = 100n; // Minimum tokens required (100 UNITY)

export async function hasAccess(address: `0x${string}`): Promise<boolean> {
  try {
    const unityTokenContract = getContract({
      address: UNITY_TOKEN_ADDRESS,
      chain: ethereum, // Using imported chain constant instead of string
      client,
    });

    const ownedBalance = await balanceOf({
      contract: unityTokenContract,
      address, // address is already typed as `0x${string}`
    });

    console.log({ ownedBalance });

    // Check if user owns at least REQUIRED_BALANCE tokens
    return ownedBalance >= REQUIRED_BALANCE;
  } catch (error) {
    console.error("Error checking token balance:", error);
    return false;
  }
}

//
//
//
//
//
//
//
//
/**
 * Check out some of the examples below
 * The use cases are not limited to token-balance, you can basically do anything you want.
 *
 * For example: You can leverage some third-party api to check for the "age" of the wallet and
 * only allow wallet older than 2 years to access.
 *
 * Or you can allow only wallets that have interacted with Uniswap to access the page!
 *
 * The sky is the limit.
 */

async function example_hasSomeErc721Tokens(address: string) {
  const requiredQuantity = 1n;

  const erc721Contract = getContract({
    // replace with your own NFT contract address
    address: "0x0896Db00D8987Fba2152aa7c14c4255eBC7354cE",

    // replace with the chain that your nft contract was deployed on
    // if that chain isn't included in our default list, use `defineChain`
    chain: avalancheFuji,

    client,
  });

  const ownedBalance = await balanceOfERC20({
    contract: erc721Contract,
    owner: address,
  });

  console.log({ ownedBalance });

  return ownedBalance >= requiredQuantity;
}

async function example_hasSomeErc20Tokens(address: string) {
  const requiredQuantity = 10n; // 10 erc20 token

  const erc20Contract = getContract({
    // replace with your own erc20 contract address
    address: "0x28B8B9812aA558e94a9B2971529c02BD589FeAfD",

    // replace with the chain that your erc20 contract was deployed on
    // if that chain isn't included in our default list, use `defineChain`
    chain: avalancheFuji,

    client,
  });

  const ownedBalance = await balanceOfERC20({
    contract: erc20Contract,
    address,
  });

  console.log({ ownedBalance });

  return ownedBalance >= requiredQuantity;
}
