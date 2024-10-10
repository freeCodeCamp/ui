import { useState } from "react";

import { type Question } from "./types";

interface Props {
	initialQuestions: Question[];
	validationMessages: {
		correct: string;
		incorrect: string;
	};
	onSuccess?: () => void;
	onFailure?: () => void;
	showFeedback?: boolean;
}

export const useQuiz = ({
	initialQuestions,
	validationMessages,
	onSuccess,
	onFailure,
	showFeedback,
}: Props) => {
	const [questions, setQuestions] = useState<Question[]>(initialQuestions);
	const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

	const questionsWithChangeHandling = questions.map((question, index) => ({
		...question,
		onChange: (selectedAnswer: number) => {
			// update the selected answer for this question
			setQuestions((prevQuestions) =>
				prevQuestions.map((prevQuestion, prevIndex) =>
					prevIndex === index
						? { ...prevQuestion, selectedAnswer }
						: prevQuestion,
				),
			);
		},
	}));

	const validateAnswers = () => {
		setQuestions((prevQuestion) => {
			const updatedQuestions: Question[] = prevQuestion.map((question) => {
				const validation: Question["validation"] =
					question.selectedAnswer === question.correctAnswer
						? {
								state: "correct",
								message: validationMessages.correct,
							}
						: {
								state: "incorrect",
								message: validationMessages.incorrect,
							};
				return { ...question, validation, showFeedback };
			});

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

	return {
		questions: questionsWithChangeHandling,
		validateAnswers,
		correctAnswerCount,
	};
};
