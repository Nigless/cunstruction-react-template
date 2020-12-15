import { ReactNode } from 'react';

interface PropertiesParent {
	readonly children?: ReactNode;
}

interface PropertiesStyled {
	readonly className?: string;
}

interface PropertiesWrapper {
	readonly wrap?: string | React.ComponentType<any>;
}

interface PropertiesSwitchable {
	readonly active?: boolean;
}

interface PropertiesDynamicChildren<Type> {
	readonly children: (properties: Type) => JSX.Element;
}

interface PropertiesBasic extends PropertiesParent, PropertiesStyled {}

export type {
	PropertiesSwitchable,
	PropertiesParent,
	PropertiesDynamicChildren,
	PropertiesStyled,
	PropertiesBasic,
	PropertiesWrapper,
};
