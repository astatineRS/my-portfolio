'use client';

import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiStar } from 'react-icons/fi';

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  icon: string;
};

type Achievement = {
  title: string;
  description: string;
  year: string;
  featured?: boolean;
};

const CertificationCard = ({ certificate, index }: { certificate: Certificate; index: number }) => {
  return (
    <motion.div
      className="card flex flex-col hover-lift"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
    >
      <div className="flex items-center mb-3">
        <div className="w-11 h-11 relative mr-3 flex-shrink-0 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center p-1.5">
          <img
            src={certificate.icon}
            alt={certificate.issuer}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{certificate.title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{certificate.issuer}</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">Issued: {certificate.date}</p>

      {certificate.credential && (
        <a
          href={certificate.credential}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
        >
          <FiCheckCircle size={12} />
          View Credential
        </a>
      )}
    </motion.div>
  );
};

const AchievementItem = ({ achievement, index }: { achievement: Achievement; index: number }) => {
  if (achievement.featured) {
    return (
      <motion.div
        className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: index * 0.08 }}
      >
        <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
          <FiStar className="text-amber-600 dark:text-amber-400" size={18} />
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <h3 className="text-base font-bold text-amber-900 dark:text-amber-200">{achievement.title}</h3>
            <span className="text-xs bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded-full font-medium">{achievement.year}</span>
          </div>
          <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">{achievement.description}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
    >
      <div className="mt-1 flex-shrink-0">
        <FiAward className="text-blue-medium dark:text-blue-400" size={18} />
      </div>
      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
          <span className="text-xs text-gray-400 dark:text-gray-500">({achievement.year})</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">{achievement.description}</p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const certificates: Certificate[] = [
    {
      title: 'Certified Network Defender (CND)',
      issuer: 'EC-Council',
      date: 'September 2022',
      credential: 'https://www.linkedin.com/posts/raunak-shukla_cndcertified-cybersecurity-networkdefender-activity-7060706406173151232-tIcc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBj-gQB84x1sdtnFOkty2E5UScyBEMbno8',
      icon: '/icons/ec-council.png',
    },
    {
      title: 'TCS iON Career Edge — Young Professional',
      issuer: 'TCS iON',
      date: 'June 2021',
      credential: 'https://www.linkedin.com/posts/raunak-shukla_tcs-ion-career-edge-young-professional-activity-7099485044146122752-Qn7G?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBj-gQB84x1sdtnFOkty2E5UScyBEMbno8',
      icon: '/icons/tcs.png',
    },
    {
      title: 'AWS Academy Graduate — Cloud Foundations',
      issuer: 'Amazon Web Services',
      date: 'March 2022',
      credential: 'https://www.credly.com/badges/c5787e84-11ee-4456-8173-3113fb6329d9/linked_in?t=s5pz87',
      icon: '/icons/aws.png',
    },
    {
      title: 'AWS Cloud Quest: Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'May 2022',
      credential: 'https://www.credly.com/badges/45b0188b-24aa-45d6-ab35-ba87fc5cef7c/linked_in?t=s5pz0s',
      icon: '/icons/aws.png',
    },
  ];

  const achievements: Achievement[] = [
    {
      title: 'Vice Chancellor Silver Medal — Innovation & Entrepreneurship',
      description: "Awarded by Bennett University's Vice Chancellor for outstanding innovation and entrepreneurial achievement — recognised for co-founding SYINQ and bringing it to market.",
      year: '2025',
      featured: true,
    },
    {
      title: 'Lead Designer for College Events',
      description: 'Led design for multiple flagship college events, creating cohesive visual identities and marketing materials.',
      year: '2021–2023',
    },
    {
      title: 'BU Sports Committee Design Head',
      description: 'Managed all visual communications for Bennett University Sports Committee.',
      year: '2022',
    },
    {
      title: 'Co-convener of Bennovate E-Summit',
      description: "Helped organise Bennett University's annual E-Summit, overseeing a team of 70+ volunteers.",
      year: '2022',
    },
    {
      title: 'Mood Indigo Operations Team',
      description: "Supported operations for IIT Bombay's cultural festival Mood Indigo, one of Asia's largest college festivals.",
      year: '2021',
    },
  ];

  return (
    <div className="section-container">
      <motion.h2
        className="heading-xl text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Certifications
      </motion.h2>

      <motion.p
        className="paragraph text-center max-w-2xl mx-auto mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Recognition, certifications, and milestones from my academic and entrepreneurial journey.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Certifications */}
        <div>
          <motion.h3
            className="heading-md mb-6 flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <FiCheckCircle className="text-blue-600 dark:text-blue-400" size={22} />
            Certifications
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((certificate, index) => (
              <CertificationCard key={index} certificate={certificate} index={index} />
            ))}
          </div>
        </div>

        {/* Notable Achievements */}
        <div>
          <motion.h3
            className="heading-md mb-6 flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <FiAward className="text-blue-600 dark:text-blue-400" size={22} />
            Notable Achievements
          </motion.h3>

          <div className="space-y-5">
            {achievements.map((achievement, index) => (
              <AchievementItem key={index} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="mt-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-7 text-center border border-blue-100 dark:border-blue-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Always Learning</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I regularly participate in workshops, hackathons, and online courses to stay sharp at the
          intersection of product design, technology, and startup building.
        </p>
      </motion.div>
    </div>
  );
};

export default Achievements;
