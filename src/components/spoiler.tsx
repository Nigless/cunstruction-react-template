import React, { useState } from 'react';
import {
	PropertiesDynamicChildren,
	PropertiesStyled,
	PropertiesSwitchable,
} from '../properties-interfaces';

interface Properties
	extends PropertiesStyled,
		PropertiesDynamicChildren<PropertiesSwitchable> {
	header: (properties: {
		active: boolean;
		onClick: (event: any) => void;
	}) => JSX.Element;
}

export default function Spoiler(properties: Properties): JSX.Element {
	const clickHandler = () => setState(!state);

	const [state, setState] = useState(false);

	const { children, className, header } = properties;
	const Header = header;
	const Content = children;

	return (
		<div className={className}>
			<Header active={state} onClick={clickHandler.bind(this)} />
			<Content active={state} />
		</div>
	);
}
