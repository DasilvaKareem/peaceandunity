import Link from 'next/link';

export default function TokenPage() {
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
          <Link href="/" className="px-4 py-2 bg-[#FFAB40] text-white rounded-lg hover:bg-[#7C4DFF] transition-colors">
            Join Now
          </Link>
        </div>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Page Header */}
      <div className="relative py-16 px-6 md:px-12 bg-gradient-to-r from-[#7C4DFF] via-[#FFAB40] to-[#00E5FF]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">$UNITY Token</h1>
          <p className="text-xl opacity-80">
            The currency of peace and collective action
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#7C4DFF] mb-6">What is $UNITY?</h2>
            <p className="text-gray-800 mb-6">
              $UNITY is more than just a cryptocurrency—it's a tool for collective action and a symbol of our shared commitment to peace. As the governance token of Peace & Unity DAO, $UNITY empowers holders to propose, vote on, and fund initiatives that align with our mission.
            </p>
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#7C4DFF] mb-4">Token Details</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Token Name:</span>
                    <span className="font-bold">Unity Token</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Symbol:</span>
                    <span className="font-bold">$UNITY</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Blockchain:</span>
                    <span className="font-bold">Ethereum</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Total Supply:</span>
                    <span className="font-bold">100,000,000 UNITY</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Contract Address:</span>
                    <span className="font-bold text-sm">0x123...abc</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#FFAB40] mb-4">Token Distribution</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Community Treasury:</span>
                    <span className="font-bold">40%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Peace Initiatives Fund:</span>
                    <span className="font-bold">30%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Core Contributors:</span>
                    <span className="font-bold">15%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Initial Community Offering:</span>
                    <span className="font-bold">10%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Ecosystem Growth:</span>
                    <span className="font-bold">5%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#FFAB40] mb-6">Token Utility</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#7C4DFF] mb-3">Governance</h3>
                <p className="text-gray-700">Submit proposals, vote on initiatives, and help shape the future of Peace & Unity DAO. Your voice matters in our collective decision-making.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#FFAB40] mb-3">Staking Rewards</h3>
                <p className="text-gray-700">Stake your $UNITY tokens to earn rewards while supporting the stability and security of our ecosystem. Long-term holders are valued community members.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#00E5FF] mb-3">Access & Benefits</h3>
                <p className="text-gray-700">Unlock exclusive access to events, workshops, and special NFT drops. $UNITY holders also receive priority for peace ambassador programs.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#00E5FF] mb-6">How to Get $UNITY</h2>
            <p className="text-gray-800 mb-8">
              We believe in making $UNITY accessible to everyone who shares our vision, regardless of their financial resources. Here are several ways to obtain $UNITY tokens:
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#7C4DFF] mb-3">1. Community Contributions</h3>
                <p className="text-gray-700">
                  Contribute your skills, time, or creativity to DAO projects and earn $UNITY as a reward. We value all forms of contribution, from code to art to community building.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#FFAB40] mb-3">2. Token Swaps</h3>
                <p className="text-gray-700">
                  $UNITY is available on decentralized exchanges like Uniswap, allowing you to swap ETH or other tokens for $UNITY. We maintain liquidity pools to ensure fair access.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#00E5FF] mb-3">3. Peace Ambassador Program</h3>
                <p className="text-gray-700">
                  Apply to become a Peace Ambassador and receive $UNITY tokens for spreading our message and organizing local peace initiatives in your community.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#7C4DFF] mb-6">Tokenomics & Sustainability</h2>
            <p className="text-gray-800 mb-6">
              Our tokenomics model is designed to create a sustainable ecosystem that supports long-term peace initiatives while rewarding active participation. We've implemented several mechanisms to ensure the health and stability of the $UNITY token:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-800">
              <li><span className="font-bold text-[#FFAB40]">Gradual Token Release:</span> Core contributor and ecosystem tokens are subject to a 3-year vesting schedule to ensure long-term alignment.</li>
              <li><span className="font-bold text-[#FFAB40]">Proposal Fee Burning:</span> A small portion of tokens used for proposal submissions are burned, creating a deflationary mechanism.</li>
              <li><span className="font-bold text-[#FFAB40]">Impact Metrics:</span> Token rewards for peace initiatives are tied to measurable impact metrics, ensuring efficient use of community resources.</li>
              <li><span className="font-bold text-[#FFAB40]">Treasury Diversification:</span> The DAO treasury maintains a diversified portfolio to ensure stability through market fluctuations.</li>
            </ul>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#FFAB40] mb-6">Ready to Join the Movement?</h2>
            <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
              By holding $UNITY, you're not just owning a token—you're becoming part of a global community dedicated to creating a more peaceful world through collective action.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/" className="px-8 py-4 bg-[#7C4DFF] text-white rounded-full text-lg font-semibold hover:bg-[#FFAB40] transition-colors">
                Get $UNITY Tokens
              </Link>
              <Link href="/governance" className="px-8 py-4 bg-white border-2 border-[#7C4DFF] text-[#7C4DFF] rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors">
                Learn About Governance
              </Link>
            </div>
          </div>
        </div>
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