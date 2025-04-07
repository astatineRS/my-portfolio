'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiPlus, FiMinus, FiLayers, FiCode, FiPenTool } from 'react-icons/fi';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
  details: string[];
  designElements?: {
    wireframe?: string;
    prototype?: string;
  };
};

// Design system wireframe showcase
const WireframePreview = ({ url }: { url?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      className="relative overflow-hidden rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 aspect-video flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {url ? (
        <Image
          src={url}
          alt="Project wireframe"
          fill
          className="object-cover opacity-80"
        />
      ) : (
        <div className="wireframe-box p-4 w-5/6 h-4/5 flex flex-col justify-between">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md w-1/2 mx-auto"></div>
          <div className="grid grid-cols-3 gap-4 my-4">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-md h-16"></div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-md h-16"></div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-md h-16"></div>
          </div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md w-2/3 mx-auto"></div>
        </div>
      )}
      
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
        <FiLayers size={32} className="text-white" />
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ 
  project, 
  index, 
  expanded, 
  toggleExpand 
}: { 
  project: Project; 
  index: number;
  expanded: boolean;
  toggleExpand: () => void;
}) => {
  return (
    <motion.div 
      className="card overflow-hidden hover-lift group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
    >
      {/* Decorative corner element */}
      <div className="absolute -top-1 -right-1 w-16 h-16 overflow-hidden z-10 transition-opacity duration-300">
        <div className="absolute rotate-45 translate-y-8 -translate-x-2 w-24 h-3 bg-gradient-to-r from-blue-400 to-blue-600"></div>
      </div>
      
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden group">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
        
        {/* Floating design tag */}
        {project.designElements && (
          <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 rounded-full py-1 px-3 shadow-md">
            <div className="flex items-center gap-1">
              <FiPenTool size={14} className="text-blue-medium" />
              <span className="text-xs font-medium">UI Designed</span>
            </div>
          </div>
        )}
      </div>
      
      <motion.h3 
        className="heading-md relative inline-block mb-2"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {project.title}
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-blue-medium"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
        />
      </motion.h3>
      
      <p className="paragraph">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, idx) => (
          <motion.span 
            key={idx}
            className="px-3 py-1 bg-blue-light dark:bg-blue-dark/30 text-blue-dark dark:text-blue-medium rounded-full text-xs font-medium"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3">
          {project.links.demo && (
            <motion.a 
              href={project.links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-dark dark:text-blue-medium hover:underline"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FiExternalLink size={16} />
              <span>Demo</span>
            </motion.a>
          )}
          
          {project.links.github && (
            <motion.a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-dark dark:text-blue-medium hover:underline"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FiGithub size={16} />
              <span>Code</span>
            </motion.a>
          )}
        </div>
        
        <motion.button 
          onClick={toggleExpand}
          className="p-2 rounded-full bg-gray-light dark:bg-gray-dark text-gray-dark dark:text-gray-light hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          whileHover={{ rotate: expanded ? -90 : 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={expanded ? "Collapse details" : "Expand details"}
        >
          {expanded ? <FiMinus size={16} /> : <FiPlus size={16} />}
        </motion.button>
      </div>
      
      {expanded && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-gray-200 dark:border-gray-700 pt-4"
        >
          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2 flex items-center gap-2">
              <FiCode size={16} className="text-blue-dark dark:text-blue-medium" />
              <span>Project Details</span>
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              {project.details.map((detail, idx) => (
                <motion.li 
                  key={idx} 
                  className="text-sm text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.3 }}
                >
                  {detail}
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Design elements showcase */}
          {project.designElements && (
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-3 flex items-center gap-2">
                <FiPenTool size={16} className="text-blue-dark dark:text-blue-medium" />
                <span>Design Process</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2 text-gray-600 dark:text-gray-300">Wireframe Concepts</p>
                  <WireframePreview url={project.designElements.wireframe} />
                </div>
                
                <div>
                  <p className="text-sm mb-2 text-gray-600 dark:text-gray-300">Interactive Prototype</p>
                  <WireframePreview url={project.designElements.prototype} />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      title: "Drone Delivery Using BSSID",
      description: "A pioneering project using Wi-Fi triangulation to improve drone navigation and delivery accuracy in areas with poor GPS coverage.",
      image: "/drone-delivery.jpg",
      tags: ["IoT", "Cybersecurity", "Python", "Wi-Fi Triangulation"],
      links: {
        demo: "https://medium.com/@raunak9554/using-bssid-in-drone-delivery-technology-2a76aa95cc52"
      },
      details: [
        "Developed algorithms to accurately locate delivery destination using Wi-Fi BSSID triangulation",
        "Implemented secure authentication protocols to prevent signal spoofing",
        "Created a prototype using Raspberry Pi and custom drone hardware",
        "Achieved 85% location accuracy in areas with poor GPS signal"
      ],
      designElements: {
        wireframe: "/drone-wireframe.jpg",
        prototype: "/drone-prototype.jpg"
      }
    },
    {
      title: "Vulnerability Scanner",
      description: "An automated tool developed to identify security vulnerabilities in web applications, improving threat detection rates by 20-30%.",
      image: "/vulnerability-scanner.jpg",
      tags: ["Cybersecurity", "Python", "Automation", "Threat Detection"],
      links: {
        demo: "https://sentinel-web-watch.lovable.app/",
        github: "https://github.com/astatineRS/sentinel-web-watch"
      },
      details: [
        "Built a comprehensive scanning tool that identifies common web vulnerabilities (XSS, SQLi, CSRF)",
        "Incorporated machine learning to reduce false positive rates by 30%",
        "Developed an intuitive dashboard for security analysts to review and prioritize threats",
        "Added automated reporting features with remediation recommendations"
      ],
      designElements: {
        wireframe: "/vuln-wireframe.jpg",
        prototype: "/vuln-prototype.jpg"
      }
    },
    {
      title: "Contact-Based Social Utility App",
      description: "This app transforms your phone's contact list into a private, location-aware social utility platform that helps you stay connected, get help, or plan meetups with people you already know.",
      image: "/whatsapp-automation.jpg",
      tags: ["Node.js", "API Integration", "Automation", "Messaging"],
      links: {
        github: "https://github.com/astatineRS/reconnections-near-you",
        demo: "https://reconnections-near-you.lovable.app/auth"
      },
      details: [
        "Designed and integrated a seamless WhatsApp Business API experience to enable automated, contextual messaging that enhances user engagement",
        "Built a modular message template system to empower teams with scalable, reusable communication flows—improving consistency across touchpoints",
        "Defined key engagement metrics and collaborated with the analytics team to implement dashboards tracking delivery, open rates, and user response behaviors",
        "Led the planning and execution of a campaign scheduling system, ensuring timely, relevant message delivery aligned with user lifecycle moments"
      ]
    },
    {
      title: "Web3 Decentralized Marketplace",
      description: "A blockchain-based marketplace allowing secure peer-to-peer transactions without traditional intermediaries.",
      image: "/web3-marketplace.jpg",
      tags: ["Web3", "Solidity", "React", "Ethereum"],
      links: {
        demo: "https://fin-track-7vom.vercel.app/mintdao",
        github: "https://github.com/astatineRS/FinTrack"
      },
      details: [
        "Developed smart contracts for secure transaction handling using Solidity",
        "Built a responsive frontend interface using React and ethers.js",
        "Implemented a decentralized reputation system to establish trust between users",
        "Created an escrow mechanism to protect both buyers and sellers during transactions"
      ],
      designElements: {
        wireframe: "/marketplace-wireframe.jpg",
        prototype: "/marketplace-prototype.jpg"
      }
    }
  ];
  
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  return (
    <div className="section-container relative">
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-100 dark:bg-indigo-900/20 opacity-30 blur-3xl"></div>
      
      <motion.h2 
        className="heading-xl text-center gradient-text mb-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      
      <motion.div
        className="max-w-3xl mx-auto relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="paragraph text-center mb-12 relative z-10">
          A selection of technical projects showcasing my skills in cybersecurity, 
          automation, and blockchain technology.
        </p>
        
        {/* Design process indicator - Clean, elegant design with micro-animations */}
        <div className="hidden md:block mb-16">
          <div className="max-w-3xl mx-auto bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <div className="flex flex-col gap-6">
              {/* Process title */}
              <div className="text-center mb-2">
                <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">My Design Process</h3>
              </div>
              
              {/* Process steps - Vertical cards with animation */}
              <div className="grid grid-cols-5 gap-1">
                {[
                  { name: 'Research', icon: '🔍', active: true },
                  { name: 'Wireframing', icon: '✏️', active: true },
                  { name: 'Prototyping', icon: '🔄', active: true },
                  { name: 'Development', icon: '💻', active: false },
                  { name: 'Refining', icon: '✨', active: false }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    className={`relative flex flex-col items-center ${
                      i < 3 ? 'opacity-100' : 'opacity-60'
                    }`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: i < 3 ? 1 : 0.6 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    {/* Step number with indicator dot */}
                    <div className="relative mb-3">
                      <motion.div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.active 
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                        }`}
                        whileHover={{ y: -3, boxShadow: "0 6px 10px -3px rgba(0, 0, 0, 0.1)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <span className="text-sm font-bold">{i + 1}</span>
                        
                        {/* Active indicator dot with animation */}
                        {step.active && (
                          <motion.div 
                            className="absolute -top-1 -right-1 w-3 h-3 bg-blue-300 dark:bg-blue-400 rounded-full"
                            animate={{ 
                              scale: [1, 1.3, 1],
                              backgroundColor: ["#93C5FD", "#3B82F6", "#93C5FD"]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "easeInOut"
                            }}
                          />
                        )}
                      </motion.div>
                    </div>
                    
                    {/* Step icon */}
                    <div className="text-xl mb-2">{step.icon}</div>
                    
                    {/* Step name */}
                    <p className="text-xs font-medium text-center">{step.name}</p>
                    
                    {/* Progress line */}
                    {i < 4 && (
                      <div className="absolute top-5 left-[60%] w-[80%] h-[2px]">
                        <motion.div 
                          className={`h-full ${
                            i < 2 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gray-300 dark:bg-gray-600'
                          } rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Current phase indicator */}
              <motion.div 
                className="mt-4 text-center text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs">
                  Current Phase: Prototyping
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            index={index}
            expanded={expandedIndex === index}
            toggleExpand={() => toggleExpand(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects; 