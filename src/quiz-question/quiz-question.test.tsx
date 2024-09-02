import React from "react";
import { render, screen } from "@testing-library/react";

import { QuizQuestion } from "./quiz-question";
import userEvent from "@testing-library/user-event";

describe("<QuizQuestion />", () => {
	it("should render as a radio group", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				options={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
			/>,
		);

		expect(
			screen.getByRole("radiogroup", { name: "Lorem ipsum" }),
		).toBeInTheDocument();

		expect(screen.getByRole("radio", { name: "Option 1" })).toBeInTheDocument();
		expect(screen.getByRole("radio", { name: "Option 2" })).toBeInTheDocument();
		expect(screen.getByRole("radio", { name: "Option 3" })).toBeInTheDocument();
	});

	it("should have the `required` attribute set to `true` if the `required` prop is specified", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				options={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
				required
			/>,
		);

		expect(
			screen.getByRole("radiogroup", { name: "Lorem ipsum" }),
		).toBeRequired();
	});

	it("should have the `aria-disabled` attribute set to `true` if the `disabled` prop is specified", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				options={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
				disabled
			/>,
		);

		expect(screen.getByRole("radio", { name: "Option 1" })).toHaveAttribute(
			"aria-disabled",
			"true",
		);
		expect(screen.getByRole("radio", { name: "Option 2" })).toHaveAttribute(
			"aria-disabled",
			"true",
		);
		expect(screen.getByRole("radio", { name: "Option 3" })).toHaveAttribute(
			"aria-disabled",
			"true",
		);
	});

	it("should have the correct `checked` attribute according to the `selectedOption` prop", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				options={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
				selectedOption={2}
			/>,
		);

		expect(screen.getByRole("radio", { name: "Option 1" })).not.toBeChecked();
		expect(screen.getByRole("radio", { name: "Option 2" })).toBeChecked();
		expect(screen.getByRole("radio", { name: "Option 3" })).not.toBeChecked();
	});

	it("should call `onChange` with the value of the selected option", async () => {
		const onChange = jest.fn();

		render(
			<QuizQuestion
				question="Lorem ipsum"
				options={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
				onChange={onChange}
			/>,
		);

		await userEvent.click(screen.getByRole("radio", { name: "Option 2" }));

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith({
			questionId: "Lorem ipsum",
			selectedOption: 2,
		});
	});

	it("should render the correct state properly", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				options={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
				validation={{
					state: "correct",
					message: "Correct.",
				}}
			/>,
		);

		expect(
			screen.getByRole("radiogroup", { name: "Correct. Lorem ipsum" }),
		).toBeInTheDocument();
	});

	it("should render the incorrect state properly", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				options={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
				validation={{
					state: "incorrect",
					message: "Incorrect.",
				}}
			/>,
		);

		expect(
			screen.getByRole("radiogroup", { name: "Incorrect. Lorem ipsum" }),
		).toBeInTheDocument();
	});
});
