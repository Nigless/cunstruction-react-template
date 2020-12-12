import React, { Children, createElement } from 'react';
import { PropertiesBasic } from '../properties-interfaces';

interface Properties extends PropertiesBasic {
	type?: 'a' | 'i' | '1' | 'A' | 'I';
}

export default function List(properties: Properties): JSX.Element {
	const { children, className, type } = properties;
	return createElement(
		type ? 'ol' : 'ul',
		{ className, type },
		Children.map(children, (child) => <li>{child}</li>)
	);
}
