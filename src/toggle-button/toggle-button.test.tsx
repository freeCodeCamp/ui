import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ToggleButton } from ".";

describe("<ToggleButton />", () => {
	it("should render the toggle button and text", () => {
		render(<ToggleButton>On</ToggleButton>);

		expect(screen.getByRole("button", { name: /on/i })).toBeInTheDocument();
	});

	it("should call onChange when clicked", async () => {
		const onChange = jest.fn();
		render(<ToggleButton onChange={onChange}>On</ToggleButton>);

		await userEvent.click(screen.getByRole("button", { name: /on/i }));

		expect(onChange).toHaveBeenCalledTimes(1);
	});

	it("should be checked if checked prop is true", () => {
		render(
			<ToggleButton checked={true} type="radio">
				On
			</ToggleButton>,
		);

		expect(screen.getByRole("radio")).toBeChecked();
	});

	it("should be unchecked if checked prop is false", () => {
		render(
			<ToggleButton checked={false} type="radio">
				On
			</ToggleButton>,
		);

		expect(screen.getByRole("radio")).not.toBeChecked();
	});

	it("should be aria-disabled if disabled prop is true", () => {
		render(<ToggleButton disabled={true}>On</ToggleButton>);

		expect(screen.getByRole("button", { name: /on/i })).toHaveAttribute(
			"aria-disabled",
			"true",
		);
	});

	it("should not trigger onChange if disabled prop is true", async () => {
		const onChange = jest.fn();
		render(
			<ToggleButton disabled={true} onChange={onChange}>
				On
			</ToggleButton>,
		);

		await userEvent.click(screen.getByRole("button", { name: /on/i }));

		expect(onChange).not.toHaveBeenCalled();
	});

	it("should have value property if radio", () => {
		render(
			<form aria-label="form">
				<ToggleButton checked={true} type="radio" value="value" name="radio">
					On
				</ToggleButton>
			</form>,
		);

		expect(screen.getByRole("form")).toHaveFormValues({
			radio: "value",
		});
	});
});
