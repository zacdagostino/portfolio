import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EducationSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-[#1e1f23] to-[#2b2c31] p-12 rounded-lg shadow-xl mb-12 text-white"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h2 className="text-4xl font-extrabold">Education</h2>
        <p className="text-gray-400 mt-2">Completed June 2023</p>
      </motion.div>

      {/* Overview Paragraph */}
      <motion.p
        className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
      >
        Graduating with a Bachelor of Science majoring in Computer Science and a secondary major in Marketing from the University of Western Australia has allowed me to bridge technical expertise with strategic business insight. This combination has honed my skills in both full-stack development and digital marketing, enabling me to craft innovative solutions that not only perform but also resonate with users.
      </motion.p>

      {/* Major Details */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* Computer Science Major */}
        <motion.div
          className="bg-[#2b2c31] rounded-lg p-6 shadow-md w-full lg:w-1/3 transition-all duration-300 ease-in-out hover:shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Bachelor of Science</h3>
          <p className="text-lg text-green-400">Major: Computer Science</p>
          <p className="text-gray-300 mt-2 leading-relaxed">
            Strong focus on software development, algorithms, data structures, and hands-on experience with full-stack development.
          </p>
        </motion.div>

        {/* Marketing Major */}
        <motion.div
          className="bg-[#2b2c31] rounded-lg p-6 shadow-md w-full lg:w-1/3 transition-all duration-300 ease-in-out hover:shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Secondary Major</h3>
          <p className="text-lg text-pink-400">Major: Marketing</p>
          <p className="text-gray-300 mt-2 leading-relaxed">
            Equipped with skills in consumer behavior, digital marketing, and business strategy, combining technical and creative expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
