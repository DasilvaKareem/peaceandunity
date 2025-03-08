import Link from 'next/link';

export default function GovernancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-orange-50">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 bg-white bg-opacity-80 backdrop-blur-sm">
        <Link href="/" className="text-2xl font-bold text-[#7C4DFF]">Peace & Unity DAO</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-800 hover:text-[#FFAB40]">About</Link>
          <Link href="/token" className="text-gray-800 hover:text-[#FFAB40]">Token ($UNITY)</Link>
          <Link href="/governance" className="text-[#FFAB40] hover:text-[#7C4DFF]">Governance</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Collective Governance</h1>
          <p className="text-xl opacity-80">
            How we make decisions together to create a more peaceful world
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#7C4DFF] mb-6">Our Governance Philosophy</h2>
            <p className="text-gray-800 mb-6">
              At Peace & Unity DAO, we believe that true peace can only be achieved through inclusive, transparent, and collaborative decision-making. Our governance model draws inspiration from both ancient consensus-building practices and modern decentralized technologies.
            </p>
            <p className="text-gray-800 mb-6">
              We've designed our governance system to be accessible to all members, regardless of their technical expertise or the size of their token holdings. While voting power is proportional to $UNITY holdings, we've implemented mechanisms to ensure that all voices can be heard and that decisions reflect our collective wisdom.
            </p>
            <div className="my-8 p-6 bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg italic text-center">
              "The best decisions are made in a circle where everyone can see each other's faces and hear each other's voices."
              <div className="mt-2 font-bold">— Traditional Peace Circle Wisdom</div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#FFAB40] mb-6">How Governance Works</h2>
            <div className="space-y-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#7C4DFF] mb-4">1. Proposal Creation</h3>
                <p className="text-gray-700 mb-4">
                  Any member holding at least 100 $UNITY tokens can submit a proposal. Proposals can range from funding peace initiatives to updating governance parameters or introducing new features to our platform.
                </p>
                <p className="text-gray-700">
                  To ensure quality, proposals must include:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>A clear description of the proposed action</li>
                  <li>Expected impact on our peace mission</li>
                  <li>Required resources and timeline</li>
                  <li>Success metrics and accountability measures</li>
                </ul>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#FFAB40] mb-4">2. Discussion Period</h3>
                <p className="text-gray-700 mb-4">
                  Each proposal enters a 7-day discussion period where community members can ask questions, suggest improvements, and express support or concerns. This period is crucial for refining proposals and building consensus.
                </p>
                <p className="text-gray-700">
                  Discussions take place on our forum and Discord, with weekly community calls for synchronous deliberation. We encourage respectful dialogue and active listening—values central to our peace mission.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#00E5FF] mb-4">3. Voting</h3>
                <p className="text-gray-700 mb-4">
                  After the discussion period, proposals move to a 5-day voting phase. Voting is conducted on-chain using $UNITY tokens, with 1 token equaling 1 vote. Members can vote "For," "Against," or "Abstain."
                </p>
                <p className="text-gray-700">
                  For a proposal to pass, it must receive:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>A majority of "For" votes (greater than 50%)</li>
                  <li>A minimum quorum of 10% of all circulating $UNITY tokens participating</li>
                  <li>For major decisions affecting the DAO's core mission, a higher threshold of 67% approval is required</li>
                </ul>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#7C4DFF] mb-4">4. Implementation</h3>
                <p className="text-gray-700 mb-4">
                  Approved proposals are implemented by working groups composed of DAO members. Each working group has a designated coordinator who reports progress back to the community.
                </p>
                <p className="text-gray-700">
                  For funding proposals, funds are released in tranches based on milestone achievements, ensuring accountability and effective use of community resources.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#00E5FF] mb-6">Current Governance Stats</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#7C4DFF] mb-2">42</div>
                <div className="text-gray-700">Proposals Passed</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#FFAB40] mb-2">3,500+</div>
                <div className="text-gray-700">Active Voters</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#00E5FF] mb-2">68%</div>
                <div className="text-gray-700">Average Participation</div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#7C4DFF] mb-6">Active Proposals</h2>
            <div className="space-y-6">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#7C4DFF]">PUP-23: Fund Peace Education in Conflict Zones</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Voting</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Allocate 50,000 $UNITY to develop and distribute peace education materials in five conflict-affected regions, reaching an estimated 10,000 young people.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Proposed by: harmony.eth</span>
                  <span>Ends in: 3 days</span>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#7C4DFF] h-2.5 rounded-full" style={{width: '72%'}}></div>
                  </div>
                  <div className="flex justify-between mt-1 text-sm">
                    <span>72% For</span>
                    <span>28% Against</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/governance/proposals/23" className="text-[#7C4DFF] font-semibold hover:underline">View Details & Vote →</Link>
                </div>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#FFAB40]">PUP-24: Community Art Exchange Program</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Discussion</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Create a cross-cultural art exchange program where artists from different countries collaborate on peace-themed NFT collections, with proceeds supporting local community centers.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Proposed by: artflower.eth</span>
                  <span>Discussion: 5 days left</span>
                </div>
                <div className="mt-4">
                  <Link href="/governance/proposals/24" className="text-[#FFAB40] font-semibold hover:underline">Join Discussion →</Link>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/governance/proposals" className="inline-block px-6 py-3 bg-[#7C4DFF] text-white rounded-lg hover:bg-[#FFAB40] transition-colors">
                View All Proposals
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#FFAB40] mb-6">Ready to Participate?</h2>
            <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
              Your voice matters in our collective journey toward peace. Join our governance process and help shape the future of Peace & Unity DAO.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/" className="px-8 py-4 bg-[#7C4DFF] text-white rounded-full text-lg font-semibold hover:bg-[#FFAB40] transition-colors">
                Submit a Proposal
              </Link>
              <Link href="/token" className="px-8 py-4 bg-white border-2 border-[#7C4DFF] text-[#7C4DFF] rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors">
                Get $UNITY Tokens
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