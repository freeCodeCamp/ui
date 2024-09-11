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
});
