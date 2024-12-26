import styled from 'styled-components';

export const ContentContainer = styled.div`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 530px;
	overflow: visible;
	z-index: 2;
		&::before {
		float: left;
		padding-top: 84%;
		content: "";
		}
		&::after {
		display: block;
		content: "";
		clear: both;
		}
`

export const Circle = styled.div`
	border: 1px solid rgb(112, 138, 145, 0.2);
	border-radius: 50%;
	position: absolute;
	width: 530px;
	height: 530px;
	z-index: 0;
`
export const Child = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	color: #42567A;
	display: none;
	justify-content: center;
	align-items: center;
	font-weight: 400;
	font-size: 20px;
`
export default ContentContainer;