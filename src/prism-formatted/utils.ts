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
};

// Adds region role and accessible name to PrismJS code blocks
export const enhancePrismAccessibility = ({
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
