import Link from 'next/link';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-inter">
      <header className="container mx-auto p-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-zinc-50">TrendPilot Pulse</div>
        <nav>
          <Link href="/brief" className="px-4 py-2 text-zinc-300 hover:text-zinc-50 transition-colors">
            See Today's Brief
          </Link>
        </nav>
      </header>

      <main>
        <section className="hero bg-gradient-to-br from-zinc-900 to-zinc-950 py-20 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-zinc-50">
              The Daily Trend Intelligence Tool for DTC Brands
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8">
              Know what's going viral before your competitors do.
            </p>
            <Link href="/brief" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg">
              See Today's Brief →
            </Link>
          </div>
        </section>

        <section className="features py-20 bg-zinc-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-zinc-50 mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="feature-card bg-zinc-800 p-8 rounded-lg shadow-md border border-zinc-700">
                <h3 className="text-2xl font-semibold text-zinc-50 mb-4">Daily Viral Trend Detection</h3>
                <p className="text-zinc-300">Stay ahead with real-time insights into what's trending across social media and search engines.</p>
              </div>
              <div className="feature-card bg-zinc-800 p-8 rounded-lg shadow-md border border-zinc-700">
                <h3 className="text-2xl font-semibold text-zinc-50 mb-4">DTC-Specific Insights</h3>
                <p className="text-zinc-300">Get curated analysis on how trends impact direct-to-consumer brands, not just any business.</p>
              </div>
              <div className="feature-card bg-zinc-800 p-8 rounded-lg shadow-md border border-zinc-700">
                <h3 className="text-2xl font-semibold text-zinc-50 mb-4">Actionable Recommendations</h3>
                <p className="text-zinc-300">Receive clear, immediate action steps you can take to capitalize on emerging trends.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing py-20 bg-zinc-950">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-zinc-50 mb-12">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
              <div className="pricing-card bg-zinc-900 p-8 rounded-lg shadow-md border border-zinc-700 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-zinc-50 mb-4">Starter</h3>
                  <p className="text-5xl font-extrabold text-blue-500 mb-6">$297<span className="text-xl text-zinc-300">/mo</span></p>
                  <ul className="text-zinc-300 text-left space-y-3 mb-8">
                    <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Daily Brief Email</li>
                    <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Top 5 Viral Trends</li>
                    <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>DTC-Specific Analysis</li>
                  </ul>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-lg transition-colors">
                  Get Started
                </button>
              </div>
              <div className="pricing-card bg-zinc-900 p-8 rounded-lg shadow-md border border-blue-600 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-zinc-50 mb-4">Pro</h3>
                  <p className="text-5xl font-extrabold text-blue-500 mb-6">$497<span className="text-xl text-zinc-300">/mo</span></p>
                  <ul className="text-zinc-300 text-left space-y-3 mb-8">
                    <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Everything in Starter</li>
                    <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Custom Keyword Tracking</li>
                    <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Slack Alerts Integration</li>
                  </ul>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-lg transition-colors">
                  Go Pro
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 bg-zinc-900 text-center text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} TrendPilot Pulse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
