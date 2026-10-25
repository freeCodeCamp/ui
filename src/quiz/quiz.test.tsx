import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Quiz } from "./quiz";
import { useQuiz } from "./use-quiz";

describe("<Quiz />", () => {
	it("should render multiple-answer questions with checkboxes", () => {
		render(
			<Quiz
				questions={[
					{
						type: "multiple",
						question: "Select all correct answers",
						answers: [
							{ label: "Option A", value: "A" },
							{ label: "Option B", value: "B" },
						],
						correctAnswers: ["A", "B"],
					},
				]}
			/>,
		);

		expect(
			screen.getByRole("group", {
				name: "1. Select all correct answers",
			}),
		).toBeInTheDocument();

		expect(
			screen.getByRole("checkbox", { name: "Option A" }),
		).toBeInTheDocument();

		expect(
			screen.getByRole("checkbox", { name: "Option B" }),
		).toBeInTheDocument();
	});

	it("should reflect selected multiple answers correctly", async () => {
		const user = userEvent.setup();

		const ControlledMultipleQuiz = () => {
			const { questions } = useQuiz({
				initialQuestions: [
					{
						type: "multiple",
						question: "Select all correct answers",
						answers: [
							{ label: "Option A", value: "A" },
							{ label: "Option B", value: "B" },
							{ label: "Option C", value: "C" },
						],
						correctAnswers: ["A", "B"],
					},
				],
				validationMessages: {
					correct: "Correct",
					incorrect: "Incorrect",
				},
				passingPercent: 80,
			});

			return <Quiz questions={questions} />;
		};

		render(<ControlledMultipleQuiz />);

		const optionA = screen.getByRole("checkbox", { name: "Option A" });
		const optionB = screen.getByRole("checkbox", { name: "Option B" });

		expect(optionA).not.toBeChecked();
		expect(optionB).not.toBeChecked();

		await user.click(optionA);
		await user.click(optionB);

		expect(optionA).toBeChecked();
		expect(optionB).toBeChecked();
	});
});
