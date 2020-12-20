﻿import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle({
	body: {
		margin: 0,
	},
});

export default function App() {
	return (
		<>
			<GlobalStyle />
		</>
	);
}
