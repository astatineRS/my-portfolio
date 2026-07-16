'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const interests = [
  {
    title: 'AI systems & technology',
    description: 'Studies how agents, digital platforms and emerging technologies reshape coordination and power.',
    image: '/hobbies/research.jpg',
  },
  {
    title: 'Maps, mobility & the world',
    description: 'Explores mobility systems, maps, geopolitics and the infrastructure behind how people move.',
    image: '/hobbies/photography.jpg',
  },
  {
    title: 'Product strategy & design',
    description: 'Connects product judgment, systems thinking, visual craft and communication.',
    image: '/hobbies/designing.jpg',
  },
  {
    title: 'Builder discipline',
    description: 'Maintains a structured routine around building, communication, personal branding and deliberate self-improvement.',
    image: '/hobbies/reading.jpg',
  },
  {
    title: 'Physical training',
    description: 'Uses boxing and training to build focus, resilience and the energy required for sustained execution.',
    image: '/hobbies/boxing.jpg',
  },
];

export default function Hobbies() {
  return (
    <div className="section-container">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">Founder lens & interests</p>
        <h2 className="heading-xl mb-5">Curiosity beyond the company</h2>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">The ideas, systems and disciplines that shape how I observe the world and make decisions.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {interests.map((interest, index) => (
          <motion.article
            key={interest.title}
            className={`group relative min-h-[330px] overflow-hidden rounded-3xl ${index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <Image src={interest.image} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 34vw" className="object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/35 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="mb-2 text-xl font-bold text-white">{interest.title}</h3>
              <p className="text-sm leading-relaxed text-gray-200">{interest.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
