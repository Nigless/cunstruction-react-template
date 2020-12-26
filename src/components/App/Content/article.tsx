import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { PropertiesStyled } from '../../../properties-interfaces';
import Flex from '../../flex';
import Ratio from '../../ratio';

const Root = styled.article({
	'&:after': {
		content: '""',
		display: 'block',
		height: 18,
		backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath stroke='rgba(0,0,0,0.2)' stroke-linecap='square' stroke-width='.3' d='M1 0L0 1m3-1L0 3m5-3L0 5m7-5L0 7m9-7L0 9m10-8l-9 9m9-7l-7 7m7-5l-5 5m5-3l-3 3m3-1l-1 1'/%3E%3C/svg%3E");`,
		backgroundSize: 35,
		borderBottom: 'solid 2px #ff5f13',
	},
});

const Body = styled.div({
	padding: '20px 30px',
	paddingBottom: 58,
});

const Heading = styled.h3({
	margin: 0,
	marginBottom: 30,
	fontSize: '1.8em',
});

const Button = styled.a({
	color: 'inherit',
	textDecoration: 'none',
	position: 'absolute',
	'&:after': {
		content: '""',
		fontSize: 30,
		display: 'block',
		width: 38,
		height: 38,
		marginLeft: 10,
		backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'%3E%3Cpath stroke='%23000' stroke-width='.1' d='M1 0v2M0 1h2'/%3E%3C/svg%3E")`,
		backgroundSize: 15,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		transition: '.3s',
	},
	'&:hover:after': {
		backgroundColor: '#ff5f13',
		backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'%3E%3Cpath stroke='%23fff' stroke-width='.1' d='M1 0v2M0 1h2'/%3E%3C/svg%3E")`,
	},
});

interface Properties extends PropertiesStyled {
	image: ReactNode;
	label: string;
}

export default function Article(properties: Properties) {
	const { image, label, className } = properties;

	return (
		<Root className={className}>
			<Ratio w={3} h={2}>
				{image}
			</Ratio>
			<Body>
				<Heading>{label}</Heading>
				<Flex align="center">
					<Button href="#">Read More</Button>
				</Flex>
			</Body>
		</Root>
	);
}
