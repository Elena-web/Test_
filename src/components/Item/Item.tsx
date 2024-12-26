import React, { forwardRef } from 'react';
import ItemContainer  from './Item.styled';

const Item = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => (
  <ItemContainer ref={ref} {...props} />
));

export default Item;