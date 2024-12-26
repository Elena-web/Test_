import styled from 'styled-components';
import { colors } from '../app/styles/colors';

export const Wrap = styled.div`
	position: relative;
    margin: 0 160px 0 320px;
    padding: 160px 0 0;
    max-width: 1440px;
    height: 1080px;
    border-left: 1px solid rgba(66, 86, 122, .2);
    border-right: 1px solid rgba(66, 86, 122, .2);
`
export const Line = styled.div.withConfig({
	shouldForwardProp: (prop) => !['horizontal'].includes(prop),
  })<{
	horizontal?: boolean;
	$transform: string;
	$width: string;
	$height: string;
  }>`
	position: absolute;
	background-color: rgba(66, 86, 122, 1);
	opacity: 0.2;
	z-index: 1;
	top: ${props => (props.horizontal ? '50%' : '0')};
	left: ${props => (props.horizontal ? '0' : '50%')};
	transform: ${props => props.$transform};
	width: ${props => props.$width};
	height: ${props => props.$height};
  `;

export const TitleMain = styled.h1`
	padding-left: 78px;
	position: relative;
	width: 30%;
	font-family: "PT Sans", serif;
	font-size: 56px;
	font-weight: 700;
	color: rgba(66, 86, 122, 0.9);

  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 0;
    width: 5px;
    height: 120px;
    background: linear-gradient(${colors.blue}, ${colors.pink});
`
