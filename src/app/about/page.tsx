import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-orange-50">
      {/* Navigation Bar - Same as landing page */}
      <nav className="flex justify-between items-center p-6 bg-white bg-opacity-80 backdrop-blur-sm">
        <Link href="/" className="text-2xl font-bold text-[#7C4DFF]">Peace & Unity DAO</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-[#FFAB40] hover:text-[#7C4DFF]">About</Link>
          <Link href="/token" className="text-gray-800 hover:text-[#FFAB40]">Token ($UNITY)</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl opacity-80">
            How a collective dream of peace became a decentralized reality
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#7C4DFF] mb-6">The Vision</h2>
            <p className="text-gray-800 mb-6">
              Peace & Unity DAO was born in 2023 from a gathering of activists, technologists, and dreamers who shared a common belief: that blockchain technology could be harnessed not just for financial gain, but for social good and global harmony.
            </p>
            <p className="text-gray-800 mb-6">
              Drawing inspiration from the San Francisco Summer of Love and the peace movements of the 1960s, our founders envisioned a digital commune where resources could be pooled and directed toward initiatives that foster understanding, cooperation, and peace across borders and cultures.
            </p>
            <div className="my-8 p-6 bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg italic text-center">
              "We're not just building a DAO. We're reviving the spirit of the 60s peace movement for the digital age."
              <div className="mt-2 font-bold">— Luna Starlight, Co-Founder</div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#FFAB40] mb-6">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#7C4DFF] mb-3">Peace First</h3>
                <p>We believe in non-violent solutions and promoting understanding across divides. Every project we fund must contribute to a more peaceful world.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#FFAB40] mb-3">Radical Inclusion</h3>
                <p>Our community welcomes all who share our vision, regardless of background, expertise, or resources. Everyone has something valuable to contribute.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#00E5FF] mb-3">Transparent Governance</h3>
                <p>All decisions are made openly and collectively. We believe in the wisdom of the community and the power of decentralized decision-making.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#00E5FF] mb-6">How We Work</h2>
            <p className="text-gray-800 mb-6">
              Peace & Unity DAO operates through a combination of on-chain governance and real-world action. Our community members propose initiatives, vote on funding allocations, and collaborate on implementation.
            </p>
            <p className="text-gray-800 mb-6">
              From funding peace education programs in conflict zones to supporting artistic expressions of unity, our projects span the globe but share a common purpose: fostering a more harmonious world.
            </p>
            <div className="my-8">
              <h3 className="text-xl font-bold text-[#7C4DFF] mb-4">Our Impact So Far</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Funded 12 grassroots peace initiatives across 8 countries</li>
                <li>Supported 30+ artists creating work that promotes unity and understanding</li>
                <li>Facilitated 5 international peace dialogues using our decentralized platform</li>
                <li>Built a community of over 10,000 peace advocates worldwide</li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#7C4DFF] mb-6">Meet the Core Contributors</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#FFAB40] to-[#00E5FF] flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#7C4DFF]">LS</div>
                </div>
                <h3 className="mt-4 text-xl font-bold">Luna Starlight</h3>
                <p className="text-gray-600">Co-Founder & Vision Keeper</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#7C4DFF] to-[#FFAB40] flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#00E5FF]">RH</div>
                </div>
                <h3 className="mt-4 text-xl font-bold">River Harmony</h3>
                <p className="text-gray-600">Tech Lead & Blockchain Architect</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#00E5FF] to-[#7C4DFF] flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#FFAB40]">SG</div>
                </div>
                <h3 className="mt-4 text-xl font-bold">Sky Gardener</h3>
                <p className="text-gray-600">Community Cultivator</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#FFAB40] mb-6">Join Our Journey</h2>
            <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
              The path to global peace isn't a straight line, but a beautiful, winding journey we walk together. Whether you're a developer, artist, activist, or simply someone who believes in our vision, there's a place for you in our community.
            </p>
            <Link href="/" className="inline-block px-8 py-4 bg-[#7C4DFF] text-white rounded-full text-lg font-semibold hover:bg-[#FFAB40] transition-colors">
              Become a Member
            </Link>
          </div>
        </div>
      </div>

      {/* Footer - Same as landing page */}
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