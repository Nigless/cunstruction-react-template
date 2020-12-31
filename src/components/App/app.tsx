import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import fontFace from '../../utils/font-face';
import Content from './Content/content';
import barlowFontExtraBold from './fonts/Barlow-ExtraBold.ttf';
import barlowFontMedium from './fonts/Barlow-Medium.ttf';
import barlowFontRegular from './fonts/Barlow-Regular.ttf';
import Header from './Header/header';
import navigation from './Navigation/navigation';

const Fonts = fontFace(
	{
		fontFamily: 'Barlow',
		src: `url(${barlowFontRegular}) format("truetype")`,
	},
	{
		fontFamily: 'Barlow',
		src: `url(${barlowFontMedium}) format("truetype")`,
		fontWeight: 500,
	},
	{
		fontFamily: 'Barlow',
		src: `url(${barlowFontExtraBold}) format("truetype")`,
		fontWeight: 900,
	}
);

const GlobalStyle = createGlobalStyle({
	body: {
		margin: 0,
		fontSize: 14,
		fontFamily: 'Barlow',
	},
});

const Navigation = styled(navigation)({
	position: 'absolute',
	left: 0,
	right: 0,
});

export default function App() {
	return (
		<>
			<Fonts />
			<GlobalStyle />

			<Navigation />
			<Header />
			<Content />
		</>
	);
}
