'use client';

import { motion } from 'framer-motion';
import { FiActivity, FiCpu, FiMap, FiShield, FiTarget, FiUsers } from 'react-icons/fi';

const capabilityGroups = [
  {
    title: 'Product & UX',
    description: 'Product strategy, UI/UX, user research, roadmapping and complete lifecycle design.',
    skills: ['Product strategy', 'User research', 'UI/UX', 'Roadmapping', 'Lifecycle design'],
    icon: <FiTarget size={21} />,
  },
  {
    title: 'Trust systems',
    description: 'Identity, verification, permissions, proof, privacy, safety and edge-case thinking.',
    skills: ['Verification', 'Proof-of-Pool', 'Safety flows', 'Permissions', 'Failure modes'],
    icon: <FiShield size={21} />,
  },
  {
    title: 'Founder execution',
    description: 'Lean-team leadership across sprints, operations, GTM, fundraising and partnerships.',
    skills: ['Sprint systems', 'Campus GTM', 'Fundraising', 'Partnerships', 'Operations'],
    icon: <FiUsers size={21} />,
  },
  {
    title: 'AI-enabled workflows',
    description: 'Agents and automation for research, prototyping, technical review and founder operations.',
    skills: ['Claude Code', 'ChatGPT', 'Copilot', 'Cursor', 'n8n & Notion'],
    icon: <FiCpu size={21} />,
  },
  {
    title: 'Mobility & maps',
    description: 'Campus coordination, location-aware products, Mapbox, APIs and analytics.',
    skills: ['Mobility systems', 'Mapbox', 'APIs', 'Analytics', 'Coordination loops'],
    icon: <FiMap size={21} />,
  },
  {
    title: 'Technical foundation',
    description: 'Cybersecurity instincts, GitHub workflows, cloud foundations and systems thinking.',
    skills: ['Cybersecurity', 'GitHub', 'Cloud', 'Technical review', 'System architecture'],
    icon: <FiActivity size={21} />,
  },
];

const operatingPrinciples = [
  ['Systems over screens', 'Design identity, incentives, trust, edge cases and operations—not only interfaces.'],
  ['Field reality first', 'Start with the painful user moment, observe behaviour and cut scope until the core loop works.'],
  ['AI as leverage', 'Compress research and execution while keeping judgment, taste and accountability human.'],
  ['Campus-first, world-scale', 'Treat campuses as dense trust networks that can become a repeatable infrastructure layer.'],
  ['Security-by-thinking', 'Apply cybersecurity instincts to permissions, verification, privacy and failure modes.'],
  ['Disciplined iteration', 'Prefer fast learning and measurable progress over polished theatre.'],
];

export default function Skills() {
  return (
    <div className="section-container">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">Capabilities</p>
        <h2 className="heading-xl mb-5">A founder operating system</h2>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Product judgment, trust architecture and AI-enabled execution—connected through one accountable operating lens.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {capabilityGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="card h-full"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/25 dark:text-blue-400">{group.icon}</span>
              <h3 className="text-lg font-bold text-gray-950 dark:text-white">{group.title}</h3>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{group.description}</p>
            <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
              {group.skills.map((skill) => (
                <li key={skill} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">{skill}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 dark:border-indigo-900/50 dark:from-indigo-950/25 dark:to-gray-900 sm:p-8">
        <h3 className="heading-md mb-7 text-center">How I think & operate</h3>
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {operatingPrinciples.map(([title, description]) => (
            <div key={title}>
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">{title}</h4>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
