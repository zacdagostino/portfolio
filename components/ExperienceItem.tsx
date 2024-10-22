import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import StackList from './StackList'; // Import the StackList component
import { FaChevronDown } from 'react-icons/fa'; // Icons for the button
import Modal from './Modal'; // Import the Modal component

interface ExperienceItemProps {
  title: string;
  projectName: string;
  position: string;
  type: string;
  shortOverview: string;
  projectOverview: string;
  contributions: string[];
  professionalGrowth: string;
  date: string;
  stack: string[];
  detailedInfo?: string; // Optional detailed information
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  projectName,
  position,
  type,
  shortOverview,
  projectOverview,
  contributions,
  professionalGrowth,
  date,
  stack,
  detailedInfo,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close
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
    <>
      {/* Experience Item */}
      <motion.div
        ref={cardRef}
        className="experience-item relative overflow-hidden rounded-lg p-8 mb-12 mx-auto bg-[#2b2c31] transform transition-transform hover:scale-105"
        style={{ maxWidth: '650px', pointerEvents: 'auto' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileInView={{ opacity: 1, y: 0, skewY: 0 }}
        initial={{ opacity: 0, y: 50, skewY: 5 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Button to open modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute top-3 right-3 text-gray-400 hover:text-green-500 transition duration-300 ease-in-out"
        >
          <FaChevronDown className="h-5 w-5" />
        </button>

        <div className="shine-effect absolute inset-0 pointer-events-none"></div>

        {/* Project Name, Position, and Type */}
        <h3 className="text-2xl font-extrabold mb-3 text-white tracking-wide">
          {projectName}
        </h3>
        <p className="text-sm mb-1 text-gray-400">
          <strong>Position:</strong> {position}
        </p>
        <p className="text-sm mb-1 text-gray-400">
          <strong>Type:</strong> {type}
        </p>

        {/* Short Overview */}
        <p className="text-base mb-4 text-gray-300 leading-relaxed">
          {shortOverview}
        </p>

        {/* Date */}
        <p className="text-sm mb-3 text-gray-500">
          <strong>Date:</strong> {date}
        </p>

        {/* Stack List */}
        <StackList technologies={stack} />
      </motion.div>

      {/* Modal for more detailed information */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        projectName={projectName}
        position={position}
        type={type}
        projectOverview={projectOverview}
        contributions={contributions}
        professionalGrowth={professionalGrowth}
        date={date}
        stack={stack}
      />
    </>
  );
};

export default ExperienceItem;
