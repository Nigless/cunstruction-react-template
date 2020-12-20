import React from 'react';
import styled from 'styled-components';
import Container from '../../../container';
import Contacts from './contacts';

const Root = styled.div({
	position: 'relative',
});
const Body = styled(Container)({
	padding: '0 30px',
});
export default function Navigation() {
	return (
		<Root>
			<Body maxWidth={1200}>
				<Contacts />
			</Body>
		</Root>
	);
}
