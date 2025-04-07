'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

type Hobby = {
  title: string;
  description: string;
  image: string;
};

const HobbyCard = ({ hobby, index }: { hobby: Hobby; index: number }) => {
  return (
    <motion.div
      className="min-w-[280px] md:min-w-[320px] h-[400px] relative rounded-xl overflow-hidden group cursor-grab snap-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Image 
        src={hobby.image} 
        alt={hobby.title} 
        fill 
        className="object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-bold mb-2">{hobby.title}</h3>
        <p className="text-white/90 text-sm">{hobby.description}</p>
      </div>
    </motion.div>
  );
};

const Hobbies = () => {
  const hobbies: Hobby[] = [
    {
      title: "Photography",
      description: "Capturing moments through the lens allows me to explore perspectives, play with light, and tell stories visually.",
      image: "/hobbies/photography.jpg"
    },
    {
      title: "Designing",
      description: "I enjoy crafting intuitive UI/UX designs and graphics, experimenting with layouts, typography, and user flows.",
      image: "/hobbies/designing.jpg"
    },
    {
      title: "Research",
      description: "Diving deep into topics like product strategy, tech trends, and user behavior keeps me curious and constantly learning.",
      image: "/hobbies/research.jpg"
    },
    {
      title: "Boxing",
      description: "Boxing keeps me disciplined, sharp, and focused—it's where I clear my mind and push my limits.",
      image: "/hobbies/boxing.jpg"
    },
    {
      title: "Reading",
      description: "From product design to psychology and startups, I enjoy reading books that challenge my thinking and fuel new ideas.",
      image: "/hobbies/reading.jpg"
    }
  ];
  
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 340; // Approximate card width plus gap
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  
  return (
    <div className="section-container">
      <motion.h2 
        className="heading-xl text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Hobbies & Interests
      </motion.h2>
      
      <motion.p 
        className="paragraph text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Outside of work, I pursue various interests that keep me balanced and inspired.
      </motion.p>
      
      <div className="relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full bg-white dark:bg-gray-dark shadow-md text-gray-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Scroll left"
          >
            <FiArrowLeft size={20} />
          </button>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 px-12 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} hobby={hobby} index={index} />
          ))}
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full bg-white dark:bg-gray-dark shadow-md text-gray-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Scroll right"
          >
            <FiArrowRight size={20} />
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Hobbies; 