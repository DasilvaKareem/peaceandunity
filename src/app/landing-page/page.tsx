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

      {/* How We Work Towards Peace */}
      <div className="py-16 px-6 md:px-12 bg-gradient-to-br from-purple-100 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#7C4DFF] mb-4">How We Work Towards Peace</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our approach combines grassroots activism with blockchain technology to create lasting positive change.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#FFAB40] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold text-[#FFAB40] mb-3">Community Proposals</h3>
              <p className="text-gray-600">
                Members submit ideas for peace initiatives through our decentralized proposal system. Each voice matters in shaping our collective action.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#7C4DFF] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold text-[#7C4DFF] mb-3">Democratic Voting</h3>
              <p className="text-gray-600">
                $UNITY token holders vote on proposals, ensuring transparent and fair decision-making in selecting which initiatives to fund.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#00E5FF] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold text-[#00E5FF] mb-3">Resource Allocation</h3>
              <p className="text-gray-600">
                Approved projects receive funding and support through smart contracts, ensuring efficient and transparent distribution of resources.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#FFAB40] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold text-[#FFAB40] mb-3">Impact Tracking</h3>
              <p className="text-gray-600">
                We monitor and document the real-world impact of each initiative, sharing progress and learnings with our global community.
              </p>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="mt-16 mb-12">
            <h3 className="text-2xl font-bold text-center text-[#7C4DFF] mb-8">Our Global Impact So Far</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Projects Funded */}
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFAB40] mb-2">250+</div>
                <div className="text-lg text-gray-600">Peace Projects<br />Funded</div>
                <div className="mt-2 text-sm text-gray-500">Across 45 countries</div>
              </div>

              {/* Community Size */}
              <div className="text-center">
                <div className="text-4xl font-bold text-[#7C4DFF] mb-2">15,000+</div>
                <div className="text-lg text-gray-600">Active DAO<br />Members</div>
                <div className="mt-2 text-sm text-gray-500">From 120+ countries</div>
              </div>

              {/* Treasury */}
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00E5FF] mb-2">$2.5M</div>
                <div className="text-lg text-gray-600">Community<br />Treasury</div>
                <div className="mt-2 text-sm text-gray-500">100% community-managed</div>
              </div>

              {/* Impact */}
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFAB40] mb-2">100K+</div>
                <div className="text-lg text-gray-600">Lives<br />Impacted</div>
                <div className="mt-2 text-sm text-gray-500">And growing daily</div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mt-12 bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold text-center text-[#7C4DFF] mb-6">Recent Milestones</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFAB40] flex items-center justify-center text-white flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Launched 50 youth peace education programs reaching 25,000 students</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#7C4DFF] flex items-center justify-center text-white flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Facilitated 30 cross-border cultural exchange initiatives</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#00E5FF] flex items-center justify-center text-white flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Established 15 community mediation centers in conflict zones</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/governance" className="inline-block px-8 py-4 bg-[#7C4DFF] text-white rounded-full text-lg font-semibold hover:bg-[#FFAB40] transition-colors">
              Learn About Our Process
            </Link>
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

      {/* Proposal Submission Section */}
      <div className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#7C4DFF] mb-4">Submit Your Peace Initiative</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Have an idea that could make a difference? Share your vision for peace, and let's make it happen together.
          </p>

          <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              {/* Project Title */}
              <div>
                <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">
                  Initiative Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7C4DFF] focus:border-transparent"
                  placeholder="Give your peace initiative a memorable name"
                />
              </div>

              {/* Category Selection */}
              <div>
                <label htmlFor="category" className="block text-lg font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7C4DFF] focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  <option value="education">Peace Education</option>
                  <option value="community">Community Building</option>
                  <option value="environment">Environmental Harmony</option>
                  <option value="technology">Technology for Peace</option>
                  <option value="arts">Arts & Culture</option>
                  <option value="conflict">Conflict Resolution</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-lg font-semibold text-gray-700 mb-2">
                  Initiative Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7C4DFF] focus:border-transparent"
                  placeholder="Describe your initiative and how it promotes peace (max 500 words)"
                ></textarea>
              </div>

              {/* Impact & Goals */}
              <div>
                <label htmlFor="impact" className="block text-lg font-semibold text-gray-700 mb-2">
                  Expected Impact
                </label>
                <textarea
                  id="impact"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7C4DFF] focus:border-transparent"
                  placeholder="What positive change will your initiative create? How many people will it impact?"
                ></textarea>
              </div>

              {/* Resource Requirements */}
              <div>
                <label htmlFor="resources" className="block text-lg font-semibold text-gray-700 mb-2">
                  Required Resources
                </label>
                <input
                  type="text"
                  id="resources"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7C4DFF] focus:border-transparent"
                  placeholder="Estimated funding needed (in USD)"
                />
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7C4DFF] focus:border-transparent"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7C4DFF] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="inline-block px-8 py-4 bg-[#7C4DFF] text-white rounded-full text-lg font-semibold hover:bg-[#FFAB40] transition-colors"
                >
                  Submit Proposal
                </button>
                <p className="mt-4 text-sm text-gray-600">
                  By submitting, you agree to our community guidelines and terms of service.
                </p>
              </div>
            </form>
          </div>

          {/* Proposal Tips */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#FFAB40] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Be Specific</h3>
              <p className="text-gray-600">Clear goals and measurable outcomes make stronger proposals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#7C4DFF] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Think Community</h3>
              <p className="text-gray-600">Show how your initiative brings people together</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#00E5FF] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Be Realistic</h3>
              <p className="text-gray-600">Start small, think big, and plan for sustainable impact</p>
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