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
      className="experience-item relative overflow-hidden rounded-lg  p-8 mb-12 max-w-lg mx-auto"
      style={{ pointerEvents: 'auto' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="shine-effect absolute inset-0 pointer-events-none"></div>
      
      {/* Title */}
      <h3 className="text-2xl font-extrabold mb-4" style={{ color: '#FFFFFF', letterSpacing: '0.05em' }}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-base mb-6" style={{ color: 'rgba(224, 224, 224, 0.8)', lineHeight: '1.75' }}>
        {description}
      </p>

      {/* Date */}
      <p className="text-sm mb-2" style={{ color: 'rgba(229, 229, 229, 0.6)' }}>
        <strong>Date:</strong> {date}
      </p>

      {/* Stack */}
      <p className="text-sm" style={{ color: 'rgba(229, 229, 229, 0.6)' }}>
        <strong>Stack:</strong> {stack.join(', ')}
      </p>
    </div>
  );
};

export default ExperienceItem;
