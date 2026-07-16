'use client';

import { motion } from 'framer-motion';
import { FiCompass, FiLayers, FiShield, FiZap } from 'react-icons/fi';

const pillars = [
  {
    title: 'Shipped, not slides',
    description: 'Took a real product from discovery and incorporation to a live release across iOS and Android.',
    icon: <FiZap size={20} />,
  },
  {
    title: 'Trust as infrastructure',
    description: 'Verification, ride proof, accountability and safety are designed into the operating flow.',
    icon: <FiShield size={20} />,
  },
  {
    title: 'End-to-end ownership',
    description: 'Product, design, GTM, operations, compliance and fundraising under one founder lens.',
    icon: <FiLayers size={20} />,
  },
  {
    title: 'Field reality first',
    description: 'Start with the painful user moment, observe behaviour and cut scope until the core loop works.',
    icon: <FiCompass size={20} />,
  },
];

const timeline = [
  { year: '2024', text: 'Incorporated Rasync Global Solutions Private Limited and formalised SYINQ as a venture.' },
  { year: '2024', text: 'Represented SYINQ at Bennovate 3.0 across the startup showcase, Spark Tank and internship fair.' },
  { year: '2025', text: 'Graduated, launched SYINQ across iOS and Android, and received the Vice Chancellor Silver Medal.' },
  { year: '2025', text: 'Showcased SYINQ through the Bennett Hatchery ecosystem at the UP International Trade Show.' },
  { year: '2026', text: 'Shortlisted for IIT Kanpur AIIDE Cohort 5 and expanded funding, grant and university-partnership outreach.' },
  { year: '2026', text: 'Engaged with Transsion leadership on market sequencing, product-market fit and emerging-market scale.' },
];

export default function About() {
  return (
    <div className="section-container">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-400"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Founder profile
        </motion.p>
        <motion.h2
          className="heading-xl mb-5"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          I build systems that people can trust.
        </motion.h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Co-Founder and CEO of SYINQ, a verified campus network for ride coordination, campus commerce and community. I work across product strategy, UX, growth, operations, fundraising, compliance and AI-enabled execution.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, index) => (
          <motion.article
            key={pillar.title}
            className="card h-full"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
              {pillar.icon}
            </div>
            <h3 className="mb-2 text-base font-bold text-gray-950 dark:text-white">{pillar.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{pillar.description}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">Current role</p>
          <h3 className="heading-lg mb-3">Founder & CEO, SYINQ</h3>
          <p className="mb-5 text-sm font-semibold text-gray-500 dark:text-gray-400">Rasync Global Solutions Private Limited · September 2024 – Present</p>
          <p className="leading-relaxed text-gray-600 dark:text-gray-300">
            Building India&apos;s verified campus commute network, starting with peer-to-peer ride coordination and expanding into campus marketplace and community infrastructure.
          </p>
          <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 dark:border-indigo-900/50 dark:bg-indigo-950/20">
            <p className="text-sm font-bold text-indigo-900 dark:text-indigo-200">Founder lens</p>
            <p className="mt-2 text-sm leading-relaxed text-indigo-800 dark:text-indigo-300">
              Systems over screens. Campus-first, world-scale. Security-by-thinking. AI as leverage, with judgment and accountability kept human.
            </p>
          </div>
        </div>

        <div>
          <h3 className="heading-md mb-6">Selected founder milestones</h3>
          <ol className="space-y-4">
            {timeline.map((item, index) => (
              <motion.li
                key={`${item.year}-${index}`}
                className="grid grid-cols-[64px_1fr] gap-4"
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <span className="pt-0.5 text-sm font-bold text-indigo-600 dark:text-indigo-400">{item.year}</span>
                <span className="border-l border-gray-200 pl-4 text-sm leading-relaxed text-gray-600 dark:border-gray-700 dark:text-gray-300">{item.text}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
