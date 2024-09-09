import React from "react";

import { QuizQuestion, type QuizQuestionProps } from "../quiz-question";

// Limit the props of each question to ensure that
// their configurations don't collide with Quiz'.
// For example: Quiz should be able to apply `disabled` to all questions
// without being overriden by the `disabled` prop of the individual question.
// type Question = Pick<QuizQuestionProps, "question" | "options" | "validation">;

export interface QuizProps {
	questions: {
		question: string;
		options: { label: string; value: number }[];
		validation?: QuizQuestionProps["validation"];
		onChange: (selectedOption: number) => void;
		selectedOption: number | undefined;
	}[];
	disabled?: boolean;
}

export const Quiz = ({ questions, disabled }: QuizProps) => {
	return (
		<ul className="flex flex-col gap-y-[24px]">
			{questions.map((question, index) => (
				<li key={index}>
					<QuizQuestion
						{...question}
						position={index + 1}
						disabled={disabled}
					/>
				</li>
			))}
		</ul>
	);
};
