import { useState } from "react";

import { type Question } from "./types";

interface Props<AnswerT extends number | string> {
	initialQuestions: Question<AnswerT>[];
	validationMessages: {
		correct: string;
		incorrect: string;
	};
	passingGrade?: number;
	onSuccess?: () => void;
	onFailure?: () => void;
}

export const useQuiz = <AnswerT extends number | string>({
	initialQuestions,
	validationMessages,
	onSuccess,
	onFailure,
	passingGrade = 100,
}: Props<AnswerT>) => {
	const [questions, setQuestions] =
		useState<Question<AnswerT>[]>(initialQuestions);
	const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
	const [grade, setGrade] = useState(0);

	const questionsWithChangeHandling = questions.map((question, index) => ({
		...question,
		onChange: (selectedAnswer: AnswerT) => {
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

			const grade = parseFloat(
				((correctCount / initialQuestions.length) * 100).toFixed(2),
			);

			setGrade(grade);

			if (grade >= passingGrade) {
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
		grade,
	};
};
