import React from 'react';
import styled from 'styled-components';
import Container from '../../container';
import Flex from '../../flex';
import article from './article';
import Heading from './heading';
import image from './servicess1.png';

const Article = styled(article)({
	flexGrow: 1,
	'&+&': {
		marginLeft: 30,
	},
});

export default function Content() {
	return (
		<main>
			<Container wrap="section" maxWidth={1200}>
				<Heading as="h2">OUR SERVICES</Heading>
				<Flex>
					<Article image={<img src={image} />} label="Heading" />
					<Article image={<img src={image} />} label="Heading" />
					<Article image={<img src={image} />} label="Heading" />
				</Flex>
			</Container>
		</main>
	);
}
