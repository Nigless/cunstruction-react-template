import React from 'react';
import styled from 'styled-components';
import { PropertiesStyled } from '../../../../../properties-interfaces';
import Flex from '../../../../flex';
import List from '../../../../list';
import Link from '../../../link';
import IconFacebook from './facebook.icon.svg';
import IconLinkedin from './linkedin.icon.svg';
import IconTelegram from './telegram.icon.svg';
import IconTwitter from './twitter.icon.svg';

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
		marginLeft: 20,
	},
});

const Icon = styled.svg({
	height: '1em',
	fill: 'currentcolor',
	padding: 5,
});

export default function Contacts({ className }: PropertiesStyled) {
	return (
		<Root align="center" className={className}>
			<Link href="tel:+">+(123) 1234-567-8901</Link>
			<Link href="mailto:">info@domain.com</Link>
			<span>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</span>
			<RightBlock align="center" justify="flex-end">
				<SocialList>
					<Link aria-label="Twitter" href="#">
						<Icon as={IconTwitter} />
					</Link>
					<Link aria-label="Facebook" href="#">
						<Icon as={IconFacebook} />
					</Link>
					<Link aria-label="Linkedin" href="#">
						<Icon as={IconLinkedin} />
					</Link>
					<Link aria-label="Telegram" href="#">
						<Icon as={IconTelegram} />
					</Link>
				</SocialList>
			</RightBlock>
		</Root>
	);
}
