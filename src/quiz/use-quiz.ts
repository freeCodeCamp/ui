import { useState } from "react";

import { type Question } from "./types";
import { QuizQuestionAnswer } from "../quiz-question";

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
	const [questions, setQuestions] =
		useState<Question<AnswerT>[]>(initialQuestions);
	const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

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
					const answersWithValidation = question.answers.map((answer) => {
						const validation: QuizQuestionAnswer<AnswerT>["validation"] =
							answer.value === question.correctAnswer
								? {
										state: "correct",
										message: validationMessages.correct,
									}
								: {
										state: "incorrect",
										message: validationMessages.incorrect,
									};

						return { ...answer, validation };
					});

					return { ...question, answers: answersWithValidation };
				},
			);

			const correctCount = updatedQuestions.filter(
				({ selectedAnswer, correctAnswer }) => selectedAnswer === correctAnswer,
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
