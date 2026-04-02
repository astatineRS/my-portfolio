'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiUsers, FiLayers, FiBarChart2, FiChevronDown, FiExternalLink, FiSmartphone } from 'react-icons/fi';

// App store badge inside the card
const InlineAppBadge = ({ store, href }: { store: 'ios' | 'android'; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-150 shadow-sm"
    whileHover={{ scale: 1.04, y: -1 }}
    whileTap={{ scale: 0.97 }}
  >
    {store === 'ios' ? (
      <>
        <svg className="w-3 h-3 fill-current flex-shrink-0" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        App Store
      </>
    ) : (
      <>
        <svg className="w-3 h-3 fill-current flex-shrink-0" viewBox="0 0 24 24">
          <path d="M3.18 23.76c.3.16.64.22.99.16l.1-.06 11.17-6.45-2.54-2.54-9.72 8.89zm14.97-9.07L15.6 12l2.57-2.57L21.47 12l-3.32 2.69zm-3.7-3.85L3.27.24C2.92.08 2.55.05 2.22.18L13.33 11.3l1.12-1.46zm0 5.57l-1.12-1.41L2.22 23.82c.33.13.7.1 1.05-.06l11.18-7.35z"/>
        </svg>
        Play Store
      </>
    )}
  </motion.a>
);

const SyinqFeatured = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="rounded-3xl border-2 border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-br from-white via-indigo-50/30 to-white dark:from-gray-800 dark:via-indigo-950/20 dark:to-gray-800 overflow-hidden shadow-syinq mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Header banner */}
      <div className="relative h-52 sm:h-64 overflow-hidden">
        <Image
          src="/syinq.jpg"
          alt="SYINQ"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="badge-live text-xs">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Live on App Store
              </span>
              <span className="badge-live text-xs">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Live on Play Store
              </span>
              <span className="badge-raising text-xs">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                Actively Raising
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">SYINQ</h3>
            <p className="text-indigo-200 text-sm font-medium">The Student Super-App</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <InlineAppBadge store="ios" href="https://apps.apple.com/in/app/syinq/id6755780778" />
            <InlineAppBadge store="android" href="https://play.google.com/store/apps/details?id=com.rasync.sync" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="badge-role">Co-Founder & CEO</span>
              <a
                href="https://syinq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline"
              >
                syinq.com <FiExternalLink size={12} />
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              SYINQ is a student-centric super-app combining carpooling, a peer marketplace, and a
              community forum — all with AI-powered matching and verified student profiles.
              Currently pre-revenue, actively growing users, and shipping new features continuously.
            </p>
          </div>

          {/* Stats */}
          <div className="flex sm:flex-col gap-4 sm:gap-3 sm:min-w-[140px]">
            {[
              { value: '500+', label: 'Beta Students' },
              { value: '35%', label: 'Monthly Growth' },
              { value: '200+', label: 'Carpool Matches' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center sm:text-right">
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400 leading-none">{value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {[
            { icon: <FiUsers size={13} />, text: 'AI Auto-matching' },
            { icon: <FiSmartphone size={13} />, text: 'Student Verified' },
            { icon: <FiLayers size={13} />, text: 'Peer Marketplace' },
            { icon: <FiBarChart2 size={13} />, text: 'Community Forum' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium px-2.5 py-1 rounded-full border border-indigo-100 dark:border-indigo-800">
              {icon}
              {text}
            </div>
          ))}
        </div>

        {/* Expand toggle */}
        <motion.button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          whileHover={{ x: 2 }}
        >
          {expanded ? 'Show less' : 'Deep dive — challenge, solution & outcomes'}
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <FiChevronDown size={16} />
          </motion.div>
        </motion.button>

        {/* Expanded detail */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-indigo-100 dark:border-indigo-900/50 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">The Problem</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Students lacked affordable, verified transportation options, a trusted peer marketplace for second-hand goods, and a centralised space for academic support and campus community.
                  </p>

                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">Our Solution</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    A unified platform with strong student verification, AI matchmaking for carpools and trades, and a community forum — solving multiple pain points in a single app.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">My Contributions</h4>
                  <ul className="space-y-1.5 mb-4">
                    {[
                      'Led all product design and UX across the app',
                      'Conducted market research and competitor analysis',
                      'Built high-fidelity prototypes for investor decks',
                      'Designed system architecture and data models',
                      'Co-convened Bennovate 2.0 — Bennett University\'s biggest E-Summit',
                      'Leading fundraising and investor relations',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-1 h-1 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">Key Outcomes</h4>
                  <ul className="space-y-1.5">
                    {[
                      'Live on both the App Store and Google Play',
                      '500+ students onboarded in beta',
                      '35% monthly active user growth',
                      '200+ carpooling matches facilitated',
                      'Seed funding secured; pre-revenue, actively raising',
                      'Continuously shipping new features and updates',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const CrownCastCard = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="card hover-lift"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="relative w-full h-40 rounded-xl overflow-hidden mb-5">
        <Image src="/crowncast.jpg" alt="CrownCast" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-4">
          <h3 className="text-xl font-bold text-white">CrownCast</h3>
          <p className="text-gray-300 text-xs">Creator Monetisation Platform</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="badge-role">Founding Member</span>
      </div>

      <p className="paragraph text-sm mb-4">
        Platform for YouTubers and brands featuring interactive campaigns, viewer challenges, and deep analytics.
        Partnered with 25+ mid-tier YouTubers and facilitated 15+ brand campaigns.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {['Viewer Challenges', 'Brand Partnerships', 'Analytics Dashboard', 'Interactive Campaigns'].map((tag) => (
          <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <motion.button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        whileHover={{ x: 2 }}
      >
        {expanded ? 'Show less' : 'View details'}
        <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <FiChevronDown size={15} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 space-y-3">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">Contributions</h5>
                <ul className="space-y-1">
                  {[
                    'Spearheaded full product lifecycle from conception to launch',
                    'Designed high-fidelity prototypes and user interfaces',
                    'Conducted user testing with early adopter creators',
                    'Developed analytics dashboard monitoring 40+ metrics',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                      <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">Outcomes</h5>
                <ul className="space-y-1">
                  {[
                    '25+ mid-tier YouTubers on the platform',
                    '15 brand partnership campaigns facilitated',
                    '22% average increase in creator engagement',
                    'Proprietary creator-brand matching algorithm',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Startups = () => {
  return (
    <div className="section-container">
      <motion.h2
        className="heading-xl text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Startup Journey
      </motion.h2>

      <motion.p
        className="paragraph text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        From idea to App Store — I've founded and co-founded ventures where I lead product, design, and fundraising.
      </motion.p>

      {/* SYINQ — Featured */}
      <SyinqFeatured />

      {/* Other ventures */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CrownCastCard />

        {/* SYINQ website CTA card */}
        <motion.a
          href="https://syinq.com"
          target="_blank"
          rel="noopener noreferrer"
          className="card border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/30 dark:to-gray-800 flex flex-col items-center justify-center text-center hover-lift min-h-[200px] group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/70 transition-colors">
            <FiExternalLink size={22} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-1">Explore SYINQ</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Visit the full website</p>
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline">syinq.com →</span>
        </motion.a>
      </div>
    </div>
  );
};

export default Startups;
