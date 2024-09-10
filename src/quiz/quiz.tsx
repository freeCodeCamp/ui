import React from "react";

import { QuizQuestion } from "../quiz-question";
import { type Question } from "./types";

export interface QuizProps {
	questions: Question[];
	disabled?: boolean;
	required?: boolean;
}

export const Quiz = ({ questions, disabled, required }: QuizProps) => {
	return (
		<ul className="flex flex-col gap-y-[24px]">
			{questions.map((question, index) => (
				<li key={index}>
					<QuizQuestion
						{...question}
						position={index + 1}
						disabled={disabled}
						required={required}
					/>
				</li>
			))}
		</ul>
	);
};
