import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-teal-600">
           
            <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              
            </svg>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Discover Delicious Recipes!</h2>
                <p className="mt-4 text-gray-500">
                  Join our community of food lovers and get the latest recipes delivered to your inbox.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only"> Email </label>
                <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="your@email.com"
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />
                  <button className="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Explore</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/recipes" className="text-gray-700 transition hover:opacity-75">Recipes</Link>
                </li>
                <li>
                  <Link href="/categories" className="text-gray-700 transition hover:opacity-75">Categories</Link>
                </li>
                <li>
                  <Link href="/featured" className="text-gray-700 transition hover:opacity-75">Featured</Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/about" className="text-gray-700 transition hover:opacity-75">About Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-700 transition hover:opacity-75">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Legal</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/privacy" className="text-gray-700 transition hover:opacity-75">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-700 transition hover:opacity-75">Terms of Service</Link>
                </li>
              </ul>
            </div>

            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              {/* Social media icons */}
              
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">&copy; 2024. FoodFare. All rights reserved.</p>
            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <Link href="/terms" className="text-gray-500 transition hover:opacity-75">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-500 transition hover:opacity-75">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-500 transition hover:opacity-75">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;