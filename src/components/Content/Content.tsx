import React, { useEffect, useState } from 'react';
import { ContentContainer, Circle, Child } from './Content.styles';
import Item from '../Item/Item.styled';

interface ContentProps {
  itemRefs: React.RefObject<(HTMLDivElement | null)[]>; 
}

const Content: React.FC<ContentProps> = ({ itemRefs }) => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const [activeIndex, setActiveIndex] = useState(0); 

  useEffect(() => {
    itemRefs.current[activeIndex]?.classList.add('active');
  }, [activeIndex, itemRefs]);

  const handleItemClick = (index: number) => {
    if (itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex]?.classList.remove('active');
    }
    setActiveIndex(index);
    if (itemRefs.current[index]) {
      itemRefs.current[index]?.classList.add('active');
    }
  };

  return (
    <ContentContainer>
      <Circle />
      {numbers.map((num, index) => (
        <Item
          key={num}
          ref={el => {
            if (el) itemRefs.current[index] = el;
          }}
          onClick={() => handleItemClick(index)}
          className={activeIndex === index ? 'active' : ''}
        >
          <Child className="child">{num}</Child>
        </Item>
      ))}
    </ContentContainer>
  );
};

export default Content;