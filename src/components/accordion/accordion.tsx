import React, { Children, useState } from 'react';
import { PropertiesBasic } from '../../properties-interfaces';
import AccordionContent from './accordion-content';

interface Properties extends PropertiesBasic {
	single?: boolean;
}

export default function Accordion(properties: Properties): JSX.Element {
	const [state, setState] = useState(new Array<boolean>());
	const { className, single } = properties;

	const clickHandler = (id: number) => {
		let tmpState = state;
		if (single) {
			tmpState = tmpState.map((elem, i) => (i === id ? !elem : false));
		} else tmpState[id] = !tmpState[id];
		setState([...tmpState]);
	};

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
						onClick={clickHandler.bind(this, i - 1)}
					/>
					<Content active={tmpState[i - 1]} />
				</>
			);

		return children;
	});
	if (tmpState !== state) setState(tmpState);
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
