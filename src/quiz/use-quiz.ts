import { useState } from "react";

import { type Question } from "./types";

interface Props {
	initialQuestions: Question[];
	correctMessage: string;
	incorrectMessage: string;
}

export const useQuiz = ({
	initialQuestions,
	correctMessage,
	incorrectMessage,
}: Props) => {
	const [quizAnswers, setQuizAnswers] = useState<(number | undefined)[]>(
		initialQuestions.map((question) => question.selectedAnswer),
	);

	const questionsWithChangeHandling = initialQuestions.map(
		(question, index) => ({
			...question,
			onChange: (selectedAnswer: number) => {
				setQuizAnswers((prevAnswers) =>
					prevAnswers.map((prevAnswer, prevIndex) =>
						prevIndex === index ? selectedAnswer : prevAnswer,
					),
				);
			},
			selectedAnswer: quizAnswers[index],
		}),
	);

	const [questions, setQuestions] = useState(questionsWithChangeHandling);

	const validateAnswers = () => {
		setQuestions((prevQuestions) =>
			prevQuestions.map((prevQuestion) => {
				if (prevQuestion.selectedAnswer === prevQuestion.correctAnswer) {
					return {
						...prevQuestion,
						validation: {
							state: "correct",
							message: correctMessage,
						},
					};
				}

				return {
					...prevQuestion,
					validation: {
						state: "incorrect",
						message: incorrectMessage,
					},
				};
			}),
		);
	};

	return { questions, validateAnswers };
};
