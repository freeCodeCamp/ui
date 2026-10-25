import React from "react";

import { MultipleAnswerQuizQuestion } from "../multiple-answer-quiz-question";
import { QuizQuestion } from "../quiz-question";
import { type QuizProps } from "./types";

export const Quiz = <AnswerT extends number | string>({
	questions,
	disabled,
	required,
}: QuizProps<AnswerT>) => (
	<ul className="flex flex-col gap-y-[48px] list-none">
		{questions.map((question, index) => (
			<li key={index}>
				{question.type === "multiple" ? (
					question.audioUrl &&
					question.audioAriaLabel &&
					question.transcript ? (
						<MultipleAnswerQuizQuestion
							question={question.question}
							answers={question.answers}
							position={index + 1}
							disabled={disabled}
							required={required}
							selectedAnswers={question.selectedAnswers}
							onChange={question.onChange}
							audioUrl={question.audioUrl}
							audioAriaLabel={question.audioAriaLabel}
							transcript={question.transcript}
							audioStartTime={question.audioStartTime}
							audioFinishTime={question.audioFinishTime}
						/>
					) : (
						<MultipleAnswerQuizQuestion
							question={question.question}
							answers={question.answers}
							position={index + 1}
							disabled={disabled}
							required={required}
							selectedAnswers={question.selectedAnswers}
							onChange={question.onChange}
						/>
					)
				) : (
					<QuizQuestion
						{...question}
						position={index + 1}
						disabled={disabled}
						required={required}
					/>
				)}
			</li>
		))}
	</ul>
);
