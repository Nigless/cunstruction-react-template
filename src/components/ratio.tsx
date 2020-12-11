import React from 'react';
import styled, { CSSObject } from 'styled-components';
import { PropertiesBasic, PropertiesWrapper } from '../properties-interfaces';
import Wrapper from './wrapper';

interface PropertiesRatio {
	x: number;
	y: number;
}

const Root = styled.div(
	({ x, y }: PropertiesRatio): CSSObject => ({
		paddingBottom: `${100 / (x / y)}%`,
		position: 'relative',
	})
);

const Body = styled(Wrapper)({
	'&&': {
		height: '100%',
		left: 0,
		position: 'absolute',
		top: 0,
		width: '100%',
	},
});

interface Properties
	extends PropertiesBasic,
		PropertiesRatio,
		PropertiesWrapper {}

export default function Container(properties: Properties): JSX.Element {
	const { wrap, children, className, x, y } = properties;

	return (
		<Root
			{...{
				className,
				x,
				y,
			}}
		>
			<Body as={wrap}>{children}</Body>
		</Root>
	);
}
