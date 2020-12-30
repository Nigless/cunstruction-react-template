import { createGlobalStyle, css, CSSObject } from 'styled-components';

export default function fontFace(...fonts: CSSObject[]) {
	return createGlobalStyle`
			${fonts.map((elem) => `@font-face {${css(elem)}}`).join('')}
		`;
}
