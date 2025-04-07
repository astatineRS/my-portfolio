'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFigma, FiLayout, FiUsers, FiLayers, FiClipboard, FiTrello, FiTrendingUp, FiClock, FiGrid } from 'react-icons/fi';

type Skill = {
  name: string;
  category: 'ui' | 'pm';
  icon: React.ReactNode;
  description: string;
  proficiency: number;
};

type SkillFilter = 'all' | 'ui' | 'pm';

// Design system showcase component
const DesignSystemShowcase = () => {
  return (
    <div className="mt-12 mb-16 relative overflow-hidden">
      <div className="design-grid absolute inset-0 z-0 opacity-5"></div>
      
      <motion.h3 
        className="heading-md text-center mb-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        My Design System Approach
      </motion.h3>
      
      <div className="flex flex-wrap justify-center gap-6">
        {/* Component showcase */}
        <motion.div 
          className="wireframe-box p-5 w-[280px] relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="text-center mb-4">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Components</span>
          </div>
          
          <div className="space-y-3">
            {/* Button examples */}
            <div className="rounded-md bg-white dark:bg-gray-800 p-2 flex flex-col gap-2">
              <div className="bg-blue-dark text-white text-xs rounded-md py-1.5 px-3 w-24 mx-auto text-center">Primary</div>
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-md py-1.5 px-3 w-24 mx-auto text-center">Secondary</div>
            </div>
            
            {/* Input example */}
            <div className="rounded-md bg-white dark:bg-gray-800 p-2">
              <div className="border border-gray-300 dark:border-gray-600 rounded-md h-7 w-full"></div>
            </div>
            
            {/* Card example */}
            <div className="rounded-md bg-white dark:bg-gray-800 p-2">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-md h-16 w-full"></div>
            </div>
          </div>
        </motion.div>
        
        {/* Typography showcase */}
        <motion.div 
          className="wireframe-box p-5 w-[280px] relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="text-center mb-4">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Typography</span>
          </div>
          
          <div className="space-y-4">
            <div className="h-6 bg-gray-400 dark:bg-gray-500 rounded w-3/4"></div>
            <div className="h-5 bg-gray-400 dark:bg-gray-500 rounded w-2/3"></div>
            <div className="h-4 bg-gray-400 dark:bg-gray-500 rounded w-1/2"></div>
            <div className="space-y-1.5">
              <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
              <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
              <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
            </div>
          </div>
        </motion.div>
        
        {/* Color palette showcase */}
        <motion.div 
          className="wireframe-box p-5 w-[280px] relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -5 }}
        >
          <div className="text-center mb-4">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Color Palette</span>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            <div className="aspect-square rounded-md bg-blue-500"></div>
            <div className="aspect-square rounded-md bg-blue-400"></div>
            <div className="aspect-square rounded-md bg-blue-300"></div>
            <div className="aspect-square rounded-md bg-blue-200"></div>
            
            <div className="aspect-square rounded-md bg-indigo-500"></div>
            <div className="aspect-square rounded-md bg-indigo-400"></div>
            <div className="aspect-square rounded-md bg-indigo-300"></div>
            <div className="aspect-square rounded-md bg-indigo-200"></div>
            
            <div className="aspect-square rounded-md bg-gray-800 dark:bg-gray-200"></div>
            <div className="aspect-square rounded-md bg-gray-600 dark:bg-gray-400"></div>
            <div className="aspect-square rounded-md bg-gray-400 dark:bg-gray-600"></div>
            <div className="aspect-square rounded-md bg-gray-200 dark:bg-gray-800"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const SkillItem = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div 
      className="card relative overflow-hidden group hover-lift"
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      transition={{ duration: 0.2 }}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className={`absolute rotate-45 bg-blue-medium/10 w-24 h-5 -top-2 -right-6 transform origin-bottom-left`}></div>
      </div>
      
      <div className="flex items-center mb-3 relative z-10">
        <div className="bg-blue-light dark:bg-blue-dark/30 p-3 rounded-full mr-3 text-blue-dark dark:text-blue-medium group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <h3 className="text-lg font-semibold">{skill.name}</h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
        {skill.description}
      </p>
      
      <div className="relative">
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
          <span>Beginner</span>
          <span>Advanced</span>
        </div>
      </div>
      
      {/* Hover accent line */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-blue-medium"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Skills = () => {
  const [filter, setFilter] = useState<SkillFilter>('all');
  
  const skills: Skill[] = [
    // UI/UX Skills
    {
      name: 'Figma',
      category: 'ui',
      icon: <FiFigma size={20} />,
      description: 'Design, prototype, and collaborate on UI/UX projects with team members',
      proficiency: 90,
    },
    {
      name: 'Wireframing',
      category: 'ui',
      icon: <FiLayout size={20} />,
      description: 'Create low and high fidelity wireframes to conceptualize interfaces',
      proficiency: 85,
    },
    {
      name: 'User Research',
      category: 'ui',
      icon: <FiUsers size={20} />,
      description: 'Conduct user interviews, surveys, and usability testing to inform design decisions',
      proficiency: 80,
    },
    {
      name: 'Interactive Prototyping',
      category: 'ui',
      icon: <FiLayers size={20} />,
      description: 'Build interactive prototypes that simulate real user flows and interactions',
      proficiency: 75,
    },
    
    // Product Management Skills
    {
      name: 'Product Roadmapping',
      category: 'pm',
      icon: <FiClipboard size={20} />,
      description: 'Develop and maintain product roadmaps that align with business goals',
      proficiency: 85,
    },
    {
      name: 'Sprint Management',
      category: 'pm',
      icon: <FiTrello size={20} />,
      description: 'Plan and execute development sprints with cross-functional teams',
      proficiency: 80,
    },
    {
      name: 'Metrics Analysis',
      category: 'pm',
      icon: <FiTrendingUp size={20} />,
      description: 'Track and analyze key product metrics to inform feature development',
      proficiency: 75,
    },
    {
      name: 'Release Planning',
      category: 'pm',
      icon: <FiClock size={20} />,
      description: 'Coordinate product releases with engineering, marketing, and customer success teams',
      proficiency: 70,
    },
  ];
  
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);
  
  return (
    <div className="section-container">
      <motion.h2 
        className="heading-xl text-center gradient-text mb-6 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Product Design &amp; Management
      </motion.h2>
      
      <motion.p 
        className="paragraph text-center max-w-3xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My combined expertise in product management and UI/UX design enables me to create
        user-centric products from concept to launch, with a focus on both business impact and user experience.
      </motion.p>
      
      {/* Show design system showcase before the skills */}
      <DesignSystemShowcase />
      
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-light dark:bg-gray-dark rounded-lg p-1 shadow-md">
          <motion.button 
            className={`px-4 py-2 rounded-lg transition-colors relative ${filter === 'all' ? 'text-blue-dark dark:text-white' : 'hover:bg-white/50 dark:hover:bg-gray-700'}`}
            onClick={() => setFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter === 'all' && (
              <motion.div 
                className="absolute inset-0 bg-white dark:bg-blue-dark rounded-lg -z-10"
                layoutId="tabBackground"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            All Skills
          </motion.button>
          <motion.button 
            className={`px-4 py-2 rounded-lg transition-colors relative ${filter === 'ui' ? 'text-blue-dark dark:text-white' : 'hover:bg-white/50 dark:hover:bg-gray-700'}`}
            onClick={() => setFilter('ui')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter === 'ui' && (
              <motion.div 
                className="absolute inset-0 bg-white dark:bg-blue-dark rounded-lg -z-10"
                layoutId="tabBackground"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            UI/UX Design
          </motion.button>
          <motion.button 
            className={`px-4 py-2 rounded-lg transition-colors relative ${filter === 'pm' ? 'text-blue-dark dark:text-white' : 'hover:bg-white/50 dark:hover:bg-gray-700'}`}
            onClick={() => setFilter('pm')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter === 'pm' && (
              <motion.div 
                className="absolute inset-0 bg-white dark:bg-blue-dark rounded-lg -z-10"
                layoutId="tabBackground"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            Product Management
          </motion.button>
        </div>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {filteredSkills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </motion.div>
      
      <motion.div 
        className="mt-16 bg-blue-light dark:bg-blue-dark/30 rounded-xl p-8 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-medium/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-medium/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="heading-md text-center mb-6 relative">Product Management Approach</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <motion.div 
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-medium flex items-center justify-center text-white mb-4 shadow-lg">
                <FiUsers size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">User-Centric</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                I place users at the center of product decisions, ensuring features solve real problems.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-medium flex items-center justify-center text-white mb-4 shadow-lg">
                <FiTrendingUp size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Data-Driven</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                I leverage metrics and user feedback to validate ideas and measure feature success.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-medium flex items-center justify-center text-white mb-4 shadow-lg">
                <FiClock size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Agile Execution</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                I implement iterative development cycles to ship quality features quickly and adapt to feedback.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills; 