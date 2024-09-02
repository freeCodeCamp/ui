import React from "react";

import { QuizQuestion, type QuizQuestionProps } from "../quiz-question";

// Limit the props of each question to ensure that
// their configurations don't collide with Quiz'.
// For example: Quiz should be able to apply `disabled` to all questions
// without being overriden by the `disabled` prop of the individual question.
type Question = Pick<QuizQuestionProps, "question" | "options" | "validation">;

export interface QuizProps {
	questions: Question[];
	values: Record<string, QuizQuestionProps["selectedOption"]>;
	onChange: QuizQuestionProps["onChange"];
	disabled?: boolean;
}

export const Quiz = ({ questions, values, onChange, disabled }: QuizProps) => {
	return (
		<ul className="flex flex-col gap-y-[24px]">
			{questions.map(({ question, options, validation }, index) => (
				<li key={question}>
					<QuizQuestion
						position={index + 1}
						question={question}
						options={options}
						validation={validation}
						onChange={onChange}
						selectedOption={values[question]}
						disabled={disabled}
					/>
				</li>
			))}
		</ul>
	);
};
