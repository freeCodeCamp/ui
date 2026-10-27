import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { MultipleAnswerQuizQuestion } from "./multiple-answer-quiz-question";

const answers = [
	{ label: "Option A", value: "A" },
	{ label: "Option B", value: "B" },
	{ label: "Option C", value: "C" },
];

describe("<MultipleAnswerQuizQuestion />", () => {
	it("renders the question and checkbox answers", () => {
		render(
			<MultipleAnswerQuizQuestion
				question="Select all correct answers"
				answers={answers}
			/>,
		);

		expect(
			screen.getByRole("group", {
				name: "Select all correct answers",
			}),
		).toBeInTheDocument();

		expect(
			screen.getByRole("checkbox", { name: "Option A" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("checkbox", { name: "Option B" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("checkbox", { name: "Option C" }),
		).toBeInTheDocument();
	});

	it("marks the supplied selected answers as checked", () => {
		render(
			<MultipleAnswerQuizQuestion
				question="Select all correct answers"
				answers={answers}
				selectedAnswers={["A", "C"]}
			/>,
		);

		expect(screen.getByRole("checkbox", { name: "Option A" })).toBeChecked();
		expect(
			screen.getByRole("checkbox", { name: "Option B" }),
		).not.toBeChecked();
		expect(screen.getByRole("checkbox", { name: "Option C" })).toBeChecked();
	});

	it("calls onChange with the added answer", async () => {
		const user = userEvent.setup();
		const onChange = vi.fn();

		render(
			<MultipleAnswerQuizQuestion
				question="Select all correct answers"
				answers={answers}
				selectedAnswers={["A"]}
				onChange={onChange}
			/>,
		);

		await user.click(screen.getByRole("checkbox", { name: "Option B" }));

		expect(onChange).toHaveBeenCalledWith(["A", "B"]);
	});

	it("calls onChange with the removed answer excluded", async () => {
		const user = userEvent.setup();
		const onChange = vi.fn();

		render(
			<MultipleAnswerQuizQuestion
				question="Select all correct answers"
				answers={answers}
				selectedAnswers={["A", "B"]}
				onChange={onChange}
			/>,
		);

		await user.click(screen.getByRole("checkbox", { name: "Option A" }));

		expect(onChange).toHaveBeenCalledWith(["B"]);
	});

	it("does not allow selection when disabled", async () => {
		const user = userEvent.setup();
		const onChange = vi.fn();

		render(
			<MultipleAnswerQuizQuestion
				question="Select all correct answers"
				answers={answers}
				disabled
				onChange={onChange}
			/>,
		);

		const optionA = screen.getByRole("checkbox", { name: "Option A" });

		expect(optionA).toBeDisabled();

		await user.click(optionA);
		expect(onChange).not.toHaveBeenCalled();
	});

	it("renders the question position", () => {
		render(
			<MultipleAnswerQuizQuestion
				question="Select all correct answers"
				answers={answers}
				position={2}
			/>,
		);

		expect(
			screen.getByRole("group", {
				name: "2. Select all correct answers",
			}),
		).toBeInTheDocument();
	});
});
