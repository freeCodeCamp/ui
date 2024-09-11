import { useState } from "react";

import { type Question } from "./types";

export const useQuiz = (initialQuestions: Question[]) => {
	const [quizAnswers, setQuizAnswers] = useState<(number | undefined)[]>(
		initialQuestions.map((question) => question.selectedAnswer),
	);

	const questions = initialQuestions.map((question, index) => ({
		...question,
		onChange: (selectedAnswer: number) => {
			setQuizAnswers((prevAnswers) =>
				prevAnswers.map((prevAnswer, prevIndex) =>
					prevIndex === index ? selectedAnswer : prevAnswer,
				),
			);
		},
		selectedAnswer: quizAnswers[index],
	}));

	return questions;
};
