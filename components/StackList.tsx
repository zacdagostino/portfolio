import React from 'react';
import StackLogo from './StackLogo';

interface StackListProps {
  technologies: string[];
}

const StackList: React.FC<StackListProps> = ({ technologies }) => {
  return (
    <div className="stack-list-container bg-[#1b1c1f] p-4 rounded-md shadow-sm">
      {/* Stack label */}
      <h4 className="text-sm font-medium text-gray-300 mb-2 tracking-wide">Stack</h4>

      {/* Responsive grid layout with dynamic columns */}
      <div className="stack-list grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-2">
        {technologies.map((tech, index) => (
          <StackLogo key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default StackList;
