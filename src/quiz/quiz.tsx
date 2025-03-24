import React from "react";

import { QuizQuestion } from "../quiz-question";
import { type QuizProps } from "./types";

export const Quiz = <AnswerT extends number | string>({
	questions,
	disabled,
	required,
}: QuizProps<AnswerT>) => {
	return (
		<ul className="flex flex-col gap-y-[48px] list-none">
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
