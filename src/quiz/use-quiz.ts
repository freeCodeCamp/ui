import { useEffect, useState } from "react";

import { type Question } from "./types";

interface Props {
	initialQuestions: Question[];
	validationMessages: {
		correct: string;
		incorrect: string;
	};
}

export const useQuiz = ({ initialQuestions, validationMessages }: Props) => {
	const [quizAnswers, setQuizAnswers] = useState<(number | undefined)[]>(
		initialQuestions.map((question) => question.selectedAnswer),
	);
	const [questions, setQuestions] = useState<Question[]>([]);

	// Initialize the `questions` state and make it synchronized with `quizAnswers`.
	// The synchronization is needed in order to reflect the correct `selectedAnswer`.
	useEffect(() => {
		const questionsWithChangeHandling = initialQuestions.map(
			(question, index) => ({
				...question,
				onChange: (selectedAnswer: number) => {
					console.log("🚀 ~ useEffect ~ selectedAnswer:", selectedAnswer);
					setQuizAnswers((prevAnswers) =>
						prevAnswers.map((prevAnswer, prevIndex) =>
							prevIndex === index ? selectedAnswer : prevAnswer,
						),
					);
				},
				selectedAnswer: quizAnswers[index],
			}),
		);

		setQuestions(questionsWithChangeHandling);
		// We only need `quizAnswers` in the dependency array.
		// Adding `initialQuestions` in will cause an infinite loop.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [quizAnswers]);

	const validateAnswers = () => {
		setQuestions((prevQuestions) =>
			prevQuestions.map((prevQuestion) => {
				if (prevQuestion.selectedAnswer === prevQuestion.correctAnswer) {
					return {
						...prevQuestion,
						validation: {
							state: "correct",
							message: validationMessages.correct,
						},
					};
				}

				return {
					...prevQuestion,
					validation: {
						state: "incorrect",
						message: validationMessages.incorrect,
					},
				};
			}),
		);
	};

	return { questions, validateAnswers };
};
