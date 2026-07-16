'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiAward, FiCheckCircle, FiExternalLink } from 'react-icons/fi';

const recognitions = [
  {
    title: 'Vice Chancellor Silver Medal',
    description: 'Innovation & Entrepreneurship, Bennett University—for co-founding SYINQ and bringing it to market.',
    year: '2025',
    featured: true,
  },
  {
    title: 'IIT Kanpur AIIDE Cohort 5',
    description: 'SYINQ shortlisted while expanding accelerator, grant and university-partnership outreach.',
    year: '2026',
  },
  {
    title: 'PW School of Startups',
    description: 'Bennett-nominated participant; pitched SYINQ and completed startup, finance and design-thinking sessions.',
    year: '2025',
  },
  {
    title: 'Bennovate E-Summit Leadership',
    description: 'Co-convened the entrepreneurship summit and helped coordinate the event team and execution.',
    year: '2022–2024',
  },
  {
    title: 'Campus Design & Event Communication',
    description: 'Led visual identity and communication across the BU Sports Committee, entrepreneurship activities and college organisations; also contributed to Mood Indigo operations at IIT Bombay.',
    year: '2021–2024',
  },
];

const certificates = [
  { title: 'Certified Network Defender (CND)', issuer: 'EC-Council', icon: '/icons/ec-council.png', href: 'https://www.linkedin.com/in/raunak-shukla' },
  { title: 'AWS Academy Graduate', issuer: 'Cloud Foundations', icon: '/icons/aws.png', href: 'https://www.credly.com/badges/c5787e84-11ee-4456-8173-3113fb6329d9/linked_in' },
  { title: 'AWS Cloud Quest', issuer: 'Cloud Practitioner', icon: '/icons/aws.png', href: 'https://www.credly.com/badges/45b0188b-24aa-45d6-ab35-ba87fc5cef7c/linked_in' },
  { title: 'Career Edge', issuer: 'TCS iON — Young Professional', icon: '/icons/tcs.png', href: 'https://www.linkedin.com/in/raunak-shukla' },
  { title: 'Improving Deep Neural Networks', issuer: 'DeepLearning.AI', icon: null, href: 'https://www.deeplearning.ai/' },
];

export default function Achievements() {
  return (
    <div className="section-container">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">Recognition & growth</p>
        <h2 className="heading-xl mb-5">Milestones that compound</h2>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">Founder progress, campus leadership and technical learning carried into real execution.</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h3 className="heading-md mb-6 flex items-center gap-2"><FiAward className="text-indigo-600 dark:text-indigo-400" /> Selected recognition</h3>
          <div className="space-y-4">
            {recognitions.map((item, index) => (
              <motion.article
                key={item.title}
                className={`rounded-2xl border p-5 ${item.featured ? 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20' : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'}`}
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-gray-950 dark:text-white">{item.title}</h4>
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-600 dark:bg-gray-700 dark:text-gray-300">{item.year}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="heading-md mb-6 flex items-center gap-2"><FiCheckCircle className="text-blue-600 dark:text-blue-400" /> Certifications</h3>
          <div className="space-y-3">
            {certificates.map((certificate) => (
              <a
                key={`${certificate.title}-${certificate.issuer}`}
                href={certificate.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-800"
              >
                <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800">
                  {certificate.icon ? (
                    <Image src={certificate.icon} alt="" fill sizes="44px" className="object-contain p-1.5" />
                  ) : (
                    <FiCheckCircle className="text-indigo-600 dark:text-indigo-400" size={20} />
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-gray-950 dark:text-white">{certificate.title}</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">{certificate.issuer}</span>
                </span>
                <FiExternalLink className="flex-shrink-0 text-gray-400" size={15} />
              </a>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 dark:border-blue-900/50 dark:bg-blue-950/20">
            <p className="text-sm font-bold text-blue-900 dark:text-blue-200">B.Tech — Computer Science Engineering</p>
            <p className="mt-1 text-sm text-blue-800 dark:text-blue-300">Cybersecurity specialisation · Bennett University</p>
            <p className="mt-2 text-xs font-semibold text-blue-700 dark:text-blue-400">2021–2025 · CGPA 8.4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
