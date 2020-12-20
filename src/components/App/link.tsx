import React from 'react';
import styled from 'styled-components';
import { PropertiesBasic } from '../../properties-interfaces';

const Root = styled.a({
	color: 'inherit',
	textDecoration: 'none',
});

interface Properties extends PropertiesBasic {
	href: string;
	ariaLabel?: string;
}

export default function App(properties: Properties) {
	const { href, children, className, ariaLabel } = properties;

	return (
		<Root
			{...{
				className,
				href,
				ariaLabel,
			}}
		>
			{children}
		</Root>
	);
}
