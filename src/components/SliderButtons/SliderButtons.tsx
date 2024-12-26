import React from 'react';
import { SliderButtonsContainer, SliderButton } from './SliderButtons.style';
export interface ButtonIProps {
	onPrevClick?: (event: React.MouseEvent) => void;
	onNextClick?: (event: React.MouseEvent) => void;
}

const SliderButtons: React.FC<ButtonIProps> = ({ onPrevClick, onNextClick }) => {
	
  return (
	<>
		<SliderButtonsContainer className="slider__btn">
		<SliderButton prev={true} className="previous" onClick={onPrevClick}>
			<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2" />
			</svg>
		</SliderButton>
		<SliderButton next={true} className="next" onClick={onNextClick}>
			<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
			<path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2" />
			</svg>
		</SliderButton>
		</SliderButtonsContainer>
	</>
  );
}

export default SliderButtons;