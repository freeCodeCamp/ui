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

interface UseQuizProps<AnswerT extends number | string> {
	initialQuestions: InitialQuestion<AnswerT>[];
	validationMessages: {
		correct: string;
		incorrect: string;
	};
	passingPercent: number;
	onSuccess?: () => void;
	onFailure?: () => void;
}

type ValidationData =
	| { validated: true; grade: number; correctAnswerCount: number }
	| { validated: false; grade?: never; correctAnswerCount?: never };

type UseQuizResult<AnswerT extends number | string> = ValidationData & {
	questions: ReturnedQuestion<AnswerT>[];
	validateAnswers: () => void;
};

export const useQuiz = <AnswerT extends number | string>({
	initialQuestions,
	validationMessages,
	onSuccess,
	onFailure,
	passingPercent,
}: UseQuizProps<AnswerT>): UseQuizResult<AnswerT> => {
	const [questions, setQuestions] =
		useState<Question<AnswerT>[]>(initialQuestions);
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
			const updatedQuestions: Question<AnswerT>[] = prevQuestion.map(
				(question) => {
					const answersWithValidation = question.answers.map((answer) => {
						let validation: QuizQuestionAnswer<AnswerT>["validation"];

						// Only pass validation to the selected answer
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
						}

						return { ...answer, validation };
					});

					return { ...question, answers: answersWithValidation };
				},
			);

			const correctCount = updatedQuestions.filter(
				({ selectedAnswer, correctAnswer }) => selectedAnswer === correctAnswer,
			).length;

			const grade = parseFloat(
				((correctCount / initialQuestions.length) * 100).toFixed(2),
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
