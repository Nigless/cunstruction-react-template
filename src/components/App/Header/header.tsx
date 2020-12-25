import React from 'react';
import styled, { keyframes } from 'styled-components';
import Flex from '../../flex';
import image from './header.webp';

const Root = styled(Flex)({
	height: '100vh',
	backgroundImage: `linear-gradient(0deg, rgba(2,8,52,0.74902) 0%, rgba(2,8,52,0.14902) 100%),url(${image})`,
	backgroundPosition: 'center',
});

const H1 = styled.h1({
	textTransform: 'uppercase',
	fontSize: '8em',
	color: '#ff5f13',
	fontWeight: 900,
});

const Title2 = styled.div({
	marginLeft: 100,
	lineHeight: 0.4,
});

const Stroked = styled.span({
	color: 'transparent',
	WebkitTextStroke: '1px #fff',
});

let Cliped = styled.span({
	position: 'absolute',
	animationDuration: '4s',
	animationTimingFunction: 'ease-in-out',
	animationIterationCount: 'infinite',
});

// <Kludge>
Cliped = styled(Cliped)`
	animation-name: ${keyframes({
		'0%, 100%': {
			clipPath:
				'polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 69%, 100% 52%, 100% 140%, 0% 140%)',
		},
		'50%': {
			clipPath:
				'polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 140%, 0% 140%)',
		},
	})};
`;
// </Kludge>

export default function Title() {
	const title1 = 'advansed';
	const title2 = 'construction';

	return (
		<Root wrap="header" align="center" justify="center">
			<H1>
				{title1}
				<Title2>
					<Cliped>{title2}</Cliped>
					<Stroked>{title2}</Stroked>
				</Title2>
			</H1>
		</Root>
	);
}
