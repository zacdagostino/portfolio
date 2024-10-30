import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RandomGrid = () => {
  const gridSize = 4; // Initial grid size
  const [columnWidths, setColumnWidths] = useState(Array(gridSize).fill('1fr'));
  const [rowHeights, setRowHeights] = useState(Array(gridSize).fill('1fr'));

  const getRandomWidth = () => (Math.random() > 0.8 ? `${Math.random() * 2 + 0.5}fr` : '0fr'); // Rarer chance for 0fr collapse
  const getRandomHeight = () => (Math.random() > 0.8 ? `${Math.random() * 2 + 0.5}fr` : '0fr'); // Rarer chance for 0fr collapse

  const updateColumnWidth = (index) => {
    setColumnWidths((prevWidths) => {
      const closedCount = prevWidths.filter((width) => width === '0fr').length;
      const newWidth = closedCount >= 2 ? `${Math.random() * 2 + 0.5}fr` : getRandomWidth();

      const newWidths = [...prevWidths];
      newWidths[index] = newWidth;

      return newWidths;
    });
  };

  const updateRowHeight = (index) => {
    setRowHeights((prevHeights) => {
      const closedCount = prevHeights.filter((height) => height === '0fr').length;
      const newHeight = closedCount >= 2 ? `${Math.random() * 2 + 0.5}fr` : getRandomHeight();

      const newHeights = [...prevHeights];
      newHeights[index] = newHeight;

      return newHeights;
    });
  };

  useEffect(() => {
    // Set random intervals for each column to update width
    const columnIntervals = columnWidths.map((_, index) =>
      setInterval(() => {
        updateColumnWidth(index);
      }, Math.random() * 6000 + 5000) // Random interval between 5-11s
    );

    // Set random intervals for each row to update height
    const rowIntervals = rowHeights.map((_, index) =>
      setInterval(() => {
        updateRowHeight(index);
      }, Math.random() * 6000 + 5000) // Random interval between 5-11s
    );

    // Clear intervals on component unmount
    return () => {
      columnIntervals.forEach((interval) => clearInterval(interval));
      rowIntervals.forEach((interval) => clearInterval(interval));
    };
  }, [columnWidths.length, rowHeights.length]);

  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <motion.div
        className="relative w-full h-[90vh] border-4 border-white rounded-[50px] grid"
        style={{
          display: 'grid',
          gridTemplateColumns: columnWidths.map(width => `minmax(0, ${width})`).join(' '),
          gridTemplateRows: rowHeights.map(height => `minmax(0, ${height})`).join(' '),
        }}
        animate={{
          gridTemplateColumns: columnWidths.map(width => `minmax(0, ${width})`).join(' '),
          gridTemplateRows: rowHeights.map(height => `minmax(0, ${height})`).join(' '),
        }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
        }}
      >
        {Array.from({ length: gridSize }).map((_, rowIndex) =>
          columnWidths.map((_, colIndex) => (
            <motion.div
              key={`cell-${rowIndex}-${colIndex}`}
              className={`border border-white flex items-center justify-center transition-all duration-1500
              } ${rowIndex === 0 && colIndex === 0 ? 'bg-blue-500' : ''}`}
              style={{
                transformOrigin: 'left',
                overflow: 'hidden',
              }}
            >
              <p className="text-white">
                Cell {rowIndex + 1}, {colIndex + 1}
              </p>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default RandomGrid;
