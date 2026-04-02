'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload, FiArrowDown, FiExternalLink } from 'react-icons/fi';
import { FaBehance } from 'react-icons/fa';

// Animated cursor follower
const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    const handleMouseLeave = () => setIsVisible(false);
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="fixed w-6 h-6 rounded-full pointer-events-none z-50 border-2 border-blue-500/60 hidden lg:flex"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        x: { type: 'spring', stiffness: 400, damping: 35 },
        y: { type: 'spring', stiffness: 400, damping: 35 },
        opacity: { duration: 0.15 },
      }}
    />
  );
};

// App Store badge component
const AppBadge = ({ store, href }: { store: 'ios' | 'android'; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="app-store-btn"
    whileHover={{ scale: 1.04, y: -1 }}
    whileTap={{ scale: 0.97 }}
  >
    {store === 'ios' ? (
      <>
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-[10px] opacity-75">Download on the</span>
          <span className="text-sm font-semibold">App Store</span>
        </div>
      </>
    ) : (
      <>
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.18 23.76c.3.16.64.22.99.16l.1-.06 11.17-6.45-2.54-2.54-9.72 8.89zm14.97-9.07L15.6 12l2.57-2.57L21.47 12l-3.32 2.69zm-3.7-3.85L3.27.24C2.92.08 2.55.05 2.22.18L13.33 11.3l1.12-1.46zm0 5.57l-1.12-1.41L2.22 23.82c.33.13.7.1 1.05-.06l11.18-7.35z"/>
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-[10px] opacity-75">Get it on</span>
          <span className="text-sm font-semibold">Google Play</span>
        </div>
      </>
    )}
  </motion.a>
);

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const phrases = ['Building SYINQ.', 'Designing Products.', 'Raising Funds.'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setTypedText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        if (charIndex > 0) {
          setTypedText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 40 : 65);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950" id="hero">
      <CursorFollower />

      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Soft gradient orb top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50 via-indigo-50 to-transparent dark:from-blue-950/30 dark:via-indigo-950/20 rounded-full opacity-70 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      {/* Soft gradient orb bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-50 to-transparent dark:from-indigo-950/20 rounded-full opacity-60 translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="section-container z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-8 lg:py-16">
        {/* Left: Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Role badge */}
          <motion.div
            className="flex justify-center lg:justify-start mb-5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="badge-role flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-pulse" />
              Co-Founder & CEO, SYINQ
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm{' '}
            <span className="text-gradient relative">
              Raunak Shukla
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            className="h-10 mb-5 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200">
              {typedText}
              <span className="animate-pulse text-blue-500">|</span>
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Product designer & startup founder turning ideas into polished digital experiences.
            Currently building <span className="font-semibold text-indigo-600 dark:text-indigo-400">SYINQ</span> — live on iOS & Android.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <motion.a
              href="https://topmate.io/raunak_shukla"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Session
            </motion.a>

            <motion.a
              href="/resume.pdf"
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              download
            >
              <FiDownload size={16} />
              Resume
            </motion.a>

            <motion.a
              href="https://www.behance.net/raunakshukla2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#053eff] hover:bg-[#0035e0] text-white px-5 py-2.5 rounded-xl font-medium transition-all duration-200 shadow-sm hover:shadow-md text-sm"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaBehance size={17} />
              Behance
            </motion.a>
          </motion.div>

          {/* SYINQ Download CTA */}
          <motion.div
            className="flex flex-col items-center lg:items-start gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.4 }}
          >
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-px bg-gray-300 dark:bg-gray-600 inline-block" />
              Download my app
              <span className="w-6 h-px bg-gray-300 dark:bg-gray-600 inline-block" />
            </p>
            <div className="flex gap-2.5 flex-wrap justify-center lg:justify-start">
              <AppBadge store="ios" href="https://apps.apple.com/in/app/syinq/id6755780778" />
              <AppBadge store="android" href="https://play.google.com/store/apps/details?id=com.rasync.sync" />
            </div>
          </motion.div>
        </div>

        {/* Right: Profile visual */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Animated ring */}
            <motion.div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/30 dark:via-indigo-900/20 dark:to-purple-900/10"
              animate={{ rotate: [0, 3, 0, -3, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Profile image */}
            <motion.div
              className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-xl border-2 border-white dark:border-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Image
                src="/profile.jpg"
                alt="Raunak Shukla"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Floating stats card */}
            <motion.div
              className="absolute -bottom-4 -left-6 z-20 bg-white dark:bg-gray-800 rounded-2xl shadow-card-hover px-4 py-3 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              whileHover={{ y: -3 }}
            >
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">SYINQ on App Stores</p>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-gray-900 dark:text-white leading-none">500+</span>
                  <span className="text-[10px] text-gray-500">Students</span>
                </div>
                <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-emerald-600 leading-none">Live</span>
                  <span className="text-[10px] text-gray-500">iOS & Android</span>
                </div>
              </div>
            </motion.div>

            {/* Floating badge - VC Medal */}
            <motion.div
              className="absolute -top-4 -right-4 z-20 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-xl px-3 py-2 shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-base">🥈</span>
                <div>
                  <p className="text-[10px] font-bold text-amber-800 dark:text-amber-300 leading-none">VC Silver Medal</p>
                  <p className="text-[9px] text-amber-600 dark:text-amber-400">Innovation & Entrepreneurship</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <span className="text-xs text-gray-400 dark:text-gray-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-gray-400 dark:text-gray-500"
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
