import React from 'react';
import styled from 'styled-components';
import Flex from '../../../flex';
import list from '../../../list';
import button from '../../button';
import logo from './logo.icon.svg';

const Logo = styled(logo)({
	height: 50,
	fill: 'currentcolor',
});

const Root = styled(Flex)({
	height: 100,
});

const Link = styled.a({
	padding: 10,
	color: 'inherit',
	textDecoration: 'none',
});

const List = styled(list)({
	listStyle: 'none',
	flexGrow: 1,
	margin: 0,
	padding: 0,
	'&>*+*': {
		marginLeft: 20,
	},
});

const Button = styled(button)({
	marginLeft: 50,
});

export default function Menu() {
	return (
		<Root align="center" justify="space-between" wrap="nav">
			<Logo />
			<Flex justify="flex-end">
				<List>
					<Link href="#">Home</Link>
					<Link href="#">About</Link>
					<Link href="#">Projects</Link>
					<Link href="#">Services</Link>
					<Link href="#">Blog</Link>
					<Link href="#">Pages</Link>
					<Link href="#">Contact</Link>
				</List>
			</Flex>
			<Button label="Contact now" color="primary" href="#" />
		</Root>
	);
}
