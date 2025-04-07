'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiLinkedin, FiGithub, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-light dark:bg-gray-dark py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="#hero" className="text-2xl font-bold text-blue-dark dark:text-blue-medium">
              Raunak Shukla
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md">
              I don't speak code—I craft experiences, sculpting ideas into products that resonate with beauty and functionality
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/raunak-shukla" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-dark dark:text-gray-300 dark:hover:text-blue-medium transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/astatineRS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-dark dark:text-gray-300 dark:hover:text-blue-medium transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href="https://twitter.com/RaunakS10097663" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-dark dark:text-gray-300 dark:hover:text-blue-medium transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter size={24} />
            </a>
            <a 
              href="mailto:rsworks.in@gmail.com" 
              className="text-gray-600 hover:text-blue-dark dark:text-gray-300 dark:hover:text-blue-medium transition-colors"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="#about" className="text-gray-600 hover:text-blue-dark dark:text-gray-300 dark:hover:text-blue-medium transition-colors">
                About
              </Link>
              <Link href="#startups" className="text-gray-600 hover:text-blue-dark dark:text-gray-300 dark:hover:text-blue-medium transition-colors">
                Startups
              </Link>
              <Link href="#skills" className="text-gray-600 hover:text-blue-dark dark:text-gray-300 dark:hover:text-blue-medium transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-gray-600 hover:text-blue-dark dark:text-gray-300 dark:hover:text-blue-medium transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-dark dark:text-gray-300 dark:hover:text-blue-medium transition-colors">
                Contact
              </Link>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ y: -5 }}
              aria-label="Scroll to top"
            >
              <FiArrowUp size={20} />
            </motion.button>
          </div>
          
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
            © {currentYear} Raunak Shukla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 