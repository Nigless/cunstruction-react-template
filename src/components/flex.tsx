import React from 'react';
import styled, { CSSObject } from 'styled-components';
import { PropertiesBasic, PropertiesWrapper } from '../properties-interfaces';
import Wrapper from './wrapper';

interface PropertiesFlex {
	justify?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
	align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
}

const Root = styled.div(
	({ align, justify }: PropertiesFlex): CSSObject => ({
		alignItems: align,
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: justify,
	})
);

export interface Properties
	extends PropertiesBasic,
		PropertiesWrapper,
		PropertiesFlex {}

export default function Flex({
	className,
	justify,
	align,
	children,
	wrap,
}: Properties): JSX.Element {
	return (
		<Root
			{...{
				align,
				as: wrap || Wrapper,
				className,
				justify,
			}}
		>
			{children}
		</Root>
	);
}
