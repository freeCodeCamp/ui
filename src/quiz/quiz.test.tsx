import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Quiz } from "./quiz";
import { type QuizProps } from "./types";
import { useQuiz } from "./use-quiz";

const ControlledQuiz = ({ disabled, required }: Partial<QuizProps<number>>) => {
	const { questions } = useQuiz({
		initialQuestions: [
			{
				question: "Lorem ipsum dolor sit amet",
				answers: [
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				],
				correctAnswer: 1,
			},
			{
				question: "Consectetur adipiscing elit",
				answers: [
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				],
				correctAnswer: 2,
			},
			{
				question: "Fugit itaque delectus voluptatem alias aliquid",
				answers: [
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				],
				correctAnswer: 3,
			},
		],
		validationMessages: {
			correct: "Correct",
			incorrect: "Incorrect",
		},
	});

	return <Quiz questions={questions} disabled={disabled} required={required} />;
};

describe("<Quiz />", () => {
	it("should render as list", () => {
		render(<ControlledQuiz />);

		expect(screen.getByRole("list")).toBeInTheDocument();
		expect(screen.getAllByRole("listitem")).toHaveLength(3);
	});

	it("should render the questions with their position correctly", () => {
		render(<ControlledQuiz />);

		expect(
			screen.getByRole("radiogroup", {
				name: "1. Lorem ipsum dolor sit amet",
			}),
		).toBeInTheDocument();

		expect(
			screen.getByRole("radiogroup", {
				name: "2. Consectetur adipiscing elit",
			}),
		).toBeInTheDocument();

		expect(
			screen.getByRole("radiogroup", {
				name: "3. Fugit itaque delectus voluptatem alias aliquid",
			}),
		).toBeInTheDocument();
	});

	it("should reflect the selected answers correctly", async () => {
		render(<ControlledQuiz />);

		const question1 = screen.getByRole("radiogroup", {
			name: "1. Lorem ipsum dolor sit amet",
		});
		const question1Option = within(question1).getByRole("radio", {
			name: "Option 1",
		});

		const question2 = screen.getByRole("radiogroup", {
			name: "2. Consectetur adipiscing elit",
		});
		const question2Option = within(question2).getByRole("radio", {
			name: "Option 3",
		});

		expect(question1Option).not.toBeChecked();
		expect(question2Option).not.toBeChecked();

		await userEvent.click(question1Option);
		await userEvent.click(question2Option);

		expect(question1Option).toBeChecked();
		expect(question2Option).toBeChecked();
	});

	it("should mark all questions as disabled if `disabled` is `true`", () => {
		render(<ControlledQuiz disabled />);

		const answers = screen.getAllByRole("radio");

		answers.forEach((answer) => {
			expect(answer).toHaveAttribute("aria-disabled", "true");
		});
	});

	it("should mark all questions as required if `required` is `true`", () => {
		render(<ControlledQuiz required />);

		const questions = screen.getAllByRole("radiogroup");

		questions.forEach((question) => {
			expect(question).toBeRequired();
		});
	});
});

// ------------------------------
// Type tests
// ------------------------------
// Quiz without explicit type
<Quiz
	questions={[
		{
			question: "Lorem ipsum dolor sit amet",
			answers: [
				{ label: "Option 1", value: "1" },
				// @ts-expect-error - values must have the same type
				{ label: "Option 2", value: 2 },
				// @ts-expect-error - values must have the same type
				{ label: "Option 3", value: 3 },
			],
		},
	]}
/>;

// Quiz with `number` type
<Quiz<number>
	questions={[
		{
			question: "Lorem ipsum dolor sit amet",
			answers: [
				// @ts-expect-error - `value` type must be in accordance with the specified type
				{ label: "Option 1", value: "1" },
				{ label: "Option 2", value: 2 },
				{ label: "Option 3", value: 3 },
			],
			correctAnswer: 1,
		},
	]}
/>;

// Quiz with `string` type
<Quiz<string>
	questions={[
		{
			question: "Lorem ipsum dolor sit amet",
			answers: [
				// @ts-expect-error - `value` type must be in accordance with the specified type
				{ label: "Option 1", value: 1 },
				{ label: "Option 2", value: "2" },
				{ label: "Option 3", value: "3" },
			],
		},
	]}
/>;

// Quiz with `value` as number and `selectedAnswer` as string
<Quiz<number>
	questions={[
		{
			question: "Lorem ipsum dolor sit amet",
			answers: [
				{ label: "Option 1", value: 1 },
				{ label: "Option 2", value: 2 },
				{ label: "Option 3", value: 3 },
			],
			// @ts-expect-error - `value` and `selectedAnswer` must have the same type
			selectedAnswer: "1",
		},
	]}
/>;

// Quiz with `value` as string and `selectedAnswer` as number
<Quiz<string>
	questions={[
		{
			question: "Lorem ipsum dolor sit amet",
			answers: [
				{ label: "Option 1", value: "1" },
				{ label: "Option 2", value: "2" },
				{ label: "Option 3", value: "3" },
			],
			// @ts-expect-error - `value` and `selectedAnswer` must have the same type
			selectedAnswer: 1,
		},
	]}
/>;

// Quiz with `value` as number and `correctAnswer` as string
<Quiz<number>
	questions={[
		{
			question: "Lorem ipsum dolor sit amet",
			answers: [
				{ label: "Option 1", value: 1 },
				{ label: "Option 2", value: 2 },
				{ label: "Option 3", value: 3 },
			],
			// @ts-expect-error - `value` and `selectedAnswer` must have the same type
			correctAnswer: "1",
		},
	]}
/>;

// Quiz with `value` as string and `correctAnswer` as number
<Quiz<string>
	questions={[
		{
			question: "Lorem ipsum dolor sit amet",
			answers: [
				{ label: "Option 1", value: "1" },
				{ label: "Option 2", value: "2" },
				{ label: "Option 3", value: "3" },
			],
			// @ts-expect-error - `value` and `selectedAnswer` must have the same type
			correctAnswer: 1,
		},
	]}
/>;
