import React, { Children, useState } from 'react';
import { PropertiesBasic } from '../../properties-interfaces';
import AccordionContent from './accordion-content';

export default function Accordion(properties: PropertiesBasic): JSX.Element {
	const ClickHandler = (id: number) => {
		state[id] = !state[id];
		setState([...state]);
	};

	const [state, setState] = useState(new Array<boolean>());
	let tmpState: boolean[] = state;
	let { children } = properties;

	let i: number = 0;

	children = Children.map(children, (children: any) => {
		if (tmpState.length === i) tmpState.push(false);
		const Header = children.props.header;
		const Content = children.props.children;

		if (children.type === AccordionContent)
			return (
				<>
					<Header
						active={tmpState[i++]}
						onClick={ClickHandler.bind(this, i - 1)}
					/>
					<Content active={tmpState[i - 1]} />
				</>
			);

		return children;
	});
	if (tmpState !== state) setState(tmpState);

	const { className } = properties;
	return (
		<div
			{...{
				className,
			}}
		>
			{children}
		</div>
	);
}
