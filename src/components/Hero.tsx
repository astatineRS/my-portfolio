'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload, FiMail, FiArrowDown, FiBox, FiPenTool, FiLayers } from 'react-icons/fi';

// Design element components
const DesignElement = ({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) => (
  <motion.div
    className={`absolute ${className} bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 flex items-center justify-center z-10`}
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
  >
    {children}
  </motion.div>
);

// Animated cursor follower
const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="fixed w-8 h-8 rounded-full pointer-events-none mix-blend-difference z-50 flex items-center justify-center"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? [1, 1.2, 1] : 0
      }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.5, repeat: Infinity, repeatType: "loop" }
      }}
    >
      <div className="w-2 h-2 bg-blue-medium rounded-full" />
    </motion.div>
  );
};

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Designing Products. Managing Teams. Building Startups.';
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Design system colors
  const colorPalette = [
    { bg: "bg-blue-100", border: "border-blue-500" },
    { bg: "bg-indigo-100", border: "border-indigo-500" },
    { bg: "bg-purple-100", border: "border-purple-500" },
    { bg: "bg-pink-100", border: "border-pink-500" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CursorFollower />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-light via-white to-gray-light dark:from-blue-dark dark:via-gray-dark dark:to-gray-dark opacity-70"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      {/* Animated background shapes */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-medium opacity-10 dark:opacity-20 blur-3xl"
        animate={{ 
          x: [0, 20, 0], 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 15, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-blue-dark opacity-10 dark:opacity-20 blur-3xl"
        animate={{ 
          x: [0, -30, 0], 
          y: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 18, 
          ease: "easeInOut" 
        }}
      />
      
      {/* UI Design Elements */}
      <DesignElement className="top-32 left-[15%] hidden lg:flex" delay={2.5}>
        <div className="flex items-center gap-2">
          <FiLayers className="text-blue-dark" size={18} />
          <span className="text-sm font-medium">UI Components</span>
        </div>
      </DesignElement>
      
      <DesignElement className="bottom-32 left-[20%] hidden lg:flex" delay={2.8}>
        <div className="flex items-center gap-2">
          <FiPenTool className="text-indigo-500" size={18} />
          <span className="text-sm font-medium">Design System</span>
        </div>
      </DesignElement>
      
      <DesignElement className="top-40 right-[15%] hidden lg:flex" delay={3.1}>
        <div className="flex items-center gap-2">
          <FiBox className="text-purple-500" size={18} />
          <span className="text-sm font-medium">Prototyping</span>
        </div>
      </DesignElement>
      
      {/* Color palette */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:flex flex-col gap-3">
        {colorPalette.map((color, index) => (
          <motion.div
            key={index}
            className={`w-8 h-8 rounded-full ${color.bg} border-2 ${color.border}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2 + (index * 0.2), type: "spring" }}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
      
      <div className="section-container z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="text-gradient">
              Raunak Shukla
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-blue-medium rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
            </span>
          </motion.h1>
          
          <motion.div
            className="h-12 md:h-16 mb-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2 className="text-base md:text-xl lg:text-2xl font-medium text-gray-dark dark:text-gray-light">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>
          
          <motion.blockquote
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 pl-4 border-l-4 border-blue-medium italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p className="text-gray-700 dark:text-gray-300">
              "I don't speak code—I craft experiences, sculpting ideas into products that resonate with beauty and functionality"
            </p>
          </motion.blockquote>
          
          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.a 
              href="#contact" 
              className="btn-primary flex items-center gap-2 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail size={18} />
              <span className="relative z-10">Get in Touch</span>
              <motion.span 
                className="absolute inset-0 bg-blue-medium opacity-0 group-hover:opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a 
              href="/resume.pdf" 
              className="btn-secondary flex items-center gap-2 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              <FiDownload size={18} />
              <span className="relative z-10">Download Resume</span>
              <motion.span 
                className="absolute inset-0 bg-blue-medium opacity-0 group-hover:opacity-10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="relative w-80 h-80">
            {/* Interactive design elements container */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main image with design frame */}
              <div className="relative w-72 h-72 z-10">
                {/* Animated design frame */}
                <motion.div 
                  className="absolute -inset-3 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 rounded-lg opacity-70 z-0"
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.02, 1, 1.02, 1] 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Profile image */}
                <motion.div 
                  className="relative z-10 w-full h-full bg-white dark:bg-gray-800 rounded-lg p-1 shadow-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="Raunak Shukla"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative design elements */}
              {/* Design grid */}
              <motion.div 
                className="absolute top-0 left-0 w-20 h-20 wireframe-box"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="grid grid-cols-2 gap-2 p-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 h-full w-full rounded"></div>
                  <div className="bg-blue-200 dark:bg-blue-800/30 h-full w-full rounded"></div>
                  <div className="bg-blue-300 dark:bg-blue-700/30 h-full w-full rounded"></div>
                  <div className="bg-blue-400 dark:bg-blue-600/30 h-full w-full rounded"></div>
                </div>
              </motion.div>
              
              {/* Design tool */}
              <motion.div 
                className="absolute -bottom-2 -left-10 w-24 h-24 rounded-full bg-white dark:bg-gray-800 shadow-lg p-3 z-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{ 
                  rotate: 15,
                  scale: 1.1,
                }}
              >
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center">
                  <FiPenTool className="text-blue-500 dark:text-blue-400" size={28} />
                </div>
              </motion.div>
              
              {/* Component mockup */}
              <motion.div 
                className="absolute -top-4 -right-8 w-28 h-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 z-20"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: -10 }}
                transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{ 
                  y: -5,
                  rotate: 0,
                }}
              >
                <div className="w-full h-3 bg-blue-200 dark:bg-blue-900/30 rounded-full mb-2"></div>
                <div className="grid grid-cols-3 gap-1">
                  <div className="h-4 bg-indigo-200 dark:bg-indigo-900/30 rounded"></div>
                  <div className="h-4 bg-blue-300 dark:bg-blue-800/30 rounded col-span-2"></div>
                  <div className="h-4 bg-blue-300 dark:bg-blue-800/30 rounded col-span-2"></div>
                  <div className="h-4 bg-indigo-200 dark:bg-indigo-900/30 rounded"></div>
                </div>
              </motion.div>
              
              {/* Prototype indicator */}
              <motion.div 
                className="absolute bottom-2 -right-10 w-24 h-10 bg-blue-500 dark:bg-blue-600 text-white rounded-full shadow-lg z-20 flex items-center justify-center text-xs font-medium"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <span>Prototype</span>
              </motion.div>
            </div>
            
            {/* Background design elements */}
            <motion.div 
              className="absolute -right-12 -bottom-12 w-40 h-40 border-2 border-dashed border-blue-medium rounded-xl opacity-20 rotate-12"
              animate={{ rotate: [12, 0, 12] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -left-12 -top-12 w-40 h-40 border-2 border-dashed border-indigo-400 rounded-full opacity-20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full dot-pattern opacity-5 z-0"></div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowDown size={24} />
        </motion.div>
      </motion.div>
      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(100, 100, 100, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 100, 100, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default Hero; 