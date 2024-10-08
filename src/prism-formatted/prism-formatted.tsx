import Prism from "prismjs";
import React, { useRef, useEffect } from "react";

import type { PrismFormattedProps } from "./types";

import "./prism-base.css";
import "./prism-light.css";
import "./prism-dark.css";

const langs: { [key: string]: string } = {
	js: "JavaScript",
	javascript: "JavaScript",
	css: "CSS",
	html: "HTML",
	python: "python",
	py: "python",
	xml: "XML",
	jsx: "JSX",
	scss: "SCSS",
	sql: "SQL",
	http: "HTTP",
	json: "JSON",
	pug: "pug",
	ts: "TypeScript",
	typescript: "TypeScript",
};

// Adds region role and accessible name to PrismJS code blocks
const enhancePrismAccessibility = ({
	prismEnv,
	getCodeBlockAriaLabel,
}: {
	prismEnv: Prism.hooks.ElementHighlightedEnvironment;
	getCodeBlockAriaLabel: (codeName: string) => string;
}): void => {
	const parent = prismEnv?.element?.parentElement;

	if (
		!parent ||
		parent.nodeName !== "PRE" ||
		parent.tabIndex !== 0 ||
		parent.dataset.noAria === "true"
	) {
		return;
	}

	parent.setAttribute("role", "region");

	const codeType = prismEnv.element?.className
		.replace(/language-(.*)/, "$1")
		.toLowerCase();

	const codeName = langs[codeType] || "";
	const ariaLabel = getCodeBlockAriaLabel(codeName);

	parent.setAttribute("aria-label", ariaLabel);
};

// Make PrismJS code blocks collapsible
const makePrismCollapsible = ({
	prismEnv,
	disclosureLabel,
}: {
	prismEnv: Prism.hooks.ElementHighlightedEnvironment;
	disclosureLabel: string;
}) => {
	const preElem = prismEnv?.element?.parentElement;
	const sectionElem = preElem?.parentElement;
	if (
		!preElem ||
		preElem.nodeName !== "PRE" ||
		preElem.tabIndex !== 0 ||
		!sectionElem ||
		sectionElem.nodeName !== "SECTION"
	) {
		return;
	}

	const details = document.createElement("details");
	details.classList.add("font-bold", "mb-[0.6rem]");

	const summary = document.createElement("summary");
	summary.classList.add("cursor-pointer", "text-foreground-primary");
	summary.innerHTML = disclosureLabel;

	details.appendChild(summary);
	details.appendChild(preElem.cloneNode(true));
	details.open = true;

	sectionElem.replaceChild(details, preElem);
};

// `p` element has some bottom margin set by the global stylesheet (base.css).
// This margin increases the height of the entire label, making it misaligned with the radio icon.
// To address that, we remove the margin from the last `p`.
const defaultClasses = ["[&>p:last-child]:m-0"];

/**
 * PrismFormatted is used to render code blocks with syntax highlighting.
 *
 * ## Usage
 *
 * It is recommended to pass an aria-label to the code block, to help non-sighted users
 * understand what the code block is for and which programming language it is written in.
 *
 * The label can be constructed by passing a callback function to the `getCodeBlockAriaLabel` prop as follows:
 *
 * ```tsx
 * import { PrismFormatted } from '@freecodecamp/ui';
 *
 * const App = () => {
 *   return (
 *     <PrismFormatted text={text} getCodeBlockAriaLabel={codeName => `${codeName} code example`} />
 *   );
 * }
 * ```
 *
 * To reduce the overhead of creating and passing the label every time `PrismFormatted` is used,
 * you can create a wrapper component as follows:
 *
 * ```tsx
 * import { PrismFormatted as FccUIPrismFormatted } from '@freecodecamp/ui';
 *
 * const PrismFormatted = ({ text }) => {
 *   return (
 *     <FccUIPrismFormatted text={text} getCodeBlockAriaLabel={codeName => `${codeName} code example`} />
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
	getCodeBlockAriaLabel,
	hasLineNumbers,
	isCollapsible,
	disclosureLabel,
}: PrismFormattedProps) => {
	const instructionsRef = useRef<HTMLDivElement>(null);
	const ElementName = useSpan ? "span" : "div";
	const cls = className ? [...defaultClasses, className] : [...defaultClasses];

	if (hasLineNumbers) {
		cls.push("line-numbers");
	}

	if (noAria) {
		text = text.replace(/<pre( [^>]+)?>/, '<pre$1 data-no-aria="true">');
	}

	useEffect(() => {
		// Just in case 'current' has not been created, though it should have been.
		if (instructionsRef.current) {
			Prism.hooks.add("complete", (prismEnv) =>
				enhancePrismAccessibility({
					prismEnv,
					getCodeBlockAriaLabel,
				}),
			);

			if (isCollapsible && disclosureLabel) {
				Prism.hooks.add("complete", (prismEnv) =>
					makePrismCollapsible({
						prismEnv,
						disclosureLabel,
					}),
				);
			}

			Prism.highlightAllUnder(instructionsRef.current);
		}
	}, [getCodeBlockAriaLabel, isCollapsible, disclosureLabel]);

	return (
		<ElementName
			className={cls.join(" ")}
			dangerouslySetInnerHTML={{ __html: text }}
			ref={instructionsRef}
		/>
	);
};
