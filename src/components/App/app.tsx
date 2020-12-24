import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header/header';
import Navigation from './Navigation/navigation';

const GlobalStyle = createGlobalStyle({
	body: {
		margin: 0,
		fontSize: 14,
	},
});

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Navigation />
			<Header />
		</>
	);
}
