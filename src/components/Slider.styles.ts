import styled from 'styled-components';
import arrowNext from '../assets/icons/arrow-next.svg';
import arrowPrev from '../assets/icons/arrow-prev.svg';
export const SliderContainer = styled.div`
	margin-top: 60px;
	position: relative;
	padding-bottom: 105px;

	.swiper {
	display: block;
	width: 100%;
    height: 100%;
}

.swiper-wrapper {
	display: flex;
	justify-content: start;
	gap: 60px;
	max-width: 1280px;
	padding-left: 78px;
	z-index: 0;
}

.swiper-slide {
	display: flex;
	flex-direction: column;
	justify-content: start;
	height: auto;
	max-width: 26%;
}

.swiper-slide h6 {
	font-family: "Bebas Neue", serif;
	color: #3877EE;
	font-weight: 400;
	font-size: 25px;
	line-height: 1.2;
	margin-bottom: 12px;
	margin-top: 0;
}

.swiper-slide p {
	gap: 15px;
	color: #42567A;
	font-weight: 400;
	font-size: 20px;
	line-height: 1.5;
	font-family: "PT Sans", serif;
}

.swiper-button-next,
.swiper-button-prev {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	padding: 0;
	opacity: 1;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background-color: #fff;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	z-index: 100;
	background-image: url(${arrowNext});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}

.swiper-button-next {
	background-image: url(${arrowNext});
	background-size: 20%;
  right: 15px; 
}

.swiper-button-prev {
  	background-image: url(${arrowPrev});
	background-size: 20%;
  	left: 15px;
}

.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  	opacity: 0; 
}
	
.swiper-button-prev:after,
.swiper-button-next:after {
    display: none;
}
`
export default SliderContainer;