import { useState } from "react";

import type { QuizQuestionAnswer } from "../quiz-question";
import type { Question } from "./types";

type WithoutOnChange<T> = T extends unknown ? Omit<T, "onChange"> : never;

type InitialQuestion<AnswerT extends number | string> = WithoutOnChange<
	Question<AnswerT>
>;

type ReturnedQuestion<AnswerT extends number | string> = Question<AnswerT> & {
	onChange: (selectedAnswer: AnswerT | AnswerT[]) => void;
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

const getQuestionScore = <AnswerT extends number | string>(
	question: Question<AnswerT>,
): number => {
	if (question.type === "multiple") {
		const selected = question.selectedAnswers ?? [];
		const correct = question.correctAnswers;

		if (
			selected.some((answer) => !correct.includes(answer)) ||
			correct.length === 0
		) {
			return 0;
		}

		return (
			selected.filter((answer) => correct.includes(answer)).length /
			correct.length
		);
	}

	return question.selectedAnswer === question.correctAnswer ? 1 : 0;
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

	const questionsWithChangeHandling = questions.map(
		(question, index) =>
			({
				...question,
				onChange: (selection: AnswerT | AnswerT[]) => {
					setQuestions((previousQuestions) =>
						previousQuestions.map((previousQuestion, previousIndex) => {
							if (previousIndex !== index) {
								return previousQuestion;
							}

							if (previousQuestion.type === "multiple") {
								return {
									...previousQuestion,
									selectedAnswers: Array.isArray(selection)
										? selection
										: [selection],
								};
							}

							return {
								...previousQuestion,
								selectedAnswer: Array.isArray(selection)
									? selection[0]
									: selection,
							};
						}),
					);
				},
			}) as ReturnedQuestion<AnswerT>,
	);

	const validateAnswers = () => {
		setQuestions((previousQuestions) => {
			const scores = previousQuestions.map(getQuestionScore);
			const correctCount = scores.filter((score) => score === 1).length;
			const grade =
				previousQuestions.length === 0
					? 0
					: parseFloat(
							(
								(scores.reduce((total, score) => total + score, 0) /
									previousQuestions.length) *
								100
							).toFixed(2),
						);

			const updatedQuestions: Question<AnswerT>[] = previousQuestions.map(
				(question) => {
					const answersWithValidation = question.answers.map((answer) => {
						let answerValidation: QuizQuestionAnswer<AnswerT>["validation"];

						if (question.type === "multiple") {
							const selected = question.selectedAnswers ?? [];
							const correct = question.correctAnswers;
							const isSelected = selected.includes(answer.value);
							// const hasIncorrectSelection = selected.some(
							// 	(value) => !correct.includes(value),
							// );

							if (isSelected) {
								answerValidation = correct.includes(answer.value)
									? {
											state: "correct",
											message: validationMessages.correct,
										}
									: {
											state: "incorrect",
											message: validationMessages.incorrect,
										};
							} else if (
								correct.includes(answer.value) &&
								grade >= passingPercent &&
								showCorrectAnswersOnSuccess
							) {
								answerValidation = {
									state: "correct",
									message: validationMessages.correct,
								};
							}

							// // Intentionally do not mark unselected answers incorrect.
							// void hasIncorrectSelection;
						} else if (answer.value === question.selectedAnswer) {
							answerValidation =
								answer.value === question.correctAnswer
									? {
											state: "correct",
											message: validationMessages.correct,
										}
									: {
											state: "incorrect",
											message: validationMessages.incorrect,
										};
						} else if (
							answer.value === question.correctAnswer &&
							grade >= passingPercent &&
							showCorrectAnswersOnSuccess
						) {
							answerValidation = {
								state: "correct",
								message: validationMessages.correct,
							};
						}

						return { ...answer, validation: answerValidation };
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
				onSuccess?.();
			} else {
				onFailure?.();
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
