// Silence the `jest-dom/prefer-enabled-disabled` rule as the rule looks for the `disabled` attribute
// while the Button component doesn't use it.
/* eslint-disable jest-dom/prefer-enabled-disabled */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { Button } from "./button";

describe("<Button />", () => {
	it("should have the role 'button' and render the correct text", () => {
		render(<Button>Hello world</Button>);

		expect(
			screen.getByRole("button", { name: /hello world/i }),
		).toBeInTheDocument();
	});

	it("should have the type 'button' by default", () => {
		render(<Button>Hello world</Button>);

		expect(
			screen.getByRole("button", { name: /hello world/i }),
		).toHaveAttribute("type", "button");
	});

	it("should have the type 'submit' if it is specified", () => {
		render(<Button type="submit">Hello world</Button>);

		expect(
			screen.getByRole("button", { name: /hello world/i }),
		).toHaveAttribute("type", "submit");
	});

	it("should trigger the onClick prop on click if the component is a button element", async () => {
		const onClick = jest.fn();

		render(<Button onClick={onClick}>Hello world</Button>);

		const button = screen.getByRole("button", { name: /hello world/i });

		await userEvent.click(button);

		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it("should reflect the disabled state using the aria-disabled attribute", () => {
		render(<Button disabled>Hello world</Button>);

		const button = screen.getByRole("button", { name: /hello world/i });

		expect(button).toHaveAttribute("aria-disabled", "true");

		// Ensure that the `disabled` attribute is not used.
		expect(button).not.toHaveAttribute("disabled", "true");
	});

	it("should not trigger the onClick prop if the button is disabled", async () => {
		const onClick = jest.fn();

		render(
			<Button disabled onClick={onClick}>
				Hello world
			</Button>,
		);

		const button = screen.getByRole("button", { name: /hello world/i });
		await userEvent.click(button);

		expect(onClick).not.toHaveBeenCalled();
	});

	it("should not trigger form submission if the button has `submit` type and is disabled", async () => {
		const handleSubmit = jest.fn();

		render(
			<form onSubmit={handleSubmit}>
				<label>
					Username
					<input type="text" />
				</label>

				<Button type="submit" disabled>
					Submit
				</Button>
			</form>,
		);

		const button = screen.getByRole("button", { name: "Submit" });
		await userEvent.click(button);

		expect(handleSubmit).not.toHaveBeenCalled();
	});

	it("should render an anchor element if the `href` prop is defined", () => {
		render(<Button href="https://www.freecodecamp.org">freeCodeCamp</Button>);

		const link = screen.getByRole("link", { name: /freeCodeCamp/i });
		const button = screen.queryByRole("button", { name: /freeCodeCamp/i });

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "https://www.freecodecamp.org");
		// Ensure that a button element is not rendered
		expect(button).not.toBeInTheDocument();
	});

	it("should render a button element if the `href` and `disabled` props are both defined", () => {
		render(
			<Button href="https://www.freecodecamp.org" disabled>
				freeCodeCamp
			</Button>,
		);

		const button = screen.getByRole("button", { name: /freeCodeCamp/i });
		const link = screen.queryByRole("link", { name: /freeCodeCamp/i });

		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute("aria-disabled", "true");
		// Ensure that a link element is not rendered
		expect(link).not.toBeInTheDocument();
	});

	it("should trigger the onClick prop on click if the component is an anchor element", async () => {
		const onClick = jest.fn();

		render(
			<Button href="https://www.freecodecamp.org" onClick={onClick}>
				freeCodeCamp
			</Button>,
		);

		const link = screen.getByRole("link", { name: /freeCodeCamp/i });

		await userEvent.click(link);

		expect(onClick).toHaveBeenCalledTimes(1);
	});
});

// ------------------------------
// Type tests
// ------------------------------

// @ts-expect-error - Button with `danger` variant cannot be disabled
<Button variant="danger" disabled>
	Button text
</Button>;

// @ts-expect-error - Button with `info` variant cannot be disabled
<Button variant="info" disabled>
	Button text
</Button>;
