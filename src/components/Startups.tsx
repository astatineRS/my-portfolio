'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiServer, FiUsers, FiLayers, FiBarChart2 } from 'react-icons/fi';

const StartupCard = ({ 
  title, 
  description, 
  role, 
  image, 
  features, 
  active, 
  onClick
}: { 
  title: string; 
  description: string; 
  role: string; 
  image: string; 
  features: Array<{icon: React.ReactNode; text: string}>; 
  active: boolean; 
  onClick: () => void;
}) => {
  return (
    <motion.div 
      className={`card cursor-pointer transition-all duration-300 ${active ? 'border-2 border-blue-medium scale-105' : 'hover:scale-[1.02]'}`}
      onClick={onClick}
      whileHover={{ y: -5 }}
      layout
    >
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover"
        />
      </div>
      
      <h3 className="heading-md">{title}</h3>
      <p className="paragraph">{description}</p>
      
      <div className="mb-4">
        <span className="inline-block bg-blue-light dark:bg-blue-dark/30 text-blue-dark dark:text-blue-medium px-3 py-1 rounded-full text-sm font-medium">
          {role}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div className="mr-2 text-blue-dark dark:text-blue-medium">
              {feature.icon}
            </div>
            <span className="text-sm">{feature.text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const StartupDetail = ({ startup }: { startup: any }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-gray-dark rounded-xl shadow-lg p-6 mt-8"
    >
      <h3 className="heading-md mb-4">{startup.title} - Deep Dive</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-2">Challenge</h4>
          <p className="mb-4">{startup.challenge}</p>
          
          <h4 className="text-lg font-semibold mb-2">Solution</h4>
          <p className="mb-4">{startup.solution}</p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-2">My Role & Contribution</h4>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            {startup.contributions.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <h4 className="text-lg font-semibold mb-2">Key Outcomes</h4>
          <ul className="list-disc pl-5 space-y-2">
            {startup.outcomes.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Startups = () => {
  const [selectedStartup, setSelectedStartup] = useState<number | null>(null);
  
  const startups = [
    {
      title: "SYINQ (SYNC)",
      description: "A student-centric platform combining carpooling, marketplace, and community forum",
      role: "Co-founder",
      image: "/syinq.jpg",
      features: [
        { icon: <FiUsers size={16} />, text: "AI Auto-matching" },
        { icon: <FiServer size={16} />, text: "Student Verification" },
        { icon: <FiLayers size={16} />, text: "Secure Trading" },
        { icon: <FiBarChart2 size={16} />, text: "Community Forum" }
      ],
      challenge: "Students faced difficulties finding affordable transportation, buying/selling used items, and connecting with peers for academic support.",
      solution: "Created a unified platform with strong verification protocols and AI matchmaking algorithms to serve student needs across multiple domains.",
      contributions: [
        "Led UI/UX design for all platform features",
        "Conducted market research and competitor analysis",
        "Created comprehensive user flow diagrams",
        "Designed system architecture and data models",
        "Built high-fidelity prototypes for investor presentations",
        "Co-convener of Bennovate 2.0 (biggest e-summit of Bennett University)"
      ],
      outcomes: [
        "Successfully secured seed funding for development",
        "Onboarded 500+ students in beta testing phase",
        "Achieved 35% monthly active user growth",
        "Facilitated over 200 student carpooling matches",
        "Built a network of student ambassadors across campus"
      ]
    },
    {
      title: "CrownCast",
      description: "Platform for YouTubers and brands featuring interactive campaigns, viewer challenges, and analytics",
      role: "Founding Member",
      image: "/crowncast.jpg",
      features: [
        { icon: <FiUsers size={16} />, text: "Viewer Challenges" },
        { icon: <FiServer size={16} />, text: "Interactive Campaigns" },
        { icon: <FiLayers size={16} />, text: "Analytics Dashboard" },
        { icon: <FiBarChart2 size={16} />, text: "Brand Partnerships" }
      ],
      challenge: "Content creators struggled to monetize their audience beyond traditional advertising and lacked tools to create interactive experiences for viewers.",
      solution: "Developed a platform enabling creators to launch interactive campaigns, challenges, and brand partnerships with built-in analytics and engagement tools.",
      contributions: [
        "Spearheaded full product lifecycle from conception to launch",
        "Designed high-fidelity prototypes and user interfaces",
        "Coordinated with cross-functional teams (engineering, marketing)",
        "Conducted user testing with early adopter creators",
        "Developed analytics dashboard and reporting features"
      ],
      outcomes: [
        "Partnered with 25+ mid-tier YouTubers for platform launch",
        "Facilitated 15 brand partnership campaigns",
        "Increased creator engagement rates by average of 22%",
        "Built comprehensive analytics tools monitoring 40+ metrics",
        "Developed proprietary algorithm for matching creators with brands"
      ]
    }
  ];
  
  const handleStartupClick = (index: number) => {
    setSelectedStartup(selectedStartup === index ? null : index);
  };
  
  return (
    <div className="section-container">
      <motion.h2 
        className="heading-xl text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Startup Journey
      </motion.h2>
      
      <p className="paragraph text-center max-w-3xl mx-auto mb-12">
        My entrepreneurial passion has led me to found and co-found multiple ventures, 
        where I've applied my skills in product management, UI/UX design, and team leadership.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {startups.map((startup, index) => (
          <StartupCard 
            key={index}
            title={startup.title}
            description={startup.description}
            role={startup.role}
            image={startup.image}
            features={startup.features}
            active={selectedStartup === index}
            onClick={() => handleStartupClick(index)}
          />
        ))}
      </div>
      
      {selectedStartup !== null && (
        <StartupDetail startup={startups[selectedStartup]} />
      )}
    </div>
  );
};

export default Startups; 