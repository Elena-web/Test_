import React from 'react';
import { Wrap, Line, TitleMain } from './App.styles';
import Track from './Track/Track';
import { GlobalStyle } from '../app/styles/GlobalStyle.styles';
export interface Line {
	horizontal?: boolean
	$transform: string
	$width: string
	$height: string
}

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Wrap>
				<Line horizontal={true} $transform="translateY(-50%)" $width="100%" $height="1px" />
				<Line horizontal={false} $transform="translateX(-50%)" $width="1px" $height="100%" />
				<TitleMain>Исторические даты</TitleMain>
				<Track />
			</Wrap>
		</>
	);
};

export default App;