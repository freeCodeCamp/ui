import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Quiz } from "./quiz";
import { useQuiz } from "./use-quiz";

const ControlledQuiz = () => {
	const questions = useQuiz([
		{
			question: "Lorem ipsum dolor sit amet",
			answers: [
				{ label: "Option 1", value: 1 },
				{ label: "Option 2", value: 2 },
				{ label: "Option 3", value: 3 },
			],
		},
		{
			question: "Consectetur adipiscing elit",
			answers: [
				{ label: "Option 1", value: 1 },
				{ label: "Option 2", value: 2 },
				{ label: "Option 3", value: 3 },
			],
		},
		{
			question: "Fugit itaque delectus voluptatem alias aliquid",
			answers: [
				{ label: "Option 1", value: 1 },
				{ label: "Option 2", value: 2 },
				{ label: "Option 3", value: 3 },
			],
		},
	]);

	return <Quiz questions={questions} />;
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

	it("should reflect the selected options correctly", async () => {
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
});
