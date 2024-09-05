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

// Extracts the programming language name from the provided string.
export const getCodeLanguageFromString = (text: string) => {
	const matches = text.match(/(?:class="language-)(\w*)(?:")/);
	const codeType = matches ? matches[1].toLowerCase() : "";
	const codeName = langs[codeType] || "";

	return codeName;
};

// Adds region role and accessible name to PrismJS code blocks
export const enhancePrismAccessibility = ({
	prismEnv,
	ariaLabel,
}: {
	prismEnv: Prism.hooks.ElementHighlightedEnvironment;
	ariaLabel: string;
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

	parent.setAttribute("aria-label", ariaLabel);
};
