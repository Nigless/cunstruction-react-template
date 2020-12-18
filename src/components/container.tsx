import React from 'react';
import styled from 'styled-components';
import { PropertiesBasic, PropertiesWrapper } from '../properties-interfaces';
import Wrapper from './wrapper';

interface PropertiesWidth {
	width?: string | number;
	maxWidth?: string | number;
}

const Root = styled.div(({ width, maxWidth }: PropertiesWidth) => ({
	margin: 'auto',
	maxWidth,
	width,
}));

interface Properties
	extends PropertiesBasic,
		PropertiesWrapper,
		PropertiesWidth {}

export default function Container(properties: Properties): JSX.Element {
	const { className, children, width, maxWidth, wrap } = properties;

	return (
		<Root
			{...{
				as: wrap || Wrapper,
				className,
				maxWidth,
				width,
			}}
		>
			{children}
		</Root>
	);
}
