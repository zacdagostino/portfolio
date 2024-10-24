import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillItemProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  delay?: number;
  gradientColor?: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, title, skills, delay = 0, gradientColor = '#1e1f23' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="skills-card p-6 rounded-lg bg-[#1e1f23] shadow-md transition-all duration-500 transform relative flex flex-col justify-center items-center"
      style={{
        paddingTop: isHovered ? '3rem' : '',  // Adjust padding dynamically
        pointerEvents: 'auto',
        height: isHovered ? 'auto' : '180px',
        maxWidth: '100%',
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 50 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      whileHover={{
        scale: 1.1,
        background: `linear-gradient(135deg, ${gradientColor}, #1e1f23)`,
        boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.5)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        style={{
          background: `radial-gradient(circle at center, ${gradientColor} 0%, transparent 70%)`,
          zIndex: -1,
        }}
      />

      {/* Icon and Title in the Center */}
      <motion.div
        className="flex items-center justify-center relative z-10"
        initial={{ y: 0 }}
        animate={isHovered ? { y: -20 } : { y: 0 }} // Title and icon move up when hovered
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {/* Conditionally set the color of the icon */}
        <motion.div
          className="h-8 w-8 mr-2"
          style={{ color: isHovered ? '#ffffff' : gradientColor }} // Change color to white on hover
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {icon}
        </motion.div>
        <motion.h3
          className='text-2xl font-semibold text-white'
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {title}
        </motion.h3>
      </motion.div>

      {/* Skills List */}
      <motion.ul
        className='list-disc list-inside space-y-2 mt-4 relative z-10 text-gray-300'
        initial={{ opacity: 0, height: 0 }}
        animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{
          overflow: 'hidden',
        }}
      >
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default SkillItem;
