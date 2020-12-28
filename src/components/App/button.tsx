import React from 'react';
import styled, { CSSObject } from 'styled-components';
import { PropertiesStyled } from '../../properties-interfaces';
import Flex from '../flex';

const Root = styled.button(
	({ shape, color }: { shape?: 'box'; color?: 'main' }): CSSObject => {
		let colorStyles: CSSObject = {
			color: '#000',
			background: '#eee',
		};

		if (color === 'main')
			colorStyles = {
				...colorStyles,
				color: '#fff',
				background: '#ff5f13',
			};

		let shapeStyles: CSSObject = {
			cursor: 'pointer',
			fontSize: 'inherit',
			fontFamily: 'inherit',
			textDecoration: 'none',
			padding: '0 22px',
			border: 0,
			margin: 0,
			height: 50,
			color: colorStyles.color,
			background: colorStyles.background,
			borderRadius: 5,
			position: 'relative',
			'&:before': {
				content: '""',
				position: 'absolute',
				background: 'rgba(0,0,0,0.1)',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				transformOrigin: 'left',
				transform: 'scale(0,1)',
				transitionDuration: '0.5s',
				transitionProperty: 'transform',
				transitionTimingFunction: 'cubic-bezier(0.5, 1.6, 0.4, 0.7)',
			},
			'&:hover:before': {
				transform: 'scale(1,1)',
			},
		};

		if (shape === 'box')
			shapeStyles = {
				...shapeStyles,
				borderRadius: 0,
				background: '#fff',
				color: '#000',
				transitionDuration: '0.5s',
				'&:before': {
					...shapeStyles['&:before'],
					transform: 'scale(1,0)',
					transformOrigin: 'top',
					background: colorStyles.background,
				},
				'&:hover': {
					color: colorStyles.color,
				},
			};

		return shapeStyles;
	}
);

const Label = styled.span({
	position: 'relative',
	zIndex: 1,
});

interface Properties extends PropertiesStyled {
	label: string;
	href?: string;
	shape?: 'box';
	color?: 'main';
}

export default function Menu({
	label,
	className,
	href,
	shape,
	color,
}: Properties) {
	return (
		<Flex className={className} align="center">
			<Root as={href ? 'a' : undefined} {...{ href, shape, color }}>
				<Label>{label}</Label>
			</Root>
		</Flex>
	);
}
