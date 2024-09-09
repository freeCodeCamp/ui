import { useState } from "react";

import { type Question } from "./types";

export const useQuiz = (rawQuestions: Question[]) => {
	const [quizAnswers, setQuizAnswers] = useState<(number | undefined)[]>(
		new Array(rawQuestions.length).fill(undefined),
	);

	const questions: Question[] = rawQuestions.map((question, index) => ({
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
