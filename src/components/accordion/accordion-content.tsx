import React from 'react';
import {
	PropertiesDynamicChildren,
	PropertiesSwitchable,
} from '../../properties-interfaces';

interface Properties extends PropertiesDynamicChildren<PropertiesSwitchable> {
	header: (properties: {
		active: boolean;
		onClick: (event: any) => void;
	}) => JSX.Element;
}

export default function AccordionContent(properties: Properties): JSX.Element {
	return <></>;
}
