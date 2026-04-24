import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary-600">FoodDash</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="hover:text-primary-600 px-3 py-2 rounded-md font-medium transition-colors">Home</a>
                <a href="#" className="hover:text-primary-600 px-3 py-2 rounded-md font-medium transition-colors">Restaurants</a>
                <a href="#" className="hover:text-primary-600 px-3 py-2 rounded-md font-medium transition-colors">Offers</a>
                <Link to="/login" className="bg-primary-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200">
                  Login
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button className="p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Premium food delivery</span>{' '}
                <span className="block text-primary-600 xl:inline">at your doorstep</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Get your favorite meals from the best restaurants in town delivered fast and fresh. From gourmet dinners to quick snacks, we bring it all to you.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/register" className="flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-primary-600 hover:bg-primary-700 md:px-10 transition-all transform hover:scale-105 shadow-xl shadow-primary-200">
                    Join FoodDash
                  </Link>
                  <button className="flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-lg font-bold rounded-2xl text-slate-700 bg-white hover:bg-slate-50 md:px-10 transition-all">
                    Download App
                  </button>
                </div>
              </div>
              <div className="mt-10 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                      U{i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  <span className="font-bold text-slate-900">10k+</span> happy customers this week
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src="/hero.png" 
                  alt="Delicious burger" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Why choose FoodDash?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
              We provide the best service to make sure your hunger is satisfied.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary-200 transition-all group">
                <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Delivery</h3>
                <p className="text-slate-500">
                  Average delivery time under 30 minutes. Your food stays hot and fresh.
                </p>
              </div>

              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary-200 transition-all group">
                <div className="h-12 w-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                  ⭐
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Trusted Restaurants</h3>
                <p className="text-slate-500">
                  We partner with only the best and highest-rated restaurants in your area.
                </p>
              </div>

              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary-200 transition-all group lg:col-span-1 sm:col-span-2 lg:block sm:flex sm:flex-col sm:items-center lg:items-start text-center lg:text-left">
                <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                  🛡️
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Safe & Secure</h3>
                <p className="text-slate-500">
                  Secure payment options and contactless delivery for your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <span className="text-2xl font-bold text-white mb-4 block">FoodDash</span>
              <p className="max-w-xs text-slate-400">
                Delivering happiness to your door, one meal at a time.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
            <p>© 2026 FoodDash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
