import * as React from 'react';
import styled from 'styled-components';
import Ratio from './ratio';

const Div = styled.div({
	position: 'relative',
});

export default function App() {
	return (
		<>
			<Ratio x={2} y={1}>
				<Div />
			</Ratio>
		</>
	);
}
