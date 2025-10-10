import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MenuItem } from "./menu-item";
import { Dropdown } from "./drop-down";

describe("<DropDownButton>", () => {
	it("should render button with text", async () => {
		render(
			<Dropdown>
				<Dropdown.Toggle>Some Button</Dropdown.Toggle>
				<Dropdown.Menu>
					<MenuItem onClick={() => alert("hi")}>Option</MenuItem>
					<MenuItem href={"https://www.google.com"}>Option</MenuItem>
					<MenuItem href={"https://www.google.com"}>Option</MenuItem>
				</Dropdown.Menu>
			</Dropdown>,
		);
		const dropdownTrigger = screen.getByRole("button", { name: "Some Button" });
		await userEvent.click(dropdownTrigger);
		const unorderedList = screen.getByRole("menu");
		const item = within(unorderedList).getAllByRole("menuitem");
		expect(unorderedList).toBeInTheDocument();
		expect(dropdownTrigger).toBeInTheDocument();
		expect(item).toHaveLength(3);
	});

	it("should render button with direction to up and menu with up direction class", async () => {
		render(
			<Dropdown dropup={true}>
				<Dropdown.Toggle>Some Button</Dropdown.Toggle>
				<Dropdown.Menu>
					<MenuItem onClick={() => alert("hi")}>Option 1</MenuItem>
					<MenuItem href={"https://www.google.com"}>Option 2</MenuItem>
					<MenuItem href={"https://www.google.com"}>Option 3</MenuItem>
				</Dropdown.Menu>
			</Dropdown>,
		);

		const dropdownTrigger = screen.getByRole("button", { name: "Some Button" });
		const upIcon = within(dropdownTrigger).getByRole("img", { hidden: true });

		expect(upIcon).toHaveAttribute("data-icon", "caret-up");

		await userEvent.click(dropdownTrigger);
		const unorderedList = screen.getByRole("menu");

		expect(unorderedList).toHaveClass("transform");
		expect(unorderedList).toHaveClass("-translate-y-full");
		expect(unorderedList).toHaveClass("top-0");
	});

	it("should apply w-full to button and menu when `block` is true", async () => {
		render(
			<Dropdown block>
				<Dropdown.Toggle>Block Button</Dropdown.Toggle>
				<Dropdown.Menu>
					<MenuItem>Block Menu Item 1</MenuItem>
					<MenuItem>Block Menu Item 2</MenuItem>
				</Dropdown.Menu>
			</Dropdown>,
		);
		const dropdownTrigger = screen.getByRole("button", {
			name: "Block Button",
		});

		expect(dropdownTrigger).toHaveClass("w-full");

		await userEvent.click(dropdownTrigger);
		const unorderedList = screen.getByRole("menu");

		expect(unorderedList).toHaveClass("w-full");
	});

	it("should have the role 'button' and render the correct text", async () => {
		render(
			<Dropdown>
				<Dropdown.Toggle>test</Dropdown.Toggle>
				<Dropdown.Menu>
					<MenuItem>Hello world</MenuItem>
				</Dropdown.Menu>
			</Dropdown>,
		);
		const dropDownTrigger = screen.getByRole("button", { name: "test" });
		await userEvent.click(dropDownTrigger);
		const unorderedList = screen.getByRole("menu");
		const item = within(unorderedList).getByRole("menuitem", {
			name: "Hello world",
		});
		expect(item).toBeInTheDocument();
	});

	it("should trigger the onClick prop on click", async () => {
		const onClick = jest.fn();

		render(
			<Dropdown>
				<Dropdown.Toggle>test</Dropdown.Toggle>
				<Dropdown.Menu>
					<MenuItem onClick={onClick}>Hello world</MenuItem>
				</Dropdown.Menu>
			</Dropdown>,
		);

		const dropDownTrigger = screen.getByRole("button", { name: "test" });
		await userEvent.click(dropDownTrigger);
		const unorderedList = screen.getByRole("menu");
		const item = within(unorderedList).getByRole("menuitem");

		await userEvent.click(item);

		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it("should reflect the disabled state using the aria-disabled attribute", async () => {
		render(
			<Dropdown>
				<Dropdown.Toggle>test</Dropdown.Toggle>
				<Dropdown.Menu>
					<MenuItem disabled>Hello world</MenuItem>
				</Dropdown.Menu>
			</Dropdown>,
		);

		const dropDownTrigger = screen.getByRole("button", { name: "test" });
		await userEvent.click(dropDownTrigger);
		const unorderedList = screen.getByRole("menu");
		const item = within(unorderedList).getByRole("menuitem", {
			name: "Hello world",
		});

		expect(item).toHaveAttribute("aria-disabled", "true");

		// Ensure that the `disabled` attribute is not used.
		expect(item).toBeEnabled();
	});

	it("should not trigger the onClick prop if the button is disabled", async () => {
		const onClick = jest.fn();

		render(
			<Dropdown>
				<Dropdown.Toggle>test</Dropdown.Toggle>
				<Dropdown.Menu>
					<MenuItem disabled onClick={onClick}>
						Hello world
					</MenuItem>
				</Dropdown.Menu>
			</Dropdown>,
		);

		const dropDownTrigger = screen.getByRole("button", { name: "test" });
		await userEvent.click(dropDownTrigger);
		const unorderedList = screen.getByRole("menu");
		const item = within(unorderedList).getByRole("menuitem", {
			name: "Hello world",
		});
		await userEvent.click(item);

		expect(onClick).not.toHaveBeenCalled();
	});

	it("should render an anchor element if the `href` prop is defined", async () => {
		render(
			<Dropdown>
				<Dropdown.Toggle>test</Dropdown.Toggle>
				<Dropdown.Menu>
					<MenuItem href="https://www.freecodecamp.org">freeCodeCamp</MenuItem>
				</Dropdown.Menu>
			</Dropdown>,
		);

		const dropDownTrigger = screen.getByRole("button", { name: "test" });
		await userEvent.click(dropDownTrigger);
		const unorderedList = screen.getByRole("menu");
		const item = within(unorderedList).getByRole("menuitem", {
			name: "freeCodeCamp",
		});

		expect(item).toBeInTheDocument();
		expect(item).toHaveAttribute("href", "https://www.freecodecamp.org");
	});

	it("should render a button element if the `href` and `disabled` props are both defined", async () => {
		render(
			<Dropdown>
				<Dropdown.Toggle>test</Dropdown.Toggle>
				<Dropdown.Menu>
					<MenuItem href="https://www.freecodecamp.org" disabled>
						freeCodeCamp
					</MenuItem>
				</Dropdown.Menu>
			</Dropdown>,
		);

		const dropDownTrigger = screen.getByRole("button", { name: "test" });
		await userEvent.click(dropDownTrigger);
		const unorderedList = screen.getByRole("menu");
		const item = within(unorderedList).getByRole("menuitem", {
			name: "freeCodeCamp",
		});

		expect(item).toBeInTheDocument();
		expect(item).toHaveAttribute("aria-disabled", "true");
	});
});
