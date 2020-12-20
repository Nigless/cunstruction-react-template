import React from 'react';
import styled from 'styled-components';
import Container from '../../../container';
import Contacts from './contacts';

const Root = styled.div({
	position: 'relative',
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
