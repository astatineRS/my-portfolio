'use client';

import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaBehance } from 'react-icons/fa';

const links = [
  { name: 'LinkedIn', detail: 'Founder updates and professional profile', href: 'https://linkedin.com/in/raunak-shukla', icon: <FiLinkedin size={22} /> },
  { name: 'GitHub', detail: 'Projects, experiments and technical work', href: 'https://github.com/astatineRS', icon: <FiGithub size={22} /> },
  { name: 'Behance', detail: 'Selected design work', href: 'https://behance.net/raunakshukla2', icon: <FaBehance size={22} /> },
];

export default function Contact() {
  return (
    <div className="section-container">
      <div className="overflow-hidden rounded-[2rem] bg-gray-950 text-white shadow-xl dark:border dark:border-gray-800">
        <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.08fr_0.92fr] lg:p-14">
          <div className="absolute right-0 top-0 h-80 w-80 -translate-y-1/3 translate-x-1/3 rounded-full bg-indigo-600/20 blur-3xl" aria-hidden="true" />
          <motion.div
            className="relative"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigo-300">Build, partner, invest</p>
            <h2 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">Let&apos;s build something that earns trust.</h2>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-300">
              Open to founder ecosystem conversations, university partnerships, strategic collaborations and thoughtful discussions on product, AI, mobility and trust systems.
            </p>
            <a href="mailto:rsworks.in@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-500">
              <FiMail size={18} /> rsworks.in@gmail.com
            </a>
          </motion.div>

          <div className="relative space-y-3">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-indigo-400/50 hover:bg-white/10"
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">{link.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold">{link.name}</span>
                  <span className="block text-sm text-gray-400">{link.detail}</span>
                </span>
                <FiArrowUpRight className="flex-shrink-0 text-gray-400" size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
