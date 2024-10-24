import React, { useRef } from 'react';
import { useInView } from 'framer-motion'; // Import the hook
import { FaCode, FaDatabase, FaPaintBrush, FaCogs, FaServer, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SkillItem from './SkillItem'; // Import the new SkillItem component

const SkillsSection: React.FC = () => {
  const ref = useRef(null); // Ref for the section
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // Trigger animation each time it's in view

  return (
    <section
      ref={ref} // Attach the ref to the section
      className="skills-section bg-gradient-to-r from-[#1e1f23] to-[#2b2c31] p-12 rounded-lg shadow-xl mb-12"
    >
      <motion.h2
        className="text-4xl font-extrabold text-white text-center mb-12"
        initial={{ opacity: 1, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Frontend Development */}
        <SkillItem
          icon={<FaCode className="h-8 w-8" />}
          title="Frontend Development"
          skills={[
            'JavaScript (ES6+), TypeScript',
            'React.js, Next.js',
            'HTML5, CSS3, SASS',
            'Tailwind CSS, Bootstrap',
            'Responsive & Mobile-First Design',
            'Web Performance Optimization',
          ]}
          delay={0}
          gradientColor="#4ADE80" 
        />

        {/* Backend Development */}
        <SkillItem
          icon={<FaServer className="h-8 w-8" />}
          title="Backend Development"
          skills={[
            'Node.js, Express.js',
            'Python (Flask, Django)',
            'RESTful APIs, GraphQL',
            'Authentication (JWT, OAuth)',
            'Socket.io (Real-Time Data)',
            'API Integration & Microservices',
          ]}
          delay={0.1}
          gradientColor="#60A5FA"
        />

        {/* Design & UI/UX */}
        <SkillItem
          icon={<FaPaintBrush className="h-8 w-8" />}
          title="Design & UI/UX"
          skills={[
            'Figma, Adobe XD',
            'Prototyping & Wireframing',
            'UI/UX Principles',
            'Responsive Design',
            'Interaction Design',
            'Color Theory & Typography',
          ]}
          delay={0.2}
          gradientColor="#F472B6"
        />

        {/* DevOps & Tools */}
        <SkillItem
          icon={<FaCogs className="h-8 w-8" />}
          title="DevOps & Tools"
          skills={[
            'Git & GitHub',
            'CI/CD Pipelines (GitHub Actions, Jenkins)',
            'Docker, Kubernetes',
            'Cloud Platforms (AWS, Vercel, Heroku)',
            'Testing (Jest, Mocha, Cypress)',
            'Containerization & Deployment',
          ]}
          delay={0.3}
          gradientColor="#FACC15"
        />

        {/* Databases & Storage */}
        <SkillItem
          icon={<FaDatabase className="h-8 w-8" />}
          title="Databases & Storage"
          skills={[
            'SQL (MySQL, PostgreSQL)',
            'NoSQL (MongoDB, Redis)',
            'ORMs (Prisma, Sequelize, Mongoose)',
            'Database Design & Optimization',
            'Data Security & Encryption',
            'Database Migration & Management',
          ]}
          delay={0.4}
          gradientColor="#F87171"
        />

        {/* Other Skills */}
        <SkillItem
          icon={<FaTools className="h-8 w-8" />}
          title="Other Skills"
          skills={[
            'Agile Methodologies (Scrum, Kanban)',
            'Version Control (Git)',
            'Debugging & Problem Solving',
            'API Design & Development',
            'Unit Testing & Integration Testing',
            'Cross-Browser Compatibility',
          ]}
          delay={0.5}
          gradientColor="#C084FC"
        />
      </div>
    </section>
  );
};

export default SkillsSection;
