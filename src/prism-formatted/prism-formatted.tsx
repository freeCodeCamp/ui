import Prism from "prismjs";
import React, { useRef, useEffect } from "react";

import { enhancePrismAccessibility } from "./utils";

import "./prism-base.css";
import "./prism-light.css";
import "./prism-dark.css";

interface PrismFormattedProps {
	className?: string;
	text: string;
	codeBlockAriaLabel: string;
	useSpan?: boolean;
	noAria?: boolean;
	hasLineNumbers?: boolean;
}

/**
 * PrismFormatted is used to render code blocks with syntax highlighting.
 *
 * ## Usage
 *
 * It is recommended to pass an aria-label to the code block, to help non-sighted users
 * understand what the code block is for and which programming language it is written in.
 *
 * The label can be constructed using the `getCodeLanguageFromString()` util as follows:
 *
 * ```tsx
 * import { PrismFormatted, getCodeLanguageFromString } from '@freecodecamp/ui';
 *
 * const App = () => {
 *   const codeLang = getCodeLanguageFromString(text);
 *
 *   return (
 *     <PrismFormatted text={text} codeBlockAriaLabel={`${codeLang} code example`} />
 *   );
 * }
 * ```
 *
 * To reduce the overhead of creating and passing the label every time `PrismFormatted` is used,
 * you can create a wrapper component as follows:
 *
 * ```tsx
 * import {
 *   PrismFormatted as FccUIPrismFormatted,
 *   getCodeLanguageFromString,
 * } from '@freecodecamp/ui';
 *
 * const PrismFormatted = ({ text }) => {
 *   const codeLang = getCodeLanguageFromString(text);
 *
 *   return (
 *     <FccUIPrismFormatted text={text} codeBlockAriaLabel={`${codeLang} code example`} />
 *   );
 * }
 *
 * const App = () => {
 *   return <PrismFormatted text={text} />
 * }
 * ```
 *
 */
export const PrismFormatted = ({
	className,
	text,
	useSpan,
	noAria,
	codeBlockAriaLabel,
	hasLineNumbers,
}: PrismFormattedProps) => {
	const instructionsRef = useRef<HTMLDivElement>(null);
	const ElementName = useSpan ? "span" : "div";
	let cls;

	if (hasLineNumbers) {
		cls = className ? className.concat(" line-numbers") : "line-numbers";
	}

	if (noAria) {
		text = text.replace(/<pre( [^>]+)?>/, '<pre$1 data-no-aria="true">');
	}

	useEffect(() => {
		// Just in case 'current' has not been created, though it should have been.
		if (instructionsRef.current) {
			Prism.hooks.add("complete", (prismEnv) =>
				enhancePrismAccessibility({ prismEnv, ariaLabel: codeBlockAriaLabel }),
			);
			Prism.highlightAllUnder(instructionsRef.current);
		}
	}, [codeBlockAriaLabel]);

	return (
		<ElementName
			className={cls}
			dangerouslySetInnerHTML={{ __html: text }}
			ref={instructionsRef}
		/>
	);
};
