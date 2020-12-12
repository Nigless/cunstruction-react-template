import { cloneElement, createElement, ReactElement } from 'react';
import { PropertiesBasic } from '../properties-interfaces';

export default function Wrapper(properties: PropertiesBasic): JSX.Element {
	const { className, children } = properties;

	const elementProperties = { className };

	return !Array.isArray(children) && children
		? cloneElement(children as ReactElement, elementProperties)
		: createElement('div', elementProperties, children);
}
