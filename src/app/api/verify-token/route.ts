import { NextRequest, NextResponse } from 'next/server';
import { Connection, PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

const TOKEN_MINT_ADDRESS = "7sQ78jgXatHAs3dhvsMP8aYLUt2NwFqa8KK5YAvsy6gi";
const MIN_BALANCE_REQUIRED = 1;

export async function POST(request: NextRequest) {
  try {
    const { walletAddress } = await request.json();
    
    if (!walletAddress) {
      return NextResponse.json({ error: 'Wallet address is required' }, { status: 400 });
    }
    
    let publicKey;
    try {
      publicKey = new PublicKey(walletAddress);
    } catch (err) {
      return NextResponse.json({ error: 'Invalid wallet address format' }, { status: 400 });
    }
    
    // Use the server-side RPC URL with API key
    const connection = new Connection(process.env.MAINNET_RPC_URL || "https://api.mainnet-beta.solana.com");
    
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      publicKey,
      { programId: TOKEN_PROGRAM_ID }
    );
    
    const tokenAccount = tokenAccounts.value.find(
      (account) => account.account.data.parsed.info.mint === TOKEN_MINT_ADDRESS
    );
    
    const balance = tokenAccount ? tokenAccount.account.data.parsed.info.tokenAmount.uiAmount : 0;
    const hasToken = balance >= MIN_BALANCE_REQUIRED;
    
    return NextResponse.json({ 
      balance, 
      hasToken,
      minRequired: MIN_BALANCE_REQUIRED
    });
  } catch (error) {
    console.error('Error verifying token:', error);
    return NextResponse.json({ error: 'Failed to verify token ownership' }, { status: 500 });
  }
} 