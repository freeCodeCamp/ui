import { useState } from "react";
import { type QuizQuestionProps } from "../quiz-question";

export const useQuiz = (rawQuestions: QuizQuestionProps[]) => {
	const [quizAnswers, setQuizAnswers] = useState<(number | undefined)[]>(
		new Array(rawQuestions.length).fill(undefined),
	);

	const questions = rawQuestions.map((question, index) => ({
		...question,
		onChange: (selectedOption: number) => {
			setQuizAnswers((prevAnswers) =>
				prevAnswers.map((prevAnswer, prevIndex) =>
					prevIndex === index ? selectedOption : prevAnswer,
				),
			);
		},
		selectedOption: quizAnswers[index],
	}));

	return questions;
};
