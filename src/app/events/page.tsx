import Link from 'next/link';

export default function EventsPage() {
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
          <Link href="/events" className="text-[#FFAB40] hover:text-[#7C4DFF]">Events</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Gatherings</h1>
          <p className="text-xl opacity-80">
            Connect, learn, and spread peace together
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#7C4DFF] mb-6">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Event 1 */}
              <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg overflow-hidden">
                <div className="h-48 bg-[#7C4DFF] relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">JUN</div>
                      <div className="text-4xl font-bold">15</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#7C4DFF] mb-2">Digital Peace Summit 2025</h3>
                  <p className="text-gray-600 mb-4">Virtual Event • 10:00 AM - 6:00 PM UTC</p>
                  <p className="text-gray-700 mb-4">
                    Join thought leaders, activists, and artists for a day of discussions on using blockchain technology for peace-building initiatives.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#FFAB40] font-bold">500 Spots Left</span>
                    <Link href="/events/peace-summit" className="px-4 py-2 bg-[#7C4DFF] text-white rounded-lg hover:bg-[#FFAB40] transition-colors">
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg overflow-hidden">
                <div className="h-48 bg-[#FFAB40] relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">JUL</div>
                      <div className="text-4xl font-bold">01</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#FFAB40] mb-2">Peace Art Workshop</h3>
                  <p className="text-gray-600 mb-4">San Francisco & Virtual • 2:00 PM PDT</p>
                  <p className="text-gray-700 mb-4">
                    Learn to create peace-themed NFT art with guidance from our resident artists. Both in-person and virtual attendance options available.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#FFAB40] font-bold">Limited Spots</span>
                    <Link href="/events/art-workshop" className="px-4 py-2 bg-[#FFAB40] text-white rounded-lg hover:bg-[#7C4DFF] transition-colors">
                      Join Workshop
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Community Calls */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#FFAB40] mb-6">Monthly Community Calls</h2>
            <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-[#7C4DFF] mb-4">Peace & Unity Town Hall</h3>
                  <p className="text-gray-700 mb-4">
                    Join us every first Wednesday of the month for updates on DAO activities, proposal discussions, and community sharing.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Next Call: July 5th, 2025</li>
                    <li>• Time: 3:00 PM UTC</li>
                    <li>• Duration: 90 minutes</li>
                    <li>• Platform: Discord</li>
                  </ul>
                  <button className="mt-6 px-6 py-3 bg-[#7C4DFF] text-white rounded-lg hover:bg-[#FFAB40] transition-colors">
                    Add to Calendar
                  </button>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#7C4DFF" strokeWidth="2" className="w-16 h-16">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Past Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#00E5FF] mb-6">Past Events</h2>
            <div className="space-y-6">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-[#7C4DFF]">Global Peace Hackathon</h3>
                    <p className="text-gray-600">May 15-17, 2025</p>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Completed</span>
                </div>
                <p className="text-gray-700 mt-4">
                  48 hours of collaborative building for peace. Teams created dApps focused on conflict resolution and community building.
                </p>
                <Link href="/events/hackathon-2025" className="text-[#7C4DFF] hover:underline mt-4 inline-block">
                  View Results →
                </Link>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-[#FFAB40]">Peace Through Music Festival</h3>
                    <p className="text-gray-600">April 20, 2025</p>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Completed</span>
                </div>
                <p className="text-gray-700 mt-4">
                  A virtual music festival featuring artists from conflict regions, celebrating unity through artistic expression.
                </p>
                <Link href="/events/music-festival" className="text-[#FFAB40] hover:underline mt-4 inline-block">
                  Watch Recordings →
                </Link>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/events/archive" className="inline-block px-6 py-3 bg-[#00E5FF] text-white rounded-lg hover:bg-[#FFAB40] transition-colors">
                View All Past Events
              </Link>
            </div>
          </div>

          {/* Host an Event */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#FFAB40] mb-6">Want to Host an Event?</h2>
            <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
              Have an idea for a peace-building event? Submit your proposal and get support from the DAO community.
            </p>
            <Link href="/events/propose" className="inline-block px-8 py-4 bg-[#7C4DFF] text-white rounded-full text-lg font-semibold hover:bg-[#FFAB40] transition-colors">
              Submit Event Proposal
            </Link>
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