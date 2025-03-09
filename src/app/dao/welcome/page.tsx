'use client';

import React, { useEffect, useState } from 'react';
import { Connection, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

const UNITY_TOKEN_ADDRESS = "7sQ78jgXatHAs3dhvsMP8aYLUt2NwFqa8KK5YAvsy6gi";
const SOLANA_RPC_URL = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://mainnet.helius-rpc.com/?api-key=7b0ef03f-b1ed-45ef-a68b-ffb1164bd3fd";

interface TokenStats {
  supply: string;
  holders: number;
  price: string;
}

export default function WelcomePage() {
  const [tokenStats, setTokenStats] = useState<TokenStats>({
    supply: "Loading...",
    holders: 0,
    price: "Loading..."
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTokenInfo();
  }, []);

  const fetchTokenInfo = async () => {
    try {
      setLoading(true);
      const connection = new Connection(SOLANA_RPC_URL, "confirmed");
      
      // Fetch token accounts
      const accounts = await connection.getParsedProgramAccounts(
        new PublicKey(TOKEN_PROGRAM_ID),
        {
          filters: [
            {
              dataSize: 165, // Token account size
            },
            {
              memcmp: {
                offset: 0,
                bytes: UNITY_TOKEN_ADDRESS,
              },
            },
          ],
        }
      );

      setTokenStats({
        supply: "1,000,000,000", // Total supply
        holders: accounts.length,
        price: "$0.05" // Example price
      });
    } catch (error) {
      console.error("Error fetching token info:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Token Overview Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-[#7C4DFF] mb-6">Welcome to Peace & Unity DAO</h1>
          <p className="text-gray-600 text-lg mb-8">
            Powered by the $UNITY token, our DAO is dedicated to fostering global harmony through blockchain technology.
          </p>
          
          {/* Token Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-[#7C4DFF] font-semibold mb-2">Total Supply</h3>
              <p className="text-2xl font-bold">{tokenStats.supply}</p>
              <p className="text-sm text-gray-500">$UNITY Tokens</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-[#7C4DFF] font-semibold mb-2">Token Holders</h3>
              <p className="text-2xl font-bold">{tokenStats.holders}</p>
              <p className="text-sm text-gray-500">Unique Addresses</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-[#7C4DFF] font-semibold mb-2">Current Price</h3>
              <p className="text-2xl font-bold">{tokenStats.price}</p>
              <p className="text-sm text-gray-500">Per $UNITY</p>
            </div>
          </div>
        </div>

        {/* Token Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#7C4DFF] mb-4">Token Details</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-gray-600">Token Name:</span>
                <span className="font-semibold">Peace & Unity</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Symbol:</span>
                <span className="font-semibold">$UNITY</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Network:</span>
                <span className="font-semibold">Solana</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Token Address:</span>
                <span className="font-mono text-sm">{UNITY_TOKEN_ADDRESS}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#7C4DFF] mb-4">Token Distribution</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-gray-600">Community:</span>
                <span className="font-semibold">40%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">DAO Treasury:</span>
                <span className="font-semibold">30%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Team:</span>
                <span className="font-semibold">20%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Marketing:</span>
                <span className="font-semibold">10%</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Get Tokens Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-[#7C4DFF] mb-4">Get $UNITY Tokens</h2>
          <p className="text-gray-600 mb-6">
            You need at least 100 $UNITY tokens to participate in DAO governance.
          </p>
          <a 
            href="https://jup.ag/swap/SOL-UNITY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#7C4DFF] text-white rounded-lg hover:bg-[#FFAB40] transition-colors"
          >
            Buy on Jupiter →
          </a>
        </div>
      </div>
    </div>
  );
} 