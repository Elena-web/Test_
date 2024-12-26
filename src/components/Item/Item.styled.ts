import styled from 'styled-components';

export const ItemContainer = styled.div`
	width: 4px;
	height: 4px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #42567A;
	border-radius: 50%;
	cursor: pointer;
	transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
	border: 1px solid transparent;

	&.active,
	&:hover {
		width: 56px;
		height: 56px;
		background-color: #fff;
		border: 1px solid #303E5880;
	}

	& .child {
		display: none;
	}

	&.active .child,
	&:hover .child {
		display: flex;
	}
}
`

export default ItemContainer;