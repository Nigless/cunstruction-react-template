import React from 'react';
import styled from 'styled-components';
import { PropertiesStyled } from '../../../../properties-interfaces';
import Flex from '../../../flex';
import List from '../../../list';
import Link from '../../link';

const Root = styled(Flex)({
	height: 50,
	'&>*+*': {
		marginLeft: 45,
	},
});

const RightBlock = styled(Flex)({
	flexGrow: 1,
});

const SocialList = styled(List)({
	padding: 0,
	margin: 0,
	listStyle: 'none',
	'&>*+*': {
		marginLeft: 25,
	},
});

export default function Contacts({ className }: PropertiesStyled) {
	return (
		<Root align="center" className={className}>
			<Link href="tel:+">+(123) 1234-567-8901</Link>
			<Link href="mailto:">info@domain.com</Link>
			<span>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</span>
			<RightBlock align="center" justify="flex-end">
				<SocialList>
					<Link href="#">Twitter</Link>
					<Link href="#">Facebook</Link>
					<Link href="#">Linkedin</Link>
					<Link href="#">Google+</Link>
				</SocialList>
			</RightBlock>
		</Root>
	);
}
