import React from 'react';
import styled from 'styled-components';
import { PropertiesStyled } from '../../../../properties-interfaces';
import Flex from '../../../flex';
import article from './article';
import heading from './heading';
import image from './services1.png';

const Heading = styled(heading)({
	margin: 0,
	marginBottom: 60,
});

const Article = styled(article)({
	flex: 1,
	'&+&': {
		marginLeft: 30,
	},
});

export default function Section1(props: PropertiesStyled) {
	const { className } = props;
	return (
		<section className={className}>
			<Heading as="h2">OUR SERVICES</Heading>
			<Flex>
				<Article image={<img src={image} />} label="Heading" />
				<Article image={<img src={image} />} label="Heading" />
				<Article image={<img src={image} />} label="Heading" />
			</Flex>
		</section>
	);
}
