'use client';

import { motion } from 'framer-motion';
import { FiBook, FiZap, FiGlobe } from 'react-icons/fi';

const Timeline = ({ year, title, description, highlight = false }: { year: string; title: string; description: string; highlight?: boolean }) => {
  return (
    <div className={`relative pl-8 pb-8 border-l last:border-0 last:pb-0 ${highlight ? 'border-indigo-200 dark:border-indigo-800' : 'border-gray-200 dark:border-gray-700'}`}>
      <div className={`absolute left-0 top-0 h-6 w-6 rounded-full -translate-x-1/2 flex items-center justify-center shadow-sm ${highlight ? 'bg-indigo-600' : 'bg-blue-medium'}`}>
        <span className="text-[9px] font-bold text-white">{year.slice(-2)}</span>
      </div>
      <div className="flex items-start gap-2 flex-wrap">
        <h4 className={`text-base font-semibold ${highlight ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-900 dark:text-white'}`}>{title}</h4>
        <span className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{year}</span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">{description}</p>
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
        className="heading-xl text-center mb-4"
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="paragraph text-center max-w-2xl mx-auto mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Product designer, startup founder, and B.Tech graduate (CS, Cybersecurity) building things that matter for students.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Education */}
        <motion.div
          className="card"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center mb-5">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl mr-3">
              <FiBook size={22} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="heading-md mb-0">Education</h3>
          </div>

          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white">B.Tech — Computer Science</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Specialisation: Cybersecurity</p>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">Bennett University · 2021 – 2025</p>
            <div className="mt-3 inline-flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              Graduated 2025
            </div>
          </div>
        </motion.div>

        {/* Current Role */}
        <motion.div
          className="card border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-br from-white to-indigo-50/50 dark:from-gray-800 dark:to-indigo-950/20"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-5">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl mr-3">
              <FiZap size={22} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="heading-md mb-0">Current Role</h3>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Co-Founder & CEO</h4>
              <span className="badge-role text-[11px]">Full-time</span>
            </div>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">SYINQ</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Building a student super-app — live on App Store & Play Store. Leading product, design, and fundraising.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Previously</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Cybersecurity Research Intern · SecureNet Innovations</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Founding Member · CrownCast</p>
          </div>
        </motion.div>

        {/* Design Skills */}
        <motion.div
          className="card"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center mb-5">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl mr-3">
              <FiGlobe size={22} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="heading-md mb-0">What I Do</h3>
          </div>

          <div className="space-y-3">
            {[
              { label: 'Product Design', detail: 'Figma, wireframing, prototyping, user research' },
              { label: 'Product Management', detail: 'Roadmapping, sprint planning, metrics, releases' },
              { label: 'Startup Building', detail: 'Fundraising, team leadership, investor decks' },
            ].map(({ label, detail }) => (
              <div key={label} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{detail}</p>
                </div>
              </div>
            ))}
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
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="heading-md text-center mb-10">My Journey</h3>

        <div className="max-w-2xl mx-auto">
          <Timeline
            year="2021"
            title="Started B.Tech — Computer Science"
            description="Began my academic journey at Bennett University with a focus on Cybersecurity. Also joined Mood Indigo operations team at IIT Bombay."
          />
          <Timeline
            year="2022"
            title="Design Lead & EC-Council CND Certified"
            description="Led design for college events and the BU Sports Committee. Earned Certified Network Defender (CND) from EC-Council and AWS Cloud certifications."
          />
          <Timeline
            year="2023"
            title="Cybersecurity Research Intern"
            description="Joined SecureNet Innovations — penetration testing and vulnerability assessments. Co-convened Bennovate E-Summit."
          />
          <Timeline
            year="2024"
            title="Founded SYINQ & Joined CrownCast"
            description="Co-founded SYINQ (student super-app) and joined CrownCast as a founding member, leading product and design across both ventures."
          />
          <Timeline
            year="2025"
            title="Graduated & Launched SYINQ on iOS + Android"
            description="Graduated with B.Tech (CS). Launched SYINQ on the App Store and Google Play. Awarded the Vice Chancellor Silver Medal for Innovation & Entrepreneurship. Now raising funds full-time."
            highlight={true}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
