'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiLinkedin, FiGithub, FiTwitter, FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Raunak Shukla</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-md">
              I don't speak code—I craft experiences, sculpting ideas into products that resonate with beauty and functionality.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://github.com/astatineRS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/raunak-shukla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/RaunakS10097663" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Startups', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start text-gray-700 dark:text-gray-300">
                <FiMail className="mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                <a href="mailto:rsworks.in@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  rsworks.in@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-700 dark:text-gray-300">
                <FiPhone className="mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                <a href="tel:+91 8176076516" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +91 8176076156
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-700 dark:text-gray-300">
                <FiMapPin className="mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span>Noida, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Raunak Shukla. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Crafted with 
            <span className="text-red-500 mx-1">❤</span> 
            using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
      
      {/* Simple scroll to top button */}
      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer; 