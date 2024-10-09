import { useEffect, useState } from "react";

import { type Question } from "./types";

interface Props<AnswerT extends number | string> {
	initialQuestions: Question<AnswerT>[];
	validationMessages: {
		correct: string;
		incorrect: string;
	};
	onSuccess?: () => void;
	onFailure?: () => void;
}

export const useQuiz = <AnswerT extends number | string>({
	initialQuestions,
	validationMessages,
	onSuccess,
	onFailure,
}: Props<AnswerT>) => {
	const [quizAnswers, setQuizAnswers] = useState<
		Question<AnswerT>["selectedAnswer"][]
	>(initialQuestions.map((question) => question.selectedAnswer));
	const [questions, setQuestions] = useState<Question<AnswerT>[]>([]);
	const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

	// Initialize the `questions` state and make it synchronized with `quizAnswers`.
	// The synchronization is needed in order to reflect the correct `selectedAnswer`.
	useEffect(() => {
		const questionsWithChangeHandling = initialQuestions.map(
			(question, index) => ({
				...question,
				onChange: (selectedAnswer: AnswerT) => {
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
		setQuestions((prevQuestion) => {
			const updatedQuestions: Question<AnswerT>[] = prevQuestion.map(
				(question) => {
					const validation: Question<AnswerT>["validation"] =
						question.selectedAnswer === question.correctAnswer
							? {
									state: "correct",
									message: validationMessages.correct,
								}
							: {
									state: "incorrect",
									message: validationMessages.incorrect,
								};
					return { ...question, validation };
				},
			);

			const correctCount = updatedQuestions.filter(
				({ validation }) => validation?.state === "correct",
			).length;

			setCorrectAnswerCount(correctCount);

			if (correctCount === initialQuestions.length) {
				onSuccess && onSuccess();
			} else {
				onFailure && onFailure();
			}

			return updatedQuestions;
		});
	};

	return { questions, validateAnswers, correctAnswerCount };
};
