'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Profile', href: '#about' },
  { name: 'SYINQ', href: '#startups', highlight: true },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Milestones', href: '#milestones' },
  { name: 'Foundation', href: '#foundation' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/astatineRS', icon: <FiGithub size={17} /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/raunak-shukla', icon: <FiLinkedin size={17} /> },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setHidden(latest > previous && latest > 150 && !isOpen);
  });

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextIsDark = storedTheme ? storedTheme === 'dark' : prefersDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle('dark', nextIsDark);

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach((section) => observer.observe(section));

    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      document.getElementById(id)?.scrollIntoView({ block: 'start' });
    };

    const initialHashScroll = window.setTimeout(scrollToHash, 120);
    const settledHashScroll = window.setTimeout(scrollToHash, 700);
    window.addEventListener('hashchange', scrollToHash);
    return () => {
      observer.disconnect();
      window.clearTimeout(initialHashScroll);
      window.clearTimeout(settledHashScroll);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle('dark', nextIsDark);
    window.localStorage.setItem('portfolio-theme', nextIsDark ? 'dark' : 'light');
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 px-4 py-3 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/95 sm:px-6"
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="#hero" className="flex items-center gap-2" aria-label="Raunak Shukla — back to top">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-xs font-bold text-white">R</span>
          <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Raunak</span>
        </Link>

        <nav className="hidden lg:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      link.highlight
                        ? 'text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-900/20'
                        : isActive
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                    {link.highlight && <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="flex items-center justify-center rounded-xl bg-gray-100 p-2.5 dark:bg-gray-800"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FiSun size={17} className="text-amber-500" /> : <FiMoon size={17} className="text-gray-500" />}
          </button>

          <button
            type="button"
            className="rounded-xl bg-gray-100 p-2.5 text-gray-600 dark:bg-gray-800 dark:text-gray-300 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full border-b border-gray-100 bg-white px-4 py-4 shadow-lg dark:border-gray-800 dark:bg-gray-950 sm:px-6 lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    {link.name}
                    {link.highlight && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
