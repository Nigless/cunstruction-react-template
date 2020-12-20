import React from 'react';
import styled from 'styled-components';
import { PropertiesStyled } from '../../../../properties-interfaces';
import Flex from '../../../flex';
import List from '../../../list';

const Root = styled(Flex)({
	height: 50,
	'*+*': {
		marginLeft: 5,
	},
});

const RightBlock = styled(Flex)({
	flexGrow: 1,
});

const SocialList = styled(List)({
	padding: 0,
	margin: 0,
	listStyle: 'none',
});

export default function Contacts({ className }: PropertiesStyled) {
	return (
		<Root align="center" className={className}>
			<a href="tel:+">+(123) 1234-567-8901</a>
			<a href="mailto:">info@domain.com</a>
			<span>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</span>
			<RightBlock align="center" justify="flex-end">
				<SocialList>
					<a href="#">Twitter</a>
					<a href="#">Facebook</a>
					<a href="#">Linkedin</a>
					<a href="#">Google+</a>
				</SocialList>
			</RightBlock>
		</Root>
	);
}
