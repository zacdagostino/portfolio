import React, { useEffect } from 'react';
import { FaGithub, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import StackList from './StackList';
import { ExperienceData } from '../types/interfaces'; // Import the ExperienceData interface

// Update the component to accept ExperienceData props
const Modal: React.FC<ExperienceData & { isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
  projectName,
  position,
  type,
  projectOverview,
  githubLink,
  projectInfo,
  professionalGrowth,
  date,
  stack,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable body scrolling
    } else {
      document.body.style.overflow = 'auto'; // Re-enable body scrolling
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [isOpen]);

  const handleWheel = (event: React.WheelEvent) => {
    event.stopPropagation(); // Prevent the event from propagating to the parent
  };

  if (!isOpen) return null;

  

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 backdrop-blur-md flex justify-center items-start transition-opacity duration-300 ease-in-out"
      style={{ pointerEvents: 'auto' }}
      onWheel={handleWheel}
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

       {/* Prominent GitHub Link */}
       {githubLink && (
          <div className="mb-6">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-green-400 transition duration-300 ease-in-out"
            >
              <FaGithub className="mr-2 h-6 w-6" />
              View on GitHub
            </a>
          </div>
        )}

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

        {/* Dynamic Project Info Section */}
        {projectInfo && projectInfo.length > 0 && projectInfo.map((infoSection, index) => (
          <div key={index} className="mb-8 p-4 bg-[#1b1c1f] rounded-md shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">{infoSection.title}</h3>
            <ul className="list-disc pl-6 space-y-3 text-md text-gray-300 leading-relaxed">
              {infoSection.list.map((item, idx) => (
                <li
                  key={idx}
                  className="p-2 bg-transparent rounded-lg hover:bg-[#2e2e32] transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

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
