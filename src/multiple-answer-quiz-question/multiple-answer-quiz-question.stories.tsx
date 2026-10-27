import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { MultipleAnswerQuizQuestion } from "./multiple-answer-quiz-question";

const meta: Meta<typeof MultipleAnswerQuizQuestion> = {
	title: "Components/MultipleAnswerQuizQuestion",
	component: MultipleAnswerQuizQuestion,
};

export default meta;

type Story = StoryObj<typeof MultipleAnswerQuizQuestion>;

const InteractiveExample = () => {
	const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

	return (
		<div className="max-w-2xl">
			<MultipleAnswerQuizQuestion
				question="Which of the following are JavaScript data types?"
				answers={[
					{ label: "String", value: "string" },
					{ label: "Boolean", value: "boolean" },
					{ label: "HTML", value: "html" },
					{ label: "Number", value: "number" },
				]}
				selectedAnswers={selectedAnswers}
				onChange={setSelectedAnswers}
			/>

			<p className="mt-4">
				Selected answers: {selectedAnswers.join(", ") || "None"}
			</p>
		</div>
	);
};

export const Default: Story = {
	render: () => <InteractiveExample />,
};

export const Disabled: Story = {
	render: () => (
		<div className="max-w-2xl">
			<MultipleAnswerQuizQuestion
				question="Select all correct answers"
				answers={[
					{ label: "Option A", value: "A" },
					{ label: "Option B", value: "B" },
					{ label: "Option C", value: "C" },
				]}
				selectedAnswers={["A"]}
				disabled
			/>
		</div>
	),
};
