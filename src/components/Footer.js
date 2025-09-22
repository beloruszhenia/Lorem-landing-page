import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  // Social icons components
  const TwitterIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.508 0-4.541-2.033-4.541-4.541s2.033-4.541 4.541-4.541 4.541 2.033 4.541 4.541-2.033 4.541-4.541 4.541zm7.058 0c-2.508 0-4.541-2.033-4.541-4.541s2.033-4.541 4.541-4.541 4.541 2.033 4.541 4.541-2.033 4.541-4.541 4.541z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  return (
    <footer id="footer" className="bg-brand-heading text-white">
      {/* Newsletter Section */}
      <div className="bg-brand-accent/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="max-w-2xl text-center">
              <h4 className="text-2xl font-bold mb-4">Join Our Newsletter</h4>
              <p className="text-gray-300 mb-6">Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <form action="forms/newsletter.php" method="post" className="php-email-form">
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 border-0 focus:ring-2 focus:ring-brand-accent outline-none"
                  />
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-brand-accent text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="loading hidden">Loading</div>
                <div className="error-message hidden text-red-400 mt-2"></div>
                <div className="sent-message hidden text-green-400 mt-2">Your subscription request has been sent. Thank you!</div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="index.html" className="flex items-center mb-4">
              <span className="text-2xl font-bold">LOREM</span>
            </a>
            <div className="space-y-2">
              <p className="text-gray-300">вул. Михайлівська, 15</p>
              <p className="text-gray-300">Житомир, 10001</p>
              <p className="text-gray-300 mt-4"><strong className="text-white">Phone:</strong> +380 (41) 234 56 78</p>
              <p className="text-gray-300"><strong className="text-white">Email:</strong> info@lorem.com.ua</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-brand-accent mr-2" />
                <a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">Home</a>
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-brand-accent mr-2" />
                <a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">About us</a>
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-brand-accent mr-2" />
                <a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">Services</a>
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-brand-accent mr-2" />
                <a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">Terms of service</a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-brand-accent mr-2" />
                <a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">Web Design</a>
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-brand-accent mr-2" />
                <a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">Web Development</a>
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-brand-accent mr-2" />
                <a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">Product Management</a>
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-brand-accent mr-2" />
                <a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">Marketing</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <p className="text-gray-300 mb-4">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div className="flex gap-3">
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-brand-accent hover:text-white transition-colors duration-300">
                <TwitterIcon />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-brand-accent hover:text-white transition-colors duration-300">
                <FacebookIcon />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-brand-accent hover:text-white transition-colors duration-300">
                <InstagramIcon />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-brand-accent hover:text-white transition-colors duration-300">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-300">
            © <span>Copyright</span> <strong className="px-1 text-white">LOREM</strong> <span>All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
