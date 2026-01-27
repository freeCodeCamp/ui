import { useState } from "react";

import { type Question } from "./types";
import { QuizQuestionAnswer } from "../quiz-question";

type InitialQuestion<AnswerT extends number | string> = Omit<
	Question<AnswerT>,
	"onChange"
>;

type ReturnedQuestion<AnswerT extends number | string> = Question<AnswerT> & {
	onChange: (selectedAnswer: AnswerT) => void;
};

export interface UseQuizProps<AnswerT extends number | string> {
	initialQuestions: InitialQuestion<AnswerT>[];
	validationMessages: {
		correct: string;
		incorrect: string;
	};
	passingPercent: number;
	onSuccess?: () => void;
	onFailure?: () => void;
	showCorrectAnswersOnSuccess?: boolean;
}

type ValidationData =
	| { validated: true; grade: number; correctAnswerCount: number }
	| { validated: false; grade?: never; correctAnswerCount?: never };

export type UseQuizResult<AnswerT extends number | string> = ValidationData & {
	questions: ReturnedQuestion<AnswerT>[];
	validateAnswers: () => void;
};

export const useQuiz = <AnswerT extends number | string>({
	initialQuestions,
	validationMessages,
	onSuccess,
	onFailure,
	passingPercent,
	showCorrectAnswersOnSuccess,
}: UseQuizProps<AnswerT>): UseQuizResult<AnswerT> => {
	const [questions, setQuestions] = useState<Question<AnswerT>[]>(
		initialQuestions as Question<AnswerT>[],
	);
	const [validation, setValidation] = useState<ValidationData>({
		validated: false,
	});

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
			const correctCount = prevQuestion.filter(
				({ selectedAnswer, correctAnswer }) => selectedAnswer === correctAnswer,
			).length;

			const grade = parseFloat(
				((correctCount / initialQuestions.length) * 100).toFixed(2),
			);

			const updatedQuestions: Question<AnswerT>[] = prevQuestion.map(
				(question) => {
					const answersWithValidation = question.answers.map((answer) => {
						let validation: QuizQuestionAnswer<AnswerT>["validation"];

						// Pass validation to the selected answer
						if (answer.value === question.selectedAnswer) {
							validation =
								answer.value === question.correctAnswer
									? {
											state: "correct",
											message: validationMessages.correct,
										}
									: {
											state: "incorrect",
											message: validationMessages.incorrect,
										};
						} else {
							// Reveal the correct answer if the results meet the passing grade
							if (
								answer.value === question.correctAnswer &&
								grade >= passingPercent &&
								showCorrectAnswersOnSuccess
							) {
								validation = {
									state: "correct",
									message: validationMessages.correct,
								};
							}
						}

						return { ...answer, validation };
					});

					return { ...question, answers: answersWithValidation };
				},
			);

			setValidation({
				validated: true,
				grade,
				correctAnswerCount: correctCount,
			});

			if (grade >= passingPercent) {
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
		...validation,
	};
};
