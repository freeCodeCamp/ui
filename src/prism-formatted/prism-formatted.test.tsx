// Disable these ESLint rules as the tests need to assert the implementation details in DOM nodes
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

import React from "react";
import { render, screen, within } from "@testing-library/react";

import { PrismFormatted } from "./prism-formatted";

const text = `
<p>Foo</p>
<pre><code class="language-js">function favoriteAnimal(animal = 'Giant Panda') {
  return animal + " is my favorite animal!"
}
</code></pre>
<p>Bar</p>`;

const getCodeBlockAriaLabel = (codeName: string) => `${codeName} code example`;

describe("PrismFormatted", () => {
	it("should render a code block with a region role and an aria label if `noAria` is not specified", () => {
		render(
			<PrismFormatted
				getCodeBlockAriaLabel={getCodeBlockAriaLabel}
				text={text}
			/>,
		);

		const codeBlock = screen.getByRole("region", {
			name: "JavaScript code example",
		});

		expect(codeBlock).toBeInTheDocument();
		expect(screen.getByText("Foo")).toBeInTheDocument();
		expect(screen.getByText("Bar")).toBeInTheDocument();

		// We can't test the code content as a whole
		// as PrismJS breaks the code into multiple `span`s in order to apply the styles.
		// Instead, we pick some of the substrings for sanity check.
		expect(within(codeBlock).getByText("function")).toBeInTheDocument();
		expect(within(codeBlock).getByText("favoriteAnimal")).toBeInTheDocument();
		expect(
			within(codeBlock).getByText('" is my favorite animal!"'),
		).toBeInTheDocument();
	});

	it("should not render an aria label if `noAria` is `true`", () => {
		const { container } = render(
			<PrismFormatted
				noAria
				getCodeBlockAriaLabel={getCodeBlockAriaLabel}
				text={text}
			/>,
		);

		const codeBlock = container.getElementsByTagName("pre");

		expect(codeBlock[0]).not.toHaveAttribute("aria-label");
		expect(codeBlock[0]).toHaveAttribute("data-no-aria", "true");
	});

	it("should wrap the content within a `div` if `useSpan` is not specified", () => {
		const { container } = render(
			<PrismFormatted
				getCodeBlockAriaLabel={getCodeBlockAriaLabel}
				text={text}
			/>,
		);

		// React Testing Library renders the component in a div.
		// The element we're interested in is the first child of this div.
		const element = container.children[0].tagName;

		expect(element).toBe("DIV");
	});

	it("should wrap the content within a `span` if `useSpan` is `true`", () => {
		const { container } = render(
			<PrismFormatted
				getCodeBlockAriaLabel={getCodeBlockAriaLabel}
				text={text}
				useSpan
			/>,
		);

		// React Testing Library renders the component in a div.
		// The element we're interested in is the first child of this div.
		const element = container.children[0].tagName;

		expect(element).toBe("SPAN");
	});

	it("should render a code block with line numbers if `hasLineNumbers` is `true`", () => {
		const { container } = render(
			<PrismFormatted
				hasLineNumbers
				getCodeBlockAriaLabel={getCodeBlockAriaLabel}
				text={text}
			/>,
		);

		const codeBlock = screen.getByRole("region", {
			name: "JavaScript code example",
		});

		expect(codeBlock).toHaveClass("line-numbers");

		// If line numbers display is enabled,
		// PrismJS will inject some extra `span`s into the code block,
		// and display line numbers using the pseudo elements of the `span`s (::before).
		// The numbers aren't HTML content, so we can't query them with `getByText()`.
		expect(container.getElementsByClassName("line-numbers-rows")).toBeTruthy();
		expect(container.querySelectorAll(".line-numbers-rows span")).toHaveLength(
			3, // Each `span` is a line number, and the provided code block has 3 lines.
		);
	});

	it("should be rendered within a disclosure element if `isCollapsible` is `true`", () => {
		render(
			<PrismFormatted
				getCodeBlockAriaLabel={getCodeBlockAriaLabel}
				text="<section><pre><code class='language-js'>Foo</code></pre></section>"
				isCollapsible
				disclosureLabel="Code snippet"
			/>,
		);

		const detailsEl = screen.getByRole("group");

		expect(detailsEl).toBeInTheDocument();
		expect(within(detailsEl).getByText("Code snippet")).toBeInTheDocument();
		expect(
			within(detailsEl).getByRole("region", {
				name: "JavaScript code example",
			}),
		).toBeInTheDocument();
	});

	it("should not be rendered within a disclosure element if the text content doesn't have a `pre`", () => {
		render(
			<PrismFormatted
				getCodeBlockAriaLabel={getCodeBlockAriaLabel}
				text="<section><code>Foo</code></section>"
				isCollapsible
				disclosureLabel="Code snippet"
			/>,
		);

		expect(screen.queryByRole("group")).not.toBeInTheDocument();
		expect(screen.queryByText("Code snippet")).not.toBeInTheDocument();
		expect(screen.getByText("Foo")).toBeInTheDocument();
	});

	it("should not be rendered within a disclosure element if the text content doesn't have a `section`", () => {
		render(
			<PrismFormatted
				getCodeBlockAriaLabel={getCodeBlockAriaLabel}
				text="<pre><code class='language-js'>Foo</code></pre>"
				isCollapsible
				disclosureLabel="Code snippet"
			/>,
		);

		expect(screen.queryByRole("group")).not.toBeInTheDocument();
		expect(screen.queryByText("Code snippet")).not.toBeInTheDocument();
		expect(screen.getByText("Foo")).toBeInTheDocument();
	});
});

// ------------------------------
// Type tests
// ------------------------------
// @ts-expect-error - `disclosureLabel` cannot be set if `isCollapsible` is undefined
<PrismFormatted
	getCodeBlockAriaLabel={getCodeBlockAriaLabel}
	text={text}
	disclosureLabel="Example"
/>;

// @ts-expect-error - `disclosureLabel` cannot be set if `isCollapsible` is false
<PrismFormatted
	getCodeBlockAriaLabel={getCodeBlockAriaLabel}
	text={text}
	disclosureLabel="Example"
	isCollapsible={false}
/>;

// @ts-expect-error - `disclosureLabel` is required if `isCollapsible` is true
<PrismFormatted
	getCodeBlockAriaLabel={getCodeBlockAriaLabel}
	text={text}
	isCollapsible
/>;
