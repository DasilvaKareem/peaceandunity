'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function JoinDaoPage() {
  const [walletAddress, setWalletAddress] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const verifyTokenOwnership = async (e) => {
    e.preventDefault();
    
    if (!walletAddress) {
      setError('Please enter a wallet address');
      return;
    }
    
    try {
      setVerifying(true);
      setError('');
      setVerified(false);
      
      // Call our server-side API instead of directly using the RPC endpoint
      const response = await fetch('/api/verify-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ walletAddress }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to verify token ownership');
      }
      
      setTokenBalance(data.balance);
      setHasToken(data.hasToken);
      setVerified(true);
    } catch (err) {
      console.error("Error verifying token:", err);
      setError(err.message || 'Failed to verify token ownership. Please check the wallet address and try again.');
    } finally {
      setVerifying(false);
    }
  };

  const handleJoinDao = async () => {
    router.push('/dao/welcome');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-orange-50">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 bg-white bg-opacity-80 backdrop-blur-sm">
        <Link href="/" className="text-2xl font-bold text-[#7C4DFF]">Peace & Unity DAO</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-800 hover:text-[#FFAB40]">About</Link>
          <Link href="/token" className="text-gray-800 hover:text-[#FFAB40]">Token ($UNITY)</Link>
          <Link href="/governance" className="text-gray-800 hover:text-[#FFAB40]">Governance</Link>
          <Link href="/marketplace" className="text-gray-800 hover:text-[#FFAB40]">Marketplace</Link>
          <Link href="/events" className="text-gray-800 hover:text-[#FFAB40]">Events</Link>
        </div>
      </nav>

      {/* Page Header */}
      <div className="relative py-16 px-6 md:px-12 bg-gradient-to-r from-[#7C4DFF] via-[#FFAB40] to-[#00E5FF]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Peace & Unity DAO</h1>
          <p className="text-xl opacity-80">
            Verify your Peace & Unity token ownership to join our community
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg -mt-8 relative z-10 mb-16">
        <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-6 rounded-lg mb-8 border border-[#7C4DFF]/20">
          <h2 className="text-2xl font-bold text-[#7C4DFF] mb-4">Token Verification</h2>
          <p className="text-gray-700 mb-4">To join our DAO, you need to hold at least 1 Peace & Unity token.</p>
          <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
            <span className="font-semibold text-gray-700">Token Address:</span>
            <code className="bg-gray-100 px-2 py-1 rounded text-[#FFAB40] font-mono">7sQ78jgXatHAs3dhvsMP8aYLUt2NwFqa8KK5YAvsy6gi</code>
          </div>
        </div>
        
        <form onSubmit={verifyTokenOwnership} className="mb-8">
          <div className="mb-4">
            <label htmlFor="wallet-address" className="block text-gray-700 font-medium mb-2">
              Enter your Solana wallet address
            </label>
            <input
              id="wallet-address"
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="e.g., 7sQ78jgXatHAs3dhvsMP8aYLUt2NwFqa8KK5YAvsy6gi"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C4DFF] font-mono text-sm"
              disabled={verifying}
            />
          </div>
          
          <button
            type="submit"
            disabled={verifying}
            className="w-full bg-[#7C4DFF] hover:bg-[#6035e0] text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-70"
          >
            {verifying ? 'Verifying...' : 'Verify Token Ownership'}
          </button>
        </form>
        
        {error && (
          <div className="w-full bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-8">
            <p className="font-medium">Error</p>
            <p>{error}</p>
          </div>
        )}
        
        {verified && (
          <div className="w-full">
            {hasToken ? (
              <div className="text-center">
                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#7C4DFF] to-[#00E5FF] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[#7C4DFF] mb-2">Verification Successful!</h2>
                  <p className="text-gray-700">You hold <span className="font-bold text-[#FFAB40]">{tokenBalance}</span> Peace & Unity tokens</p>
                </div>
                
                <button 
                  onClick={handleJoinDao}
                  className="px-8 py-4 bg-[#FFAB40] text-white rounded-full text-lg font-semibold hover:bg-[#7C4DFF] transition-colors"
                >
                  Complete DAO Registration
                </button>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-lg mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FFAB40] to-[#FF5252] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[#FFAB40] mb-2">Insufficient Tokens</h2>
                  <p className="text-gray-700 mb-2">You need at least 1 Peace & Unity tokens to join the DAO.</p>
                  <p className="text-gray-700">Current balance: <span className="font-bold text-red-500">{tokenBalance}</span></p>
                </div>
                
                <a 
                  href="https://jup.ag/swap/SOL-Peace_&_Unity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#00E5FF] text-white rounded-full text-lg font-semibold hover:bg-[#7C4DFF] transition-colors inline-block"
                >
                  Buy Peace & Unity Tokens
                </a>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="bg-[#2E2E2E] text-white py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Stay Connected. Spread Peace.</h3>
              <p className="opacity-70">Join our community and help us build a more peaceful world through decentralized action.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 opacity-70">
                <li><Link href="/discord" className="hover:text-[#00E5FF]">Discord</Link></li>
                <li><Link href="/twitter" className="hover:text-[#00E5FF]">Twitter</Link></li>
                <li><Link href="/github" className="hover:text-[#00E5FF]">GitHub</Link></li>
                <li><Link href="/whitepaper" className="hover:text-[#00E5FF]">Whitepaper</Link></li>
                <li><Link href="/contact" className="hover:text-[#00E5FF]">Contact Us</Link></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-bold mb-4">Newsletter Signup</h4>
              <p className="opacity-70 mb-4">Sign up for updates on events, new initiatives, and volunteer opportunities.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg w-full" />
                <button className="bg-[#FFAB40] px-4 py-2 rounded-r-lg hover:bg-[#00E5FF] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center opacity-50 text-sm">
            © 2025 Peace & Unity DAO. Built with love and a dash of 60s sunshine. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
} 