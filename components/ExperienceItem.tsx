import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import StackList from './StackList'; // Import the StackList component

interface ExperienceItemProps {
  title: string;
  description: string;
  date: string;
  stack: string[]; // Stack should be an array of technology names
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, description, date, stack }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 3;
      const rotateY = ((x - centerX) / centerX) * -3;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }, []);

  const handleMouseLeave = () => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    const card = cardRef.current;
    if (card) {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="experience-item relative overflow-hidden rounded-lg p-8 mb-12 max-w-lg mx-auto"
      style={{ pointerEvents: 'auto' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileInView={{ opacity: 1, y: 0, skewY: 0 }}
      initial={{ opacity: 0, y: 50, skewY: 5 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="shine-effect absolute inset-0 pointer-events-none"></div>
      <h3 className="text-2xl font-extrabold mb-4" style={{ color: '#FFFFFF', letterSpacing: '0.05em' }}>
        {title}
      </h3>
      <p className="text-base mb-6" style={{ color: 'rgba(224, 224, 224, 0.8)', lineHeight: '1.75' }}>
        {description}
      </p>
      <p className="text-sm mb-2" style={{ color: 'rgba(229, 229, 229, 0.6)' }}>
        <strong>Date:</strong> {date}
      </p>
      {/* Integrate the StackList component here */}
     
        <StackList technologies={stack} /> {/* Pass the stack array to StackList */}
  
    </motion.div>
  );
};

export default ExperienceItem;
