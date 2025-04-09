'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter, FiChevronDown, FiGrid } from 'react-icons/fi';
import { PiPaletteFill } from 'react-icons/pi';

// Define theme types
type ColorTheme = {
  name: string;
  primary: string;
  secondary: string;
};

const colorThemes: ColorTheme[] = [
  { name: 'Default', primary: '#3B82F6', secondary: '#10B981' },
  { name: 'Sunset', primary: '#F59E0B', secondary: '#EC4899' },
  { name: 'Ocean', primary: '#0EA5E9', secondary: '#8B5CF6' },
  { name: 'Forest', primary: '#22C55E', secondary: '#14B8A6' },
];

// Theme context and management
const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>(colorThemes[0]);

  const applyTheme = (theme: ColorTheme) => {
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    
    // Update CSS variables for gradients and accents
    document.documentElement.style.setProperty('--gradient-start', `${theme.primary}20`);
    document.documentElement.style.setProperty('--gradient-end', `${theme.secondary}20`);
    document.documentElement.style.setProperty('--accent-light', `${theme.primary}15`);
    document.documentElement.style.setProperty('--accent-dark', `${theme.secondary}15`);
    
    setCurrentTheme(theme);
    localStorage.setItem('selected-theme', theme.name);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
      const theme = colorThemes.find(t => t.name === savedTheme);
      if (theme) applyTheme(theme);
    }
  }, []);

  return { currentTheme, applyTheme };
};

const ThemeToggle = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio elements for toggle sounds
    audioRef.current = new Audio();
    audioRef.current.preload = 'auto';
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Try to play the sound file or generate one if the file isn't available
  const handleToggleWithSound = () => {
    if (audioRef.current) {
      // Try to load and play the audio file
      audioRef.current.src = isDark 
        ? '/sounds/light-switch.mp3' 
        : '/sounds/dark-switch.mp3';
      audioRef.current.volume = 0.3;
      
      audioRef.current.play().catch(e => {
        console.log('Audio file playback failed, using synthesized sound instead:', e);
        // Fallback to synthesized sound
        playToggleSound(isDark);
      });
    } else {
      // Fallback to synthesized sound
      playToggleSound(isDark);
    }
    
    // Call the actual theme toggle function
    toggleTheme();
  };
  
  // Function to generate a toggle sound using Web Audio API as a fallback
  const playToggleSound = (isDark: boolean) => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Different sound characteristics based on which mode we're switching to
      if (isDark) {
        // Switching to light: higher pitch "on" sound
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(880, audioContext.currentTime); // A5
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.2);
      } else {
        // Switching to dark: lower pitch "off" sound
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.3);
      }
    } catch (e) {
      console.log('Web Audio API not supported:', e);
    }
  };

  return (
    <motion.button
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center relative cursor-pointer"
      onClick={handleToggleWithSound}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.85 }}
      initial={{ rotate: 0 }}
      animate={{ rotate: isDark ? 360 : 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 0.5 
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Button shadow/glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-full ${
          isDark 
            ? 'bg-blue-500 opacity-20 dark:opacity-30' 
            : 'bg-yellow-400 opacity-20'
        }`}
        animate={{ 
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        initial={{ opacity: 1, rotate: 0 }}
        animate={{ 
          opacity: isDark ? 0 : 1,
          rotate: isDark ? -180 : 0,
          scale: isDark ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <FiSun size={20} className="text-yellow-600" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 180 }}
        animate={{ 
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <FiMoon size={20} className="text-blue-300" />
      </motion.div>
    </motion.button>
  );
};

const ColorThemeMenu = () => {
  const [open, setOpen] = useState(false);
  const { currentTheme, applyTheme } = useTheme();
  
  return (
    <div className="relative">
      <motion.button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full bg-gray-light dark:bg-gray-dark flex items-center justify-center relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Change color theme"
      >
        <PiPaletteFill size={18} className="text-blue-medium dark:text-blue-light" />
        <motion.span 
          className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-medium"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2
          }}
        />
      </motion.button>
      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 w-48"
          >
            <div className="text-xs font-medium mb-2 text-gray-500 dark:text-gray-400 px-2">
              Color Themes
            </div>
            {colorThemes.map((theme) => (
              <motion.button
                key={theme.name}
                className="w-full text-left px-2 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ x: 4 }}
                onClick={() => {
                  applyTheme(theme);
                  setOpen(false);
                }}
              >
                <div className="flex">
                  <div 
                    className="w-3 h-3 rounded-l-full" 
                    style={{ backgroundColor: theme.primary }}
                  />
                  <div 
                    className="w-3 h-3 rounded-r-full" 
                    style={{ backgroundColor: theme.secondary }}
                  />
                </div>
                <span className="text-sm">{theme.name}</span>
                {currentTheme.name === theme.name && (
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 py-0.5 px-1.5 rounded-full ml-auto">
                    Active
                  </span>
                )}
              </motion.button>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 my-1 pt-1">
              <div className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                Custom design tokens available
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Startups', href: '#startups' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hidden, setHidden] = useState(false);
  
  // Scroll direction detection for navbar behavior
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    // Check if user prefers dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Set up intersection observer for scrollspy
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-3 px-4 sm:px-6 border-b border-gray-200 dark:border-gray-800"
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <Link 
          href="#hero" 
          className="text-gray-900 dark:text-gray-100 font-bold text-xl flex items-center"
        >
          <motion.div 
            className="relative flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="relative z-10 flex items-center gap-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <FiGrid className="text-blue-600 dark:text-blue-400" size={20} />
              <span className="text-gradient">Raunak</span>
            </motion.span>
            
            {/* Decorative design element */}
            <motion.div 
              className="absolute -bottom-1 -right-1 h-10 w-10 bg-blue-200 dark:bg-blue-800 rounded-full z-0 opacity-20"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>
                  <motion.div
                    className={`relative px-3 py-2 rounded-md text-sm font-medium ${
                      activeSection === link.href.substring(1)
                        ? 'text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 dark:bg-blue-400 mx-3"
                        transition={{ type: "spring", stiffness: 400, damping: 40 }}
                      />
                    )}
                  </motion.div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-2">
          {/* Design system indicator - a nice touch for a product designer */}
          <ColorThemeMenu />

          {/* Social links */}
          <div className="hidden sm:flex space-x-2">
            <motion.a
              href="https://github.com/astatineRS"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/raunak-shukla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin size={18} />
            </motion.a>
            <motion.a
              href="https://twitter.com/RaunakS10097663"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiTwitter size={18} />
            </motion.a>
          </div>

          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden absolute left-0 right-0 top-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4 px-4 sm:px-6 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-3 rounded-md text-base font-medium ${
                      activeSection === link.href.substring(1)
                        ? 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="text-sm text-gray-700 dark:text-gray-300">Follow:</span>
              <motion.a
                href="https://github.com/astatineRS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/raunak-shukla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin size={18} />
              </motion.a>
              <motion.a
                href="https://twitter.com/RaunakS10097663"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiTwitter size={18} />
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar; 