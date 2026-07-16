'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowUpRight, FiCheck, FiMapPin, FiShield, FiUsers } from 'react-icons/fi';

const trustLayer = [
  'University verification',
  'Driver and vehicle verification',
  'OTP-based Proof-of-Pool',
  'SOS and live tracking',
  'Ratings and ride accountability',
];

const lifecycle = [
  'Discovery and matching',
  'No-match watchlists',
  'Fare logic and requests',
  'Boarding and live-trip states',
  'Completion and feedback',
];

const ownership = [
  'Product strategy and UX',
  'Lean cross-functional team leadership',
  'Fundraising, grants and accelerators',
  'University outreach and partnerships',
  'Compliance, legal and company operations',
];

const representation = [
  {
    title: 'Bennovate 3.0',
    description: 'Represented SYINQ with Rupesh Shandilya and Abhi Tailor across the startup showcase, Spark Tank and internship fair.',
  },
  {
    title: 'UP StartinUP ecosystem',
    description: 'Showcased the company through Bennett Hatchery-linked platforms, including the UP International Trade Show.',
  },
  {
    title: 'Founder ecosystem conversations',
    description: 'Carried SYINQ into PW School of Startups, accelerator and grant programs, and strategic technology conversations.',
  },
];

function Checklist({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center gap-2 text-sm font-bold text-gray-950 dark:text-white">
        <span className="text-indigo-600 dark:text-indigo-400">{icon}</span>
        {title}
      </div>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
            <FiCheck className="mt-0.5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" size={15} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Startups() {
  return (
    <div className="section-container">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">Flagship venture</p>
        <h2 className="heading-xl mb-5">Building SYINQ</h2>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          India&apos;s verified campus commute network—starting with peer-to-peer ride coordination and expanding into campus marketplace and community infrastructure.
        </p>
      </div>

      <motion.article
        className="overflow-hidden rounded-3xl border border-indigo-100 bg-white shadow-syinq dark:border-indigo-900/50 dark:bg-gray-900"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative h-56 overflow-hidden sm:h-72">
          <Image src="/syinq.jpg" alt="SYINQ verified campus network" fill sizes="(max-width: 1280px) 100vw, 1200px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/35 to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="badge-live">Live on iOS & Android</span>
                <span className="badge-role">Co-Founder & CEO</span>
              </div>
              <h3 className="text-3xl font-bold text-white">Trust infrastructure for campus mobility</h3>
            </div>
            <a href="https://syinq.com" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-gray-950 transition hover:bg-indigo-50">
              Visit SYINQ <FiArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-8 grid gap-5 lg:grid-cols-3">
            <Checklist title="Trust & safety layer" items={trustLayer} icon={<FiShield size={18} />} />
            <Checklist title="Rider & host lifecycle" items={lifecycle} icon={<FiMapPin size={18} />} />
            <Checklist title="Founder ownership" items={ownership} icon={<FiUsers size={18} />} />
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5 dark:border-indigo-900/50 dark:bg-indigo-950/20 sm:p-6">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-indigo-800 dark:text-indigo-300">AI-enabled execution</h4>
            <p className="text-sm leading-relaxed text-indigo-900 dark:text-indigo-200">
              Claude Code, Copilot, Cursor, ChatGPT, n8n and Notion are embedded into research, prototyping, technical review, automation and founder operations—compressing execution without outsourcing judgment.
            </p>
          </div>
        </div>
      </motion.article>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {representation.map((item, index) => (
          <motion.article
            key={item.title}
            className="card"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">Representing SYINQ</p>
            <h3 className="mb-3 text-lg font-bold text-gray-950 dark:text-white">{item.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.description}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900 sm:p-8">
        <div className="grid items-center gap-6 md:grid-cols-[180px_1fr]">
          <div className="relative h-32 overflow-hidden rounded-2xl md:h-full md:min-h-[150px]">
            <Image src="/crowncast.jpg" alt="CrownCast creator monetisation platform" fill sizes="(max-width: 768px) 100vw, 180px" className="object-cover" />
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400">Earlier venture · 2024</p>
            <h3 className="mb-2 text-2xl font-bold text-gray-950 dark:text-white">Founding Member, CrownCast</h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">Creator monetisation and brand campaign platform</p>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              Led product and design across mobile and web experiences, translating creator and brand workflows into prototypes, dashboards and feature roadmaps. Worked on creator partnerships and the product layer connecting brands with digital creators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
