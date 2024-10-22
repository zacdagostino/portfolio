import React from 'react';
import StackLogo from './StackLogo';

interface StackListProps {
  technologies: string[];
}

const StackList: React.FC<StackListProps> = ({ technologies }) => {
  return (
    <div className="stack-list-container p-4 bg-[#1b1c1f] rounded-md shadow-sm w-max">
      {/* Stack label */}
      <h4 className="text-sm font-medium text-gray-300 mb-2 tracking-wide">Stack</h4>

      {/* Make the stack list flex for horizontal layout and compact spacing */}
      <div className="stack-list flex space-x-5">
        {technologies.map((tech, index) => (
          <StackLogo key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default StackList;
