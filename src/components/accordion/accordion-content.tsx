import React from 'react';
import {
	PropertiesDynamicCildren,
	PropertiesSwitchable,
} from '../../properties-interfaces';

interface Properties extends PropertiesDynamicCildren<PropertiesSwitchable> {
	header: (properties: {
		active: boolean;
		onClick: (event: any) => void;
	}) => JSX.Element;
}

export default function AccordionContent(properties: Properties): JSX.Element {
	return <></>;
}
