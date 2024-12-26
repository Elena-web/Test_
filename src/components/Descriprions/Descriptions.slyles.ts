import styled from 'styled-components';

export const DescriptionsContainer = styled.div`

`;

export const TitleContainer = styled.div`
	position: absolute;
	top: 15px;
	right: -10px;
	transform: translateX(-50%);
	width: fit-content;
	height: auto;
	opacity: 0;
	font-size: 20px;
	font-weight: 700;
	color: #42567A;
	&.active {
		opacity: 1;
	}
`