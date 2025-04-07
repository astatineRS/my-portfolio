'use client';

import { motion } from 'framer-motion';
import { FiBook, FiCode, FiGlobe } from 'react-icons/fi';

const Timeline = ({ year, title, description }: { year: string; title: string; description: string }) => {
  return (
    <div className="relative pl-8 pb-8 border-l border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
      <div className="absolute left-0 top-0 h-6 w-6 rounded-full bg-blue-medium -translate-x-1/2 flex items-center justify-center">
        <span className="text-xs font-bold text-white">{year}</span>
      </div>
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const About = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="section-container">
      <motion.h2 
        className="heading-xl text-center mb-12"
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Education Section */}
        <motion.div 
          className="card"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-4">
            <div className="bg-blue-light dark:bg-blue-dark/30 p-3 rounded-full mr-4">
              <FiBook size={24} className="text-blue-dark dark:text-blue-medium" />
            </div>
            <h3 className="heading-md mb-0">Education</h3>
          </div>
          
          <div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold">Bachelor's in Technology (Computer Science)</h4>
              <p className="text-gray-600 dark:text-gray-300">with Cybersecurity Specialization</p>
              <p className="font-medium">Bennett University (2021-2025)</p>
            </div>
          </div>
        </motion.div>

        {/* Professional Journey */}
        <motion.div 
          className="card"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center mb-4">
            <div className="bg-blue-light dark:bg-blue-dark/30 p-3 rounded-full mr-4">
              <FiCode size={24} className="text-blue-dark dark:text-blue-medium" />
            </div>
            <h3 className="heading-md mb-0">Professional Journey</h3>
          </div>
          
          <div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold">Aspiring product designer</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Expertise in Figma, wireframing, prototyping, and user research methodologies.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold">Cybersecurity Research Intern</h4>
              <p className="text-gray-600 dark:text-gray-300">SecureNet Innovations</p>
              <p className="text-gray-600 dark:text-gray-300">
                Experience in penetration testing and vulnerability assessments.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Entrepreneurial Drive */}
        <motion.div 
          className="card"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <div className="bg-blue-light dark:bg-blue-dark/30 p-3 rounded-full mr-4">
              <FiGlobe size={24} className="text-blue-dark dark:text-blue-medium" />
            </div>
            <h3 className="heading-md mb-0">Entrepreneurial Drive</h3>
          </div>
          
          <div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold">Co-Founder at SYINQ (SYNC)</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Student-focused platform offering carpooling, marketplace, and forum functionalities.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold">Founding Member at CrownCast</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Developing interactive campaigns, viewer challenges, and analytics for YouTubers and brands.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Career Timeline */}
      <motion.div 
        className="mt-16"
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h3 className="heading-md text-center mb-8">My Growth Journey</h3>
        
        <div className="max-w-3xl mx-auto">
          <Timeline 
            year="2021"
            title="Started Computer Science Degree"
            description="Began my academic journey in Computer Science with a focus on Cybersecurity at Bennett University."
          />
          
          <Timeline 
            year="2023"
            title="Cybersecurity Research Intern"
            description="Joined SecureNet Innovations as a research intern, working on penetration testing and security assessments."
          />
          
          <Timeline 
            year="2024"
            title="Founding Member at CrownCast"
            description="Joined as a founding member to develop interactive campaigns and analytics solutions for content creators."
          />
          
          <Timeline 
            year="2024"
            title="Co-founded SYINQ (SYNC)"
            description="Launched a student-centric platform combining carpooling, marketplace, and community forum features."
          />
          
          <Timeline 
            year="2025"
            title="Expanded UI/UX Design Skills"
            description="Deepened expertise in user interface and experience design through self-directed learning and practical applications."
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About; 