import { ReactNode } from 'react';

interface PropertiesParent {
	children?: ReactNode;
}

interface PropertiesSlyled {
	className?: string;
}

interface PropertiesWrapper {
	wrap?: string | React.ComponentType<any>;
}

interface PropertiesBasic extends PropertiesParent, PropertiesSlyled {}

export type {
	PropertiesParent,
	PropertiesSlyled,
	PropertiesBasic,
	PropertiesWrapper,
};
