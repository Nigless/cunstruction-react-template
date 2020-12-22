﻿import React from 'react';
import styled from 'styled-components';
import Container from '../../../container';
import Contacts from './Contacts/contacts';
import Menu from './Menu/menu';

const Root = styled.div({
	position: 'relative',
});

const Body = styled(Container)({
	padding: '0 30px',
});

const Hr = styled.hr({
	position: 'absolute',
	left: 0,
	right: 0,
	margin: 0,
	border: 'solid 1px #000',
	borderBottom: 0,
});

export default function Navigation() {
	return (
		<Root>
			<Body maxWidth={1200}>
				<Contacts />
				<Hr />
				<Menu />
			</Body>
		</Root>
	);
}
