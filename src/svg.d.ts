declare module '*.svg' {
	const content: (properties: { [key: string]: any }) => JSX.Element;
	export default content;
}
