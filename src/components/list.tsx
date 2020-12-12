import React, { Children, createElement } from 'react';
import { PropertiesBasic } from '../properties-interfaces';

interface Properties extends PropertiesBasic {
	ordered: boolean;
}

export default function List(properties: Properties): JSX.Element {
	const { children, className, ordered } = properties;

	return createElement(
		ordered ? 'ol' : 'ul',
		{ className },
		Children.map(children, (child) => <li>{child}</li>)
	);
}
List.defaultProps = {
	ordered: false,
};
