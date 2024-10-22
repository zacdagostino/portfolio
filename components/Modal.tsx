import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import StackList from './StackList';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  projectName: string;
  position: string;
  type: string;
  projectOverview: string;
  contributions: string[];
  professionalGrowth: string;
  date: string;
  stack: string[];
}

const Modal: React.FC<ModalProps> = ({
    
  isOpen,
  onClose,
  projectName,
  position,
  type,
  projectOverview,
  contributions,
  professionalGrowth,
  date,
  stack,
}) => {
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on the body
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling on the body
      document.body.style.overflow = 'auto';
    }

    // Cleanup when modal is unmounted or closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const handleWheel = (event: React.WheelEvent) => {
    event.stopPropagation(); // Stop the event from propagating to the parent
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 backdrop-blur-md flex justify-center items-start transition-opacity duration-300 ease-in-out"
      style={{ pointerEvents: 'auto' }}
      onWheel={handleWheel} // Ensure the modal catches the scroll wheel event
    >
      <motion.div
        className="bg-[#2b2c2f] rounded-lg shadow-xl p-8 md:p-12 mx-8 my-12 w-full max-w-4xl h-[90vh] relative z-50 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes className="h-6 w-6" />
        </button>

        {/* Project Title and Type */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-1">{projectName}</h2>
          <h3 className="text-lg font-medium text-green-400 uppercase tracking-widest">{type}</h3>
        </div>

        {/* Project Information */}
        <div className="mb-8 flex justify-between items-center">
          <div className="text-gray-300">
            <p className="text-lg font-semibold text-white bg-[#1b1c1f] px-4 py-2 rounded-md shadow-md">
              {date}
            </p>
          </div>
          <div className="text-lg text-gray-300 font-medium italic">
            <p>{position}</p>
          </div>
        </div>

        {/* Stack Section */}
        <div className="mb-8 p-4 bg-[#1b1c1f] rounded-md shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-3">Tech Stack</h3>
          <StackList technologies={stack} />
        </div>

        {/* Project Overview */}
        <div className="mb-8 p-4 bg-[#1b1c1f] rounded-md shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-3">Project Overview</h3>
          <p className="text-md text-gray-300 leading-relaxed">{projectOverview}</p>
        </div>

        {/* Contributions */}
        <div className="mb-8 p-4 bg-[#1b1c1f] rounded-md shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-3">Contributions</h3>
          <ul className="list-disc list-inside text-md text-gray-300 leading-relaxed space-y-2">
            {contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </div>

        {/* Professional Growth */}
        <div className="p-4 bg-[#1b1c1f] rounded-md shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-3">Professional Growth</h3>
          <p className="text-md text-gray-300 leading-relaxed">{professionalGrowth}</p>
        </div>
      </motion.div>

      {/* Overlay Click Handler */}
      <div
        className="fixed inset-0 bg-transparent"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default Modal;
