import React, { useEffect, useRef, useState } from 'react';
import ExperienceItem from './ExperienceItem';
import { ExperienceData } from '../types/interfaces'; // Import ExperienceData

interface TimelineProps {
  experiences: ExperienceData[]; // Use the shared ExperienceData interface
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Tracks the current active item
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const experienceItems = document.querySelectorAll('.experience-item-wrapper');
      const middleOfScreen = window.innerHeight / 2;

      let currentActiveIndex = 0;

      // Loop through each experience item and check if it's in the middle of the screen
      experienceItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
      
        // If the center of the item is near the middle of the screen, mark it as active
        if (itemRect.top <= middleOfScreen && itemRect.bottom >= middleOfScreen) {
          currentActiveIndex = index;
        }
      });

      // Update active index to the current one
      setActiveIndex(currentActiveIndex);

      // Update the progress bar's height based on the active index
      if (progressBarRef.current) {
        const isLastItemVisible = experienceItems[experienceItems.length - 1].getBoundingClientRect().top <= middleOfScreen;

        const progressHeight = isLastItemVisible ? 100 : ((currentActiveIndex) / experienceItems.length) * 100;

        progressBarRef.current.style.height = `${progressHeight}%`;
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="timeline-container relative">
      {/* Vertical Progress Bar */}
      <div className="timeline-progress-bar bg-gray-500 w-1 absolute left-0 top-0 h-full">
        <div ref={progressBarRef} className="timeline-progress bg-green-500 w-1 absolute left-0 top-0"></div>
      </div>

      <div className="experience-list relative ml-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`experience-item-wrapper relative flex mb-8 ${
              index <= activeIndex ? 'checked' : ''
            }`} // Add 'checked' class if item is active
          >
            {/* Circle Indicator */}
            <div
              className={`timeline-circle w-4 h-4 rounded-full border-2 ${
                index <= activeIndex ? 'checked' : ''
              }`}
            ></div>

            {/* ExperienceItem */}
            <div className="ml-6">
              <ExperienceItem {...experience} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
