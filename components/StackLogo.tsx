import React from 'react';

interface StackLogoProps {
  tech: string;
}

// Normalized tech names for SimpleIcons
const normalizedTechNames: { [key: string]: string } = {
  "React Native": "React",
  "HTML": "Html5",
  "CSS": "Css3",
  "JavaScript": "Javascript",
};

// Techs without logos on SimpleIcons or with custom local logos
const noLogoTechs: string[] = ["Zustand"]; // Add Velo to noLogoTechs

// Custom logos for techs without SimpleIcons logos
const customLogos: { [key: string]: string } = {
  "Velo": "/assets/logos/velo.png",  // Path to the Velo logo in your project
};

const StackLogo: React.FC<StackLogoProps> = ({ tech }) => {
  const normalizedTech = normalizedTechNames[tech] || tech;
  const encodedTech = encodeURIComponent(normalizedTech.replace(/\s+/g, ''));
  const logoUrl = customLogos[tech] || `https://cdn.simpleicons.org/${encodedTech}`;

  return (
    <div className="stack-logo flex flex-col items-center justify-center p-1 transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105">
      {!noLogoTechs.includes(tech) ? (
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
      ) : (
        <span className="h-6 w-6 mb-1 flex items-center justify-center text-xs text-gray-400">
          {tech}
        </span>
      )}
      <span className="text-xs text-gray-400">{tech}</span>
    </div>
  );
};

export default StackLogo;
