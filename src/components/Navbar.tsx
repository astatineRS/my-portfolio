'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'SYINQ', href: '#startups', highlight: true },
  { name: 'Contact', href: '#contact' },
];

const ThemeToggle = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => (
  <motion.button
    className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
    onClick={toggleTheme}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}
    aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    {isDark ? (
      <FiSun size={17} className="text-amber-500" />
    ) : (
      <FiMoon size={17} className="text-gray-500" />
    )}
  </motion.button>
);

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md py-3 px-4 sm:px-6 border-b border-gray-100 dark:border-gray-800"
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="#hero">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">R</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white text-lg tracking-tight">Raunak</span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.div
                      className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        link.highlight
                          ? isActive
                            ? 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30'
                            : 'text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
                          : isActive
                          ? 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                      whileHover={{ y: -1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                      {link.name}
                      {link.highlight && (
                        <span className="ml-1.5 inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full align-middle" title="Live" />
                      )}
                      {isActive && (
                        <motion.div
                          layoutId="active-pill"
                          className={`absolute bottom-0.5 left-2 right-2 h-0.5 rounded-full ${link.highlight ? 'bg-indigo-500' : 'bg-blue-500'}`}
                          transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Social links */}
          <div className="hidden sm:flex items-center gap-1">
            {[
              { href: 'https://github.com/astatineRS', icon: <FiGithub size={17} /> },
              { href: 'https://linkedin.com/in/raunak-shukla', icon: <FiLinkedin size={17} /> },
              { href: 'https://twitter.com/RaunakS10097663', icon: <FiTwitter size={17} /> },
            ].map(({ href, icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden absolute left-0 right-0 top-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-3 px-4 sm:px-6 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="space-y-1 mb-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 + 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 py-2.5 px-3 rounded-xl text-sm font-medium transition-colors ${
                      link.highlight
                        ? 'text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
                        : activeSection === link.href.substring(1)
                        ? 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.name}
                    {link.highlight && (
                      <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-gray-800">
              <span className="text-xs text-gray-400 mr-1">Find me:</span>
              {[
                { href: 'https://github.com/astatineRS', icon: <FiGithub size={17} /> },
                { href: 'https://linkedin.com/in/raunak-shukla', icon: <FiLinkedin size={17} /> },
                { href: 'https://twitter.com/RaunakS10097663', icon: <FiTwitter size={17} /> },
              ].map(({ href, icon }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
