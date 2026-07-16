'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { FaBehance } from 'react-icons/fa';

const quickLinks = [
  ['Profile', '#about'],
  ['SYINQ', '#startups'],
  ['Capabilities', '#capabilities'],
  ['Milestones', '#milestones'],
  ['Foundation', '#foundation'],
  ['Contact', '#contact'],
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/astatineRS', icon: <FiGithub /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/raunak-shukla', icon: <FiLinkedin /> },
  { name: 'Behance', href: 'https://behance.net/raunakshukla2', icon: <FaBehance /> },
];

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-9 text-center md:grid-cols-3 md:text-left">
          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-950 dark:text-white">Raunak Shukla</h2>
            <p className="max-w-sm text-sm leading-relaxed text-gray-600 dark:text-gray-300">Founder building trusted workflows and products that ship—across product, trust systems and AI-enabled execution.</p>
            <div className="mt-5 flex justify-center gap-2 md:justify-start">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="rounded-lg bg-gray-100 p-2.5 text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-950 dark:text-white">Navigate</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map(([name, href]) => <li key={name}><a href={href} className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">{name}</a></li>)}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-950 dark:text-white">Contact</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center justify-center gap-2 md:justify-start"><FiMail className="text-gray-400" /><a href="mailto:rsworks.in@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400">rsworks.in@gmail.com</a></li>
              <li className="flex items-center justify-center gap-2 md:justify-start"><FiMapPin className="text-gray-400" /><span>Noida, India</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-9 border-t border-gray-200 pt-7 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Raunak Shukla · Founder profile updated July 2026</p>
        </div>
      </div>

      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 rounded-full bg-indigo-600 p-3 text-white shadow-lg hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
