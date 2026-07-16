'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowUpRight, FiCode, FiShield } from 'react-icons/fi';

const projects = [
  {
    title: 'Drone Delivery Using BSSID',
    description: 'Designed a Wi-Fi triangulation approach for navigation where GPS coverage is unreliable.',
    image: '/drone-delivery.jpg',
    tags: ['Wi-Fi triangulation', 'Mobility', 'Systems research'],
    href: 'https://medium.com/@raunak9554/using-bssid-in-drone-delivery-technology-2a76aa95cc52',
  },
  {
    title: 'Vulnerability Scanner',
    description: 'Built an automated scanning concept using port scanning and service enumeration.',
    image: '/vulnerability-scanner.jpg',
    tags: ['Cybersecurity', 'Port scanning', 'Automation'],
    href: 'https://github.com/astatineRS/sentinel-web-watch',
  },
  {
    title: 'Contact-Based Social Utility',
    description: 'Designed a private, location-aware social product built around existing trusted contacts.',
    image: '/whatsapp-automation.jpg',
    tags: ['Trusted networks', 'Location-aware', 'Product design'],
    href: 'https://github.com/astatineRS/reconnections-near-you',
  },
  {
    title: 'Web3 Marketplace',
    description: 'Explored peer-to-peer transactions using Solidity, React and Ethereum.',
    image: '/web3-marketplace.jpg',
    tags: ['Solidity', 'React', 'Peer-to-peer'],
    href: 'https://github.com/astatineRS/FinTrack',
  },
];

export default function Projects() {
  return (
    <div className="section-container">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">Technical & product foundation</p>
        <h2 className="heading-xl mb-5">The foundations behind the founder</h2>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">Cybersecurity, mobility, trusted networks and peer-to-peer systems shaped how I now build products.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover dark:border-gray-700 dark:bg-gray-900"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <div className="relative h-48 overflow-hidden">
              <Image src={project.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/65 to-transparent" aria-hidden="true" />
              <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-gray-900 backdrop-blur">
                {index === 1 ? <FiShield size={14} /> : <FiCode size={14} />} Foundation project
              </span>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-950 dark:text-white">{project.title}</h3>
              <p className="mb-5 leading-relaxed text-gray-600 dark:text-gray-300">{project.description}</p>
              <ul className="mb-5 flex flex-wrap gap-2" aria-label={`${project.title} topics`}>
                {project.tags.map((tag) => <li key={tag} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">{tag}</li>)}
              </ul>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:underline dark:text-indigo-400">
                View project <FiArrowUpRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
