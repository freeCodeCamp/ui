import React from "react";
import { render, screen } from "@testing-library/react";

import { Callout } from "./callout";

describe("<Callout />", () => {
	it("should render children correctly", () => {
		render(<Callout variant="note">Hello World</Callout>);

		expect(screen.getByText("Hello World")).toBeInTheDocument();
	});

	it("should have a vertical bar with border-l-4 class", () => {
		const { container } = render(
			<Callout variant="note">Test content</Callout>,
		);
		// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
		const callout = container.querySelector("div");

		expect(callout).toHaveClass("border-l-4");
	});

	it("should apply tip variant border color", () => {
		const { container } = render(<Callout variant="tip">Tip message</Callout>);
		// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
		const callout = container.querySelector("div");

		expect(callout).toHaveClass("border-l-green-700");
	});

	it("should apply note variant border color", () => {
		const { container } = render(
			<Callout variant="note">Note message</Callout>,
		);
		// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
		const callout = container.querySelector("div");

		expect(callout).toHaveClass("border-l-blue-700");
	});

	it("should apply warning variant border color", () => {
		const { container } = render(
			<Callout variant="warning">Warning message</Callout>,
		);
		// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
		const callout = container.querySelector("div");

		expect(callout).toHaveClass("border-l-yellow-700");
	});

	it("should apply caution variant border color", () => {
		const { container } = render(
			<Callout variant="caution">Caution message</Callout>,
		);
		// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
		const callout = container.querySelector("div");

		expect(callout).toHaveClass("border-l-red-700");
	});

	it("should display 'Tip' label for tip variant", () => {
		render(<Callout variant="tip">Tip message</Callout>);

		expect(screen.getByText("Tip")).toBeInTheDocument();
	});

	it("should display 'Note' label for note variant", () => {
		render(<Callout variant="note">Note message</Callout>);

		expect(screen.getByText("Note")).toBeInTheDocument();
	});

	it("should display 'Warning' label for warning variant", () => {
		render(<Callout variant="warning">Warning message</Callout>);

		expect(screen.getByText("Warning")).toBeInTheDocument();
	});

	it("should display 'Caution' label for caution variant", () => {
		render(<Callout variant="caution">Caution message</Callout>);

		expect(screen.getByText("Caution")).toBeInTheDocument();
	});

	it("should render an icon for tip variant", () => {
		const { container } = render(<Callout variant="tip">Tip message</Callout>);
		// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
		const icon = container.querySelector("svg");

		expect(icon).toBeInTheDocument();
	});

	it("should render an icon for note variant", () => {
		const { container } = render(
			<Callout variant="note">Note message</Callout>,
		);
		// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
		const icon = container.querySelector("svg");

		expect(icon).toBeInTheDocument();
	});

	it("should render an icon for warning variant", () => {
		const { container } = render(
			<Callout variant="warning">Warning message</Callout>,
		);
		// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
		const icon = container.querySelector("svg");

		expect(icon).toBeInTheDocument();
	});

	it("should render an icon for caution variant", () => {
		const { container } = render(
			<Callout variant="caution">Caution message</Callout>,
		);
		// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
		const icon = container.querySelector("svg");

		expect(icon).toBeInTheDocument();
	});
});

// ------------------------------
// Type tests
// ------------------------------

// @ts-expect-error - Callout does not accept `role`
<Callout variant="tip" role="alert">
	Hello World
</Callout>;

// @ts-expect-error - Callout does not accept `role`
<Callout variant="note" role="alert">
	Hello World
</Callout>;

// @ts-expect-error - Callout does not accept `role`
<Callout variant="warning" role="alert">
	Hello World
</Callout>;

// @ts-expect-error - Callout does not accept `role`
<Callout variant="caution" role="alert">
	Hello World
</Callout>;
