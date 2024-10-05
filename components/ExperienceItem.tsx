import React, { useRef, useCallback } from 'react';

interface ExperienceItemProps {
  title: string;
  description: string;
  date: string;
  stack: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, description, date, stack }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update CSS variables for shine effect
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // Calculate rotation for 3D tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }, []);

  const handleMouseLeave = () => {
    // Reset rotation and cancel any ongoing animation frame
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    const card = cardRef.current;
    if (card) {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <div
      ref={cardRef}
      className="experience-item relative overflow-hidden rounded-lg shadow-lg p-6 mb-8 max-w-lg mx-auto"
      style={{ backgroundColor: '#1b1c1f', pointerEvents: 'auto' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="shine-effect absolute inset-0 pointer-events-none"></div>
      <h3 className="text-xl font-semibold mb-2" style={{ color: '#4FD1C5' }}>{title}</h3>
      <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>{description}</p>
      <p className="text-sm mb-2" style={{ color: '#C4B5FD' }}><strong>Date:</strong> {date}</p>
      <p className="text-sm" style={{ color: '#C4B5FD' }}><strong>Stack:</strong> {stack.join(', ')}</p>
    </div>
  );
};

export default ExperienceItem;
