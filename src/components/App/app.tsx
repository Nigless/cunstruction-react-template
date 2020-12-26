import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Content from './Content/content';
import Header from './Header/header';
import navigation from './Navigation/navigation';

const GlobalStyle = createGlobalStyle({
	body: {
		margin: 0,
		fontSize: 14,
		fontFamily: 'Roboto',
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
			<GlobalStyle />
			<Navigation />
			<Header />
			<Content />
		</>
	);
}
