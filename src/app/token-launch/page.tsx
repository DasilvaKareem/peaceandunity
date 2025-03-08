import Link from 'next/link';

export default function TokenLaunchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-orange-50">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 bg-white bg-opacity-80 backdrop-blur-sm">
        <Link href="/" className="text-2xl font-bold text-[#7C4DFF]">Peace & Unity DAO</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-800 hover:text-[#FFAB40]">About</Link>
          <Link href="/token" className="text-[#FFAB40] hover:text-[#7C4DFF]">Token ($UNITY)</Link>
          <Link href="/governance" className="text-gray-800 hover:text-[#FFAB40]">Governance</Link>
          <Link href="/marketplace" className="text-gray-800 hover:text-[#FFAB40]">Marketplace</Link>
          <Link href="/events" className="text-gray-800 hover:text-[#FFAB40]">Events</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative py-16 px-6 md:px-12 bg-gradient-to-r from-[#7C4DFF] via-[#FFAB40] to-[#00E5FF]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">$UNITY Token Launch</h1>
          <p className="text-xl opacity-80 mb-8">
            Be part of the peace movement. Join our token launch.
          </p>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold">24h</div>
                <div className="text-sm opacity-80">Days</div>
              </div>
              <div>
                <div className="text-2xl font-bold">12h</div>
                <div className="text-sm opacity-80">Hours</div>
              </div>
              <div>
                <div className="text-2xl font-bold">45m</div>
                <div className="text-sm opacity-80">Minutes</div>
              </div>
              <div>
                <div className="text-2xl font-bold">30s</div>
                <div className="text-sm opacity-80">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Token Info */}
      <div className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#7C4DFF] mb-6">Token Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Token Name</span>
                  <span className="font-bold">Unity Token</span>
                </div>
                <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Symbol</span>
                  <span className="font-bold">$UNITY</span>
                </div>
                <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Total Supply</span>
                  <span className="font-bold">100,000,000 UNITY</span>
                </div>
                <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Initial Price</span>
                  <span className="font-bold">0.1 ETH</span>
                </div>
                <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Minimum Purchase</span>
                  <span className="font-bold">0.1 ETH</span>
                </div>
                <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Maximum Purchase</span>
                  <span className="font-bold">5 ETH</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#FFAB40] mb-6">Token Distribution</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Public Sale</span>
                    <span className="font-bold">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#7C4DFF] h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Community Treasury</span>
                    <span className="font-bold">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#FFAB40] h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Team & Advisors</span>
                    <span className="font-bold">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#00E5FF] h-2 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Marketing & Partnerships</span>
                    <span className="font-bold">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#7C4DFF] h-2 rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Liquidity Pool</span>
                    <span className="font-bold">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#FFAB40] h-2 rounded-full" style={{width: '5%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Section */}
          <div className="mt-16">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-[#7C4DFF] mb-8">Purchase $UNITY Tokens</h2>
              <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-8 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Amount in ETH</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7C4DFF]"
                      placeholder="0.0"
                      min="0.1"
                      max="5"
                      step="0.1"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">You will receive</label>
                    <div className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300">
                      0 UNITY
                    </div>
                  </div>
                  <button className="w-full px-6 py-3 bg-[#7C4DFF] text-white rounded-lg hover:bg-[#FFAB40] transition-colors">
                    Connect Wallet to Purchase
                  </button>
                </div>
                <div className="mt-4 text-sm text-gray-600 text-center">
                  By purchasing tokens, you agree to our <Link href="/terms" className="text-[#7C4DFF] hover:underline">Terms & Conditions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2E2E2E] text-white py-12 px-6 md:px-12">
        {/* ... Footer content (same as other pages) ... */}
      </footer>
    </div>
  );
} 