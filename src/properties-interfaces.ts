import { ReactNode } from 'react';

interface PropertiesParent {
	readonly children?: ReactNode;
}

interface PropertiesSlyled {
	readonly className?: string;
}

interface PropertiesWrapper {
	readonly wrap?: string | React.ComponentType<any>;
}

interface PropertiesSwitchable {
	readonly active?: boolean;
}

interface PropertiesDynamicCildren<Type> {
	readonly children: (properties: Type) => JSX.Element;
}

interface PropertiesBasic extends PropertiesParent, PropertiesSlyled {}

export type {
	PropertiesSwitchable,
	PropertiesParent,
	PropertiesDynamicCildren,
	PropertiesSlyled,
	PropertiesBasic,
	PropertiesWrapper,
};
