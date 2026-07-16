'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDown, FiDownload, FiExternalLink, FiLinkedin, FiShield } from 'react-icons/fi';

const AppBadge = ({ store, href }: { store: 'ios' | 'android'; href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="app-store-btn" aria-label={`Open SYINQ on ${store === 'ios' ? 'the App Store' : 'Google Play'}`}>
    <span className="text-base" aria-hidden="true">{store === 'ios' ? '●' : '▶'}</span>
    <span className="flex flex-col leading-none">
      <span className="text-[10px] opacity-75">{store === 'ios' ? 'Download on the' : 'Get it on'}</span>
      <span className="text-sm font-semibold">{store === 'ios' ? 'App Store' : 'Google Play'}</span>
    </span>
  </a>
);

export default function Hero() {
  return (
    <div className="relative flex min-h-screen items-center overflow-hidden bg-white pt-24 dark:bg-gray-950">
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/4 rounded-full bg-gradient-to-bl from-blue-50 via-indigo-50 to-transparent opacity-80 dark:from-blue-950/30 dark:via-indigo-950/20" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 h-[420px] w-[420px] -translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tr from-indigo-50 to-transparent opacity-70 dark:from-indigo-950/20" aria-hidden="true" />

      <div className="section-container relative z-10 grid items-center gap-14 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
        <div className="text-center lg:text-left">
          <motion.div
            className="mb-5 flex justify-center lg:justify-start"
            initial={false}
          >
            <span className="badge-role flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              Co-Founder & CEO, SYINQ
            </span>
          </motion.div>

          <motion.h1
            className="mb-5 text-4xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-7xl"
            initial={false}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            Raunak Shukla
          </motion.h1>

          <motion.p
            className="mb-5 text-xl font-semibold leading-tight text-indigo-600 dark:text-indigo-400 sm:text-2xl lg:text-3xl"
            initial={false}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            Product, trust systems & AI-enabled execution.
          </motion.p>

          <motion.p
            className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg lg:mx-0"
            initial={false}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            I turn messy real-world behaviour into clear systems, trusted workflows and products that ship. Currently building SYINQ, India&apos;s verified campus commute network.
          </motion.p>

          <motion.div
            className="mb-7 flex flex-wrap justify-center gap-3 lg:justify-start"
            initial={false}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            <a href="https://syinq.com" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
              Explore SYINQ <FiExternalLink size={16} />
            </a>
            <a href="/resume.pdf" download className="btn-secondary flex items-center gap-2">
              <FiDownload size={16} /> Founder Resume
            </a>
            <a href="https://linkedin.com/in/raunak-shukla" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
              <FiLinkedin size={16} /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-2 lg:items-start"
            initial={false}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">Shipped, not slides</p>
            <div className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
              <AppBadge store="ios" href="https://apps.apple.com/in/app/syinq/id6755780778" />
              <AppBadge store="android" href="https://play.google.com/store/apps/details?id=com.rasync.sync" />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={false}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          <div className="relative w-[min(82vw,390px)] pb-8 sm:pb-0">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/30 dark:via-indigo-900/20 dark:to-purple-900/10" aria-hidden="true" />
            <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-white shadow-xl dark:border-gray-800">
              <Image
                src="/profile.jpg"
                alt="Raunak Shukla"
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 390px, 36vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" aria-hidden="true" />
            </div>

            <div className="absolute -bottom-1 left-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-card-hover dark:border-gray-700 dark:bg-gray-800 sm:-left-6 sm:bottom-4">
              <p className="text-xs font-semibold text-gray-900 dark:text-white">Live product</p>
              <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-300">Available on iOS & Android</p>
            </div>
            <div className="absolute right-3 top-3 max-w-[190px] rounded-xl border border-indigo-200 bg-indigo-50/95 px-3 py-2 shadow-sm dark:border-indigo-800 dark:bg-indigo-950/90 sm:-right-5 sm:top-5">
              <div className="flex items-start gap-2">
                <FiShield className="mt-0.5 flex-shrink-0 text-indigo-600 dark:text-indigo-400" size={16} />
                <div>
                  <p className="text-xs font-bold text-indigo-900 dark:text-indigo-200">Trust as infrastructure</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-indigo-700 dark:text-indigo-300">Verification, proof and accountability built into the flow.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-[0.2em] text-gray-400 md:flex" aria-label="Continue to founder profile">
        Profile <FiArrowDown size={17} />
      </a>
    </div>
  );
}
