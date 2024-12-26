import React from 'react';
import { DescriptionsContainer, TitleContainer } from './Descriptions.slyles';

interface DescriptionsProps {
	activeIndex: number;
}

const Descriptions: React.FC<DescriptionsProps> = ({ activeIndex }) => {
	const titles = ['Музыка', 'Кино', 'Опера', 'Балет', 'Театр', 'Наука'];
	
	return (
		<DescriptionsContainer>
			{titles.map((title, index) => (
				<TitleContainer key={title} className={`title ${index === activeIndex ? 'active' : ''}`}>
				{title}
				</TitleContainer>
			))}
    	</DescriptionsContainer>
	);
}

export default Descriptions;