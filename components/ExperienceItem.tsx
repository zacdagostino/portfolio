import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import useScrollDirection from './useScrollDirection'; // Import the custom hook

interface ExperienceItemProps {
  title: string;
  description: string;
  date: string;
  stack: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, description, date, stack }) => {
  const scrollDirection = useScrollDirection(); // Get scroll direction

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
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;

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
      whileInView={{
        opacity: 1,
        y: scrollDirection === 'down' ? 20 : 20, // Smaller movement for smoother feel
        skewY: 0,
      }}
      initial={{ opacity: 0, y: scrollDirection === 'down' ? 20 : -20, skewY: scrollDirection === 'down' ? -2 : 2 }} // Reduced initial motion and skew
      transition={{
        duration: 1, // Increase duration for smoother motion
        ease: 'easeInOut', // Use smoother easing
      }}
      viewport={{ once: false, amount: 0.2 }} // Trigger every time it comes into view
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
      <p className="text-sm" style={{ color: 'rgba(229, 229, 229, 0.6)' }}>
        <strong>Stack:</strong> {stack.join(', ')}
      </p>
    </motion.div>
  );
};

export default ExperienceItem;
