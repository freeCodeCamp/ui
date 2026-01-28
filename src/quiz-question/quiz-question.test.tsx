import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { QuizQuestion } from "./quiz-question";

describe("<QuizQuestion />", () => {
	it("should render as a radio group", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				answers={[
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

		expect(screen.getByRole("radio", { name: "Option 1" })).toHaveAttribute(
			"data-value",
			"1",
		);
		expect(screen.getByRole("radio", { name: "Option 2" })).toHaveAttribute(
			"data-value",
			"2",
		);
		expect(screen.getByRole("radio", { name: "Option 3" })).toHaveAttribute(
			"data-value",
			"3",
		);
	});

	it("should have the `required` attribute set to `true` if the `required` prop is specified", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				answers={[
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
				answers={[
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
				answers={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
				selectedAnswer={2}
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
				answers={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
				onChange={onChange}
			/>,
		);

		await userEvent.click(screen.getByRole("radio", { name: "Option 2" }));

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith(2);
	});

	it("should render the correct state properly", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				answers={[
					{
						label: "Option 1",
						value: 1,
						validation: {
							state: "correct",
							message: "Correct.",
						},
					},
					{
						label: "Option 2",
						value: 2,
					},
					{
						label: "Option 3",
						value: 3,
					},
				]}
				selectedAnswer={1}
			/>,
		);

		const radioGroup = screen.getByRole("radiogroup", { name: "Lorem ipsum" });
		expect(within(radioGroup).getByText("Correct.")).toBeInTheDocument();
	});

	it("should render the incorrect state properly", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				answers={[
					{
						label: "Option 1",
						value: 1,
						validation: {
							state: "incorrect",
							message: "Incorrect.",
						},
					},
					{
						label: "Option 2",
						value: 2,
					},
					{
						label: "Option 3",
						value: 3,
					},
				]}
				selectedAnswer={1}
			/>,
		);

		const radioGroup = screen.getByRole("radiogroup", { name: "Lorem ipsum" });
		expect(within(radioGroup).getByText("Incorrect.")).toBeInTheDocument();
	});

	it("should render the question position properly", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				answers={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
				position={1}
			/>,
		);

		expect(
			screen.getByRole("radiogroup", { name: "1. Lorem ipsum" }),
		).toBeInTheDocument();
	});

	it("should render answer feedback if both `feedback` and `validation` are provided", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				answers={[
					{
						label: "Option 1",
						value: 1,
						validation: {
							state: "correct",
							message: "Correct.",
						},
						feedback: "Quis vel quo saepe.",
					},
					{
						label: "Option 2",
						value: 2,
					},
					{
						label: "Option 3",
						value: 3,
					},
				]}
				selectedAnswer={1}
			/>,
		);

		const radioGroup = screen.getByRole("radiogroup", { name: "Lorem ipsum" });
		expect(
			within(radioGroup).getByText("Quis vel quo saepe."),
		).toBeInTheDocument();
	});

	it("should not render answer feedback if `feedback` is provided but `validation` is not", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				answers={[
					{ label: "Option 1", value: 1, feedback: "Quis vel quo saepe." },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
				selectedAnswer={1}
			/>,
		);

		const radioGroup = screen.getByRole("radiogroup", { name: "Lorem ipsum" });
		expect(
			within(radioGroup).queryByText("Quis vel quo saepe."),
		).not.toBeInTheDocument();
	});

	it("should only render the feedback of the selected answer", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				answers={[
					{
						label: "Option 1",
						value: 1,
						validation: {
							state: "correct",
							message: "Correct.",
						},
						feedback: "Quis vel quo saepe.",
					},
					{
						label: "Option 2",
						value: 2,
						validation: {
							state: "incorrect",
							message: "Incorrect.",
						},
						feedback: "Culpa dolores aut.",
					},
					{
						label: "Option 3",
						value: 3,
						validation: {
							state: "incorrect",
							message: "Incorrect.",
						},
						feedback: "Culpa dolores aut.",
					},
				]}
				selectedAnswer={1}
			/>,
		);

		const radioGroup = screen.getByRole("radiogroup", { name: "Lorem ipsum" });

		expect(
			within(radioGroup).getByText("Quis vel quo saepe."),
		).toBeInTheDocument();

		expect(
			within(radioGroup).queryByText("Culpa dolores aut."),
		).not.toBeInTheDocument();
	});

	it("should render action buttons when provided", async () => {
		const handleAction1 = jest.fn();
		const handleAction2 = jest.fn();

		render(
			<QuizQuestion
				question="Lorem ipsum"
				answers={[
					{
						label: "Option 1",
						value: 1,
						action: {
							onClick: handleAction1,
							ariaLabel: "Practice speaking option 1",
						},
					},
					{
						label: "Option 2",
						value: 2,
						action: {
							onClick: handleAction2,
							ariaLabel: "Practice speaking option 2",
						},
					},
					{
						label: "Option 3",
						value: 3,
						// No action for this option
					},
				]}
			/>,
		);

		const actionButton1 = screen.getByRole("button", {
			name: "Practice speaking option 1",
		});
		const actionButton2 = screen.getByRole("button", {
			name: "Practice speaking option 2",
		});

		expect(actionButton1).toBeInTheDocument();
		expect(actionButton2).toBeInTheDocument();

		expect(actionButton1).toHaveAttribute(
			"aria-describedby",
			"quiz-answer-1-label",
		);
		expect(actionButton2).toHaveAttribute(
			"aria-describedby",
			"quiz-answer-2-label",
		);

		await userEvent.click(actionButton1);
		expect(handleAction1).toHaveBeenCalledTimes(1);

		await userEvent.click(actionButton2);
		expect(handleAction2).toHaveBeenCalledTimes(1);

		// Verify no action button for option 3
		expect(
			screen.queryByRole("button", {
				name: "Practice speaking option 3",
			}),
		).not.toBeInTheDocument();
	});

	it("should not render action buttons when not provided", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				answers={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
			/>,
		);

		// Verify no buttons are rendered
		const allButtons = screen.queryAllByRole("button", { hidden: true });
		expect(allButtons).toHaveLength(0);
	});

	it("should render audio and transcript when audioUrl is provided", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				answers={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
				audioUrl="test-audio.mp3"
				audioAriaLabel="Audio for question"
				transcript="Test transcript"
			/>,
		);

		const audio = screen.getByLabelText("Audio for question");
		expect(audio).toBeInTheDocument();
		expect(audio.tagName).toBe("AUDIO");
		expect(audio).toHaveAttribute("src", "test-audio.mp3");

		const transcript = screen.getByText("Transcript");
		expect(transcript).toBeInTheDocument();
	});

	it("should render audio with correct aria-label when position is provided", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				answers={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
				audioUrl="test-audio.mp3"
				audioAriaLabel="Audio for question 1"
				transcript="Test transcript"
				position={1}
			/>,
		);

		const audio = screen.getByLabelText("Audio for question 1");
		expect(audio.tagName).toBe("AUDIO");
		expect(audio).toHaveAttribute("aria-label", "Audio for question 1");
	});

	it("should not render audio or transcript when audioUrl is not provided", () => {
		render(
			<QuizQuestion
				question="Lorem ipsum"
				answers={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				]}
			/>,
		);

		expect(screen.queryByRole("figure")).not.toBeInTheDocument();

		const transcript = screen.queryByText("Transcript");
		expect(transcript).not.toBeInTheDocument();
	});
});

// ------------------------------
// Type tests
// ------------------------------
// QuizQuestion without explicit type
<QuizQuestion
	question="Lorem ipsum"
	answers={[
		{ label: "Option 1", value: "1" },
		// @ts-expect-error - values must have the same type
		{ label: "Option 2", value: 2 },
		// @ts-expect-error - values must have the same type
		{ label: "Option 3", value: 3 },
	]}
/>;

// QuizQuestion with `number` type
<QuizQuestion<number>
	question="Lorem ipsum"
	answers={[
		// @ts-expect-error - `value` type must be in accordance with the specified type
		{ label: "Option 1", value: "1" },
		{ label: "Option 2", value: 2 },
		{ label: "Option 3", value: 3 },
	]}
/>;

// QuizQuestion with `string` type
<QuizQuestion<string>
	question="Lorem ipsum"
	answers={[
		// @ts-expect-error - `value` type must be in accordance with the specified type
		{ label: "Option 1", value: 1 },
		{ label: "Option 2", value: "2" },
		{ label: "Option 3", value: "3" },
	]}
/>;

// QuizQuestion with `value` as number and `selectedAnswer` as string
<QuizQuestion<number>
	question="Lorem ipsum"
	answers={[
		{ label: "Option 1", value: 1 },
		{ label: "Option 2", value: 2 },
		{ label: "Option 3", value: 3 },
	]}
	// @ts-expect-error - `value` and `selectedAnswer` must have the same type
	selectedAnswer="1"
/>;

// QuizQuestion with `value` as string and `selectedAnswer` as number
<QuizQuestion<string>
	question="Lorem ipsum"
	answers={[
		{ label: "Option 1", value: "1" },
		{ label: "Option 2", value: "2" },
		{ label: "Option 3", value: "3" },
	]}
	// @ts-expect-error - `value` and `selectedAnswer` must have the same type
	selectedAnswer={1}
/>;

// QuizQuestion with audioUrl but missing audioAriaLabel
// @ts-expect-error - audioAriaLabel is required when audioUrl is provided
<QuizQuestion
	question="Lorem ipsum"
	answers={[
		{ label: "Option 1", value: 1 },
		{ label: "Option 2", value: 2 },
	]}
	audioUrl="https://example.com/audio.mp3"
	transcript="Audio transcript"
/>;

// QuizQuestion with audioUrl but missing transcript
// @ts-expect-error - transcript is required when audioUrl is provided
<QuizQuestion
	question="Lorem ipsum"
	answers={[
		{ label: "Option 1", value: 1 },
		{ label: "Option 2", value: 2 },
	]}
	audioUrl="https://example.com/audio.mp3"
	audioAriaLabel="Audio for question"
/>;

// QuizQuestion with audioAriaLabel but no audioUrl
// @ts-expect-error - audioAriaLabel can only be provided when audioUrl is present
<QuizQuestion
	question="Lorem ipsum"
	answers={[
		{ label: "Option 1", value: 1 },
		{ label: "Option 2", value: 2 },
	]}
	audioAriaLabel="Audio for question"
/>;

// QuizQuestion with transcript but no audioUrl
// @ts-expect-error - transcript can only be provided when audioUrl is present
<QuizQuestion
	question="Lorem ipsum"
	answers={[
		{ label: "Option 1", value: 1 },
		{ label: "Option 2", value: 2 },
	]}
	transcript="Audio transcript"
/>;

// QuizQuestion with valid audio props
<QuizQuestion
	question="Lorem ipsum"
	answers={[
		{ label: "Option 1", value: 1 },
		{ label: "Option 2", value: 2 },
	]}
	audioUrl="https://example.com/audio.mp3"
	audioAriaLabel="Audio for question"
	transcript="Audio transcript"
/>;
