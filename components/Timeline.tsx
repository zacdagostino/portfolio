import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem';

const Timeline: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        title: 'Computer Science Degree',
        description: 'Studied core computer science topics with a focus on web development.',
        date: '2020 - 2023',
        stack: ['JavaScript', 'Python', 'HTML', 'CSS'],
      },
      {
      title: 'Computer Science Degree',
      description: 'Studied core computer science topics with a focus on web development.',
      date: '2020 - 2023',
      stack: ['JavaScript', 'Python', 'HTML', 'CSS'],
    },
    {
        title: 'Computer Science Degree',
        description: 'Studied core computer science topics with a focus on web development.',
        date: '2020 - 2023',
        stack: ['JavaScript', 'Python', 'HTML', 'CSS'],
      },
    // Add more entries as needed
  ];

  return (
    <div className="timeline">
      {experienceData.map((exp, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`timeline-item transition-transform duration-300 ease-in-out ${
            hoveredIndex !== null && hoveredIndex !== index
              ? 'shrink opacity-50'  // Shrink and reduce opacity for non-hovered items
              : ''
          }`}
        >
          <ExperienceItem {...exp} />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
