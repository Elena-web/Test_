import styled from 'styled-components';
export const SliderButtonsContainer = styled.div`
	position: relative;
	margin-top: -18px;
	padding-left: 78px;
	display: flex;
	gap: 20px;
`
export const SliderButton = styled.button<{
	prev?:boolean
	next?: boolean
  }>`
	width: 50px;
	height: 50px;
	border: 1px solid rgba(66, 86, 122, 0.5);
	border-radius: 50%;
	cursor: pointer;

	&:hover {
	background-color: #fff;
}
  `;
export default SliderButtonsContainer;