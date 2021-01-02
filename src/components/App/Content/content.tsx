import React from 'react';
import styled from 'styled-components';
import Container from '../../container';
import Section1 from './Section1/section1';

const Section = styled(Container)({
	marginTop: 183,
});

export default function Content() {
	return (
		<main>
			<Section maxWidth={1200}>
				<Section1 />
			</Section>
		</main>
	);
}
