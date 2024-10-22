import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import StackList from './StackList'; // Import the StackList component
import { FaExpandAlt  } from 'react-icons/fa'; // Icons for the button
import Modal from './Modal'; // Import the Modal component
import { ExperienceData } from '../types/interfaces';

const ExperienceItem: React.FC<ExperienceData> = ({
  projectName,
  position,
  type,
  shortOverview,
  projectOverview,
  projectInfo,
  professionalGrowth,
  date,
  stack,
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
        onClick={() => setIsModalOpen(true)}
      >
        {/* Button to open modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute top-3 right-3 text-gray-400 hover:text-green-500 transition duration-300 ease-in-out"
        >
          <FaExpandAlt className="h-5 w-5" />
        </button>

        <div className="shine-effect absolute inset-0 pointer-events-none"></div>

        {/* Project Name */}
        <h3 className="text-3xl font-extrabold mb-4 text-white tracking-wide">
          {projectName}
        </h3>

        {/* Position, Type, and Date */}
        <div className="mb-4">
          <div className="flex items-center mb-2 space-x-4">
            <p className="text-base font-medium text-green-400">
              <strong>Position:</strong> {position}
            </p>
            <span className="block w-1 h-1 rounded-full bg-gray-500"></span>
            <p className="text-base font-medium text-blue-400">
              <strong>Type:</strong> {type}
            </p>
          </div>
           {/* Date */}
   
          <p className="text-sm text-gray-500">
           {date}
          </p>
        </div>

        {/* Short Overview */}
        <p className="text-base mb-4 text-gray-300 leading-relaxed">
          {shortOverview}
        </p>

        {/* Stack List */}
        <StackList technologies={stack} />
      </motion.div>

      {/* Modal for more detailed information */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectName={projectName}
        position={position}
        type={type}
        shortOverview={shortOverview}
        projectOverview={projectOverview}
        projectInfo={projectInfo}
        professionalGrowth={professionalGrowth}
        date={date}
        stack={stack}
      />
    </>
);

};

export default ExperienceItem;
