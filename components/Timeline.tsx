import React from 'react';
import ExperienceItem from './ExperienceItem';

interface TimelineProps {
  experiences: {
    title: string;
    description: string;
    date: string;
    stack: string[];
  }[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="timeline">
      <div className="timeline-line"></div>
      {experiences.map((exp, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-dot"></div>
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
