import React from 'react';

interface StackLogoProps {
  tech: string;
}

const normalizedTechNames: { [key: string]: string } = {
  "React Native": "React",
  "HTML": "Html5",
  "CSS": "Css3",
  "JavaScript": "Javascript",
};

const StackLogo: React.FC<StackLogoProps> = ({ tech }) => {
  const normalizedTech = normalizedTechNames[tech] || tech;
  const encodedTech = encodeURIComponent(normalizedTech.replace(/\s+/g, ''));
  const logoUrl = `https://cdn.simpleicons.org/${encodedTech}`;

  return (
    <div className="stack-logo flex flex-col items-center justify-center p-1 transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105">
      <img
        src={logoUrl}
        alt={`${tech} logo`}
        className="h-6 w-6 mb-1"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement?.appendChild(
            document.createTextNode(tech)
          );
        }}
      />
      <span className="text-xs text-gray-400">{tech}</span>
    </div>
  );
};

export default StackLogo;
