import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem';

const Timeline: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track which item is hovered

  const experienceData = [
    {
      title: 'Frontend Developer Intern',
      description: 'Developed responsive UI components and collaborated with backend engineers.',
      date: 'Jan 2023 - Jun 2023',
      stack: ['React', 'CSS', 'JavaScript'],
    },
    {
      title: 'Computer Science Degree',
      description: 'Studied core computer science topics with a focus on web development.',
      date: '2020 - 2023',
      stack: ['JavaScript', 'Python', 'HTML', 'CSS'],
    },
    {
      title: 'Freelance Web Developer',
      description: 'Built and maintained websites for small businesses.',
      date: 'Aug 2020 - Present',
      stack: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    },
    {
      title: 'Fullstack Developer Bootcamp',
      description: 'Completed a rigorous bootcamp focusing on MERN stack development.',
      date: '2022',
      stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    },
    {
      title: 'React Native Developer',
      description: 'Developed mobile applications for both iOS and Android using React Native.',
      date: 'Mar 2021 - Aug 2021',
      stack: ['React Native', 'Expo', 'JavaScript'],
    },
  ];

  return (
    <div className="timeline">
      {experienceData.map((exp, index) => (
        <div
          key={index}
          onMouseEnter={() => {
            if (hoveredIndex !== index) {
              setHoveredIndex(index); // Only update the state if index is different
            }
          }}
          onMouseLeave={() => {
            if (hoveredIndex !== null) {
              setHoveredIndex(null); // Reset hover state when mouse leaves
            }
          }}
          className={`timeline-item transition-transform duration-300 ease-in-out ${
            hoveredIndex !== null && hoveredIndex !== index ? 'shrink opacity-50' : ''
          }`}
        >
          <ExperienceItem
            title={exp.title}
            description={exp.description}
            date={exp.date}
            stack={exp.stack}
          />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
