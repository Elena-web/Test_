import React, { useEffect, useRef } from 'react';
import { DatesContainer } from '../Dates/Dates.styles';

interface DatesProps {
  datesList: { start: string; end: string }[];
  activeIndex: number;
}

const Dates: React.FC<DatesProps> = ({ datesList, activeIndex }) => {
  const dateDisplayRef = useRef<HTMLDivElement>(null);
  const descriptionBlocksRef = useRef<HTMLDivElement[]>([]);

  const updateDescriptionBlock = (index: number) => {
    const dateDisplay = dateDisplayRef.current;
    const currentDate = datesList[index];

    if (currentDate && dateDisplay) {
      const startDate = parseInt(currentDate.start);
      const endDate = parseInt(currentDate.end);
      const previousDate = index > 0 ? datesList[index - 1] : null;
      const previousEndDate = previousDate ? parseInt(previousDate.end) : startDate;

      animateStartDate(previousEndDate, startDate, endDate);
    }

    descriptionBlocksRef.current.forEach((block, idx) => {
      if (block) {
        block.style.display = idx === index ? 'block' : 'none';
      }
    });
  };

  const animateStartDate = (start: number, end: number, endDisplay: number) => {
    let currentYear = start;
    const step = start < end ? 1 : -1;

    const updateYear = () => {
      if (dateDisplayRef.current) {
        dateDisplayRef.current.innerHTML = `
          <span class="date__start">${currentYear}</span>
          <span class="date__end">${endDisplay}</span>
        `;
      }
      if (currentYear !== end) {
        currentYear += step;
        requestAnimationFrame(updateYear);
      }
    };

    updateYear();
  };

  useEffect(() => {
    updateDescriptionBlock(activeIndex);
  }, [activeIndex]);

  return (
    <DatesContainer ref={dateDisplayRef} className="date-display">
    </DatesContainer>
  );
};

export default Dates;