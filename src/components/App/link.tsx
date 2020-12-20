import React from 'react';
import styled from 'styled-components';
import { PropertiesBasic } from '../../properties-interfaces';

const Root = styled.a({
	color: 'inherit',
	textDecoration: 'none',
});

interface Properties extends PropertiesBasic {
	href: string;
}

export default function App({ href, children, className }: Properties) {
	return (
		<Root className={className} href={href}>
			{children}
		</Root>
	);
}
