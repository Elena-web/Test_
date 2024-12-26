import styled from 'styled-components';

export const DatesContainer = styled.div`
    position: absolute;
    top: 120px;
    right: -220px;
    font-size: 200px;
    font-weight: 700;
    line-height: 1.25;
	letter-spacing: .8px;
    color: #9DBEFD;
    display: flex;
    align-items: center;
	z-index: 1;

	.date__start {
    margin-right: 80px;
    color: #3877EE;
	}

	.date__end {
    color: #EF5DA8;
	}
`

export default DatesContainer;