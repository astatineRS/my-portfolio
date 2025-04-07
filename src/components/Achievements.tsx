'use client';

import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle } from 'react-icons/fi';
import Image from 'next/image';

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
};

const CertificationCard = ({ certificate, index }: { certificate: Certificate; index: number }) => {
  return (
    <motion.div
      className="card flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 relative mr-4">
          <img 
            src={certificate.icon} 
            alt={certificate.issuer} 
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{certificate.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{certificate.issuer}</p>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Issued: {certificate.date}</p>
      
      {certificate.credential && (
        <a 
          href={certificate.credential}
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto text-sm text-blue-dark dark:text-blue-medium hover:underline flex items-center gap-1"
        >
          <FiCheckCircle size={14} />
          <span>View Credential</span>
        </a>
      )}
    </motion.div>
  );
};

const AchievementItem = ({ achievement, index }: { achievement: Achievement; index: number }) => {
  return (
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="mt-1">
        <FiAward className="text-blue-dark dark:text-blue-medium" size={20} />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">{achievement.title}</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">({achievement.year})</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const certificates: Certificate[] = [
    {
      title: "Certified Network Defender (CND)",
      issuer: "EC-Council",
      date: "September 2022",
      credential: "https://www.linkedin.com/posts/raunak-shukla_cndcertified-cybersecurity-networkdefender-activity-7060706406173151232-tIcc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBj-gQB84x1sdtnFOkty2E5UScyBEMbno8",
      icon: "/icons/ec-council.png"
    },
    {
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS iON",
      date: "June 2021",
      credential: "https://www.linkedin.com/posts/raunak-shukla_tcs-ion-career-edge-young-professional-activity-7099485044146122752-Qn7G?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBj-gQB84x1sdtnFOkty2E5UScyBEMbno8",
      icon: "/icons/tcs.png"
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "March 2022",
      credential: "https://www.credly.com/badges/c5787e84-11ee-4456-8173-3113fb6329d9/linked_in?t=s5pz87",
      icon: "/icons/aws.png"
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "May 2022",
      credential: "https://www.credly.com/badges/45b0188b-24aa-45d6-ab35-ba87fc5cef7c/linked_in?t=s5pz0s",
      icon: "/icons/aws.png"
    }
  ];
  
  const achievements: Achievement[] = [
    {
      title: "Lead Designer for College Events",
      description: "Led design for multiple flagship college events, creating cohesive visual identities and marketing materials.",
      year: "2021-2023"
    },
    {
      title: "BU Sports Committee Design Head",
      description: "Managed all visual communications for Bennett University Sports Committee.",
      year: "2022"
    },
    {
      title: "Co-convener of Bennovate",
      description: "Helped organize Bennett University's annual E-Summit, overseeing a team of 70+ volunteers.",
      year: "2022"
    },
    {
      title: "Mood Indigo Operations Team",
      description: "Supported operations for IIT Bombay's cultural festival Mood Indigo, one of Asia's largest college festivals.",
      year: "2021"
    }
  ];
  
  return (
    <div className="section-container">
      <motion.h2 
        className="heading-xl text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Certifications
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <motion.h3 
            className="heading-md mb-8 flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FiCheckCircle className="text-blue-dark dark:text-blue-medium" size={24} />
            Certifications
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((certificate, index) => (
              <CertificationCard 
                key={index} 
                certificate={certificate} 
                index={index}
              />
            ))}
          </div>
        </div>
        
        <div>
          <motion.h3 
            className="heading-md mb-8 flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FiAward className="text-blue-dark dark:text-blue-medium" size={24} />
            Notable Achievements
          </motion.h3>
          
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <AchievementItem 
                key={index} 
                achievement={achievement} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      
      <motion.div 
        className="mt-16 bg-blue-light dark:bg-blue-dark/30 rounded-xl p-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold mb-4">Continuous Learning Journey</h3>
        <p className="max-w-3xl mx-auto">
          I'm committed to ongoing professional development and regularly participate in
          workshops, hackathons, and online courses to stay at the cutting edge of technology and design.
        </p>
      </motion.div>
    </div>
  );
};

export default Achievements; 