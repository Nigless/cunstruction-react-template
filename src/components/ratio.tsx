import React from 'react';
import styled, { CSSObject } from 'styled-components';
import { PropertiesBasic, PropertiesWrapper } from '../properties-interfaces';
import Wrapper from './wrapper';

interface PropertiesRatio {
	w: number;
	h: number;
}

const Root = styled.div(
	({ w, h }: PropertiesRatio): CSSObject => ({
		paddingBottom: `${100 / (w / h)}%`,
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

export default function Ratio(properties: Properties): JSX.Element {
	const { wrap, children, className, w, h } = properties;

	return (
		<Root
			{...{
				className,
				w,
				h,
			}}
		>
			<Body as={wrap}>{children}</Body>
		</Root>
	);
}
