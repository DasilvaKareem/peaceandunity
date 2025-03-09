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

      {/* Volunteer Map Section */}
      <div className="py-16 px-6 md:px-12 bg-gradient-to-br from-purple-50 to-orange-50">
        <h2 className="text-3xl font-bold text-center text-[#7C4DFF] mb-12">Global Volunteer Network</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* North America */}
          <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-[400px] overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/images/north-america.jpg" 
                alt="North American landscape with mountains and forests" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#FFAB40] mb-2">North America</h3>
              <p className="text-gray-600 mb-4">Empowering communities through grassroots initiatives and youth engagement.</p>
            </div>
            <div className="absolute inset-0 bg-[#FFAB40] bg-opacity-90 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4">Active Volunteers: 2,500+</h4>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>Youth mentorship programs</li>
                <li>Environmental conservation</li>
                <li>Community art projects</li>
                <li>Peace education workshops</li>
              </ul>
            </div>
          </div>

          {/* South America */}
          <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-[400px] overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/images/south-america.jpg" 
                alt="South American rainforest and indigenous culture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#00E5FF] mb-2">South America</h3>
              <p className="text-gray-600 mb-4">Preserving indigenous wisdom while building sustainable futures.</p>
            </div>
            <div className="absolute inset-0 bg-[#00E5FF] bg-opacity-90 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4">Active Volunteers: 1,800+</h4>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>Indigenous rights advocacy</li>
                <li>Rainforest protection</li>
                <li>Cultural exchange programs</li>
                <li>Sustainable farming initiatives</li>
              </ul>
            </div>
          </div>

          {/* Europe */}
          <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-[400px] overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/images/europe.jpg" 
                alt="European cultural heritage and modern cities" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#7C4DFF] mb-2">Europe</h3>
              <p className="text-gray-600 mb-4">Bridging cultures through innovation and inclusive dialogue.</p>
            </div>
            <div className="absolute inset-0 bg-[#7C4DFF] bg-opacity-90 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4">Active Volunteers: 3,000+</h4>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>Refugee support programs</li>
                <li>Digital literacy training</li>
                <li>Peace festivals</li>
                <li>Cross-cultural dialogues</li>
              </ul>
            </div>
          </div>

          {/* Asia */}
          <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-[400px] overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/images/asia.jpg" 
                alt="Asian temples and modern technology" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#FFAB40] mb-2">Asia</h3>
              <p className="text-gray-600 mb-4">Harmonizing tradition with technological advancement.</p>
            </div>
            <div className="absolute inset-0 bg-[#FFAB40] bg-opacity-90 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4">Active Volunteers: 4,200+</h4>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>Tech education initiatives</li>
                <li>Rural development projects</li>
                <li>Mental health awareness</li>
                <li>Traditional arts preservation</li>
              </ul>
            </div>
          </div>

          {/* Africa */}
          <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-[400px] overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/images/africa.jpg" 
                alt="African wildlife and community development" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#00E5FF] mb-2">Africa</h3>
              <p className="text-gray-600 mb-4">Empowering communities through education and sustainable development.</p>
            </div>
            <div className="absolute inset-0 bg-[#00E5FF] bg-opacity-90 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4">Active Volunteers: 2,800+</h4>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>Educational outreach</li>
                <li>Clean water projects</li>
                <li>Women empowerment programs</li>
                <li>Digital skills training</li>
              </ul>
            </div>
          </div>

          {/* Australia/Oceania */}
          <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-[400px] overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/images/oceania.jpg" 
                alt="Australian outback and Pacific islands" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#7C4DFF] mb-2">Australia/Oceania</h3>
              <p className="text-gray-600 mb-4">Protecting marine life and preserving indigenous heritage.</p>
            </div>
            <div className="absolute inset-0 bg-[#7C4DFF] bg-opacity-90 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4">Active Volunteers: 1,500+</h4>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>Marine conservation</li>
                <li>Indigenous culture programs</li>
                <li>Climate change initiatives</li>
                <li>Youth leadership camps</li>
              </ul>
            </div>
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