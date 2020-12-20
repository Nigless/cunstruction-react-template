import React from 'react';
import styled from 'styled-components';
import Container from '../../../container';
import Contacts from './contacts';

const Root = styled.div({
	position: 'relative',
});

const Hr = styled.hr({
	position: 'absolute',
	left: 0,
	right: 0,
	margin: 0,
});

export default function Navigation() {
	return (
		<Root>
			<Container maxWidth={1200}>
				<Contacts />
			</Container>
		</Root>
	);
}
