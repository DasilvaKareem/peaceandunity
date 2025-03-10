import { cookies } from "next/headers";
import { thirdwebAuth } from "../consts/thirdwebAuth";
import { hasAccess } from "../actions/gate-condition";
import { GatedContent } from "./GatedContent";

/**
 * This page is gated and should only allow access for wallets have logged in and pass the "gate condition"
 * The gating condition for a wallet address is up to you. Usually we check:
 * 1. If a wallet address owns a certain NFT
 * 2. If a wallet address owns some ERC20 tokens
 * 3. If a wallet address owns some NFT/ERC20 tokens and the owned balance must be greater than a certain amount.
 *
 * To make it clean, we put the logic in a function called `hasAccess(wallet: string)` which returns a boolean.
 * If `TRUE`: The users can access the page's content.
 */
export default async function GatedPage() {
  const cookieStore = cookies();
  const jwt = cookieStore.get("jwt");
  
  if (!jwt?.value) {
    return <MustLogin />;
  }

  const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value });
  console.log({ authResult });
  if (!authResult.valid) {
    return <MustLogin />;
  }

  // If the user has logged in, get their wallet address
  const address = authResult.parsedJWT.sub;
  console.log({ parsedResult: authResult.parsedJWT });
  if (!address) throw new Error("could not get wallet address");

  // Ensure address is in the correct format
  const formattedAddress = address.toLowerCase() as `0x${string}`;

  // Check if user owns enough UNITY tokens
  const _hasAccess = await hasAccess(formattedAddress);
  if (!_hasAccess) return <NotAllowed />;

  // Finally! We can load the gated content for them now
  return <GatedContent />;
}

const MustLogin = () => (
  <div className="text-center">
    You are not logged in. <br />
    <a href="/" className="underline">
      Log in now
    </a>
  </div>
);

const reason = "you do not own enough $UNITY tokens. You need at least 100 $UNITY tokens to access this page.";

const NotAllowed = () => (
  <div className="text-center">
    <div>
      You are logged in but you do not have access to this page because {reason}
    </div>
    <a href="/token-launch" className="underline mt-4 block">
      Get $UNITY Tokens
    </a>
  </div>
);
