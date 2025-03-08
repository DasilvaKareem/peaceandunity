import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-orange-50">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 bg-white bg-opacity-80 backdrop-blur-sm">
        <div className="text-2xl font-bold text-[#7C4DFF]">Peace & Unity DAO</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-800 hover:text-[#FFAB40]">About</Link>
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

      {/* Hero Section */}
      <div className="relative py-20 px-6 md:px-12 bg-gradient-to-r from-[#7C4DFF] via-[#FFAB40] to-[#00E5FF]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Where Peace Meets the Blockchain</h1>
          <h2 className="text-xl md:text-2xl opacity-80 mb-8">
            Join a global community of dreamers, activists, and builders working together to spark positive change through decentralized collaboration.
          </h2>
          <Link href="/" className="inline-block px-8 py-4 bg-[#FFAB40] text-white rounded-full text-lg font-semibold hover:bg-[#00E5FF] transition-colors">
            Join the DAO
          </Link>
          <p className="mt-6 max-w-2xl mx-auto">
            At Peace & Unity DAO, we believe world peace starts with each individual's willingness to connect, share, and empower communities. By harnessing the power of web3 technology, our DAO funds grassroot initiatives, rewards community-driven solutions, and uplifts voices around the globe.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#7C4DFF] mb-6">Our Mission: Harmony Without Borders</h2>
            <p className="text-gray-800 mb-6">
              Born from the free-spirited energy of San Francisco's hippie era, Peace & Unity DAO channels the power of blockchain to tear down bureaucratic barriers and unite people worldwide under a single cause: peace. Through transparent governance and collective decision-making, we ensure that every contribution—big or small—helps cultivate harmony for future generations.
            </p>
            <Link href="/about" className="px-6 py-3 bg-[#FFAB40] text-white rounded-lg inline-block hover:bg-[#7C4DFF] transition-colors">
              Learn About Our Vision
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#FFAB40] to-[#00E5FF] flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#7C4DFF" strokeWidth="2" className="w-24 h-24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="2" x2="12" y2="22"></line>
                  <line x1="12" y1="12" x2="12" y2="22" transform="rotate(60 12 12)"></line>
                  <line x1="12" y1="12" x2="12" y2="22" transform="rotate(120 12 12)"></line>
                  <line x1="12" y1="12" x2="12" y2="22" transform="rotate(240 12 12)"></line>
                  <line x1="12" y1="12" x2="12" y2="22" transform="rotate(300 12 12)"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-[#7C4DFF] mb-12">Our Features</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#7C4DFF] mb-4">Empowering Global Voices</h3>
            <p className="text-gray-700">
              $UNITY is our governance token that grants you a direct say in how we fund peace initiatives. Stake your tokens, vote on proposals, and earn rewards for actively shaping our collective future.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#FFAB40] mb-4">Fair & Transparent Voting</h3>
            <p className="text-gray-700">
              Every major decision—from funding local community projects to setting strategic priorities—is decided by the community. Propose, debate, and vote using our intuitive on-chain tools.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#00E5FF] mb-4">Art for Impact</h3>
            <p className="text-gray-700">
              Support peace by collecting or creating unique NFTs with a hippie-chic vibe. Sales and royalties go directly toward funding social impact projects and sustaining the DAO's treasury.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#7C4DFF] mb-4">Global Gatherings & Workshops</h3>
            <p className="text-gray-700">
              Participate in real-world meetups, virtual hackathons, and interactive workshops led by activists and educators. Learn how decentralized tech can uplift communities and drive meaningful change.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-6 md:px-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#7C4DFF] mb-12">Voices of Unity</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#FFAB40] flex items-center justify-center text-white font-bold">SS</div>
              <div className="ml-4">
                <p className="font-bold">Sunflower Serena</p>
                <p className="text-sm text-gray-600">Community Ambassador</p>
              </div>
            </div>
            <p className="italic text-gray-700">
              "Peace & Unity DAO gave me the resources to launch a local youth peace camp. Watching kids learn about mindfulness and conflict resolution was a dream come true. This community is truly changing lives."
            </p>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#00E5FF] flex items-center justify-center text-white font-bold">OR</div>
              <div className="ml-4">
                <p className="font-bold">Oliver "Groovy" Reynolds</p>
                <p className="text-sm text-gray-600">NFT Artist</p>
              </div>
            </div>
            <p className="italic text-gray-700">
              "I've collaborated with other artists in the DAO to create psychedelic NFT collections inspired by the 'Summer of Love.' Knowing proceeds fund real-world peace initiatives adds a deeper meaning to every piece I mint."
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 md:px-12 bg-gradient-to-r from-[#7C4DFF] via-[#FFAB40] to-[#00E5FF]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Join Our Circle of Peace</h2>
          <p className="text-xl mb-8">
            Whether you're an artist, developer, activist, or simply someone who believes in a more harmonious world, there's a place for you in our community. Together, we can turn the dream of global peace into reality.
          </p>
          <Link href="/" className="inline-block px-8 py-4 bg-white text-[#7C4DFF] rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Connect Wallet & Join
          </Link>
          <p className="mt-4 text-sm">
            No crypto experience? No problem! <Link href="/learn" className="underline">Learn how to get started →</Link>
          </p>
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