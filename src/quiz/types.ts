import type { QuizQuestionAnswer, QuizQuestionProps } from "../quiz-question";

export interface QuizProps<AnswerT extends number | string> {
	questions: Question<AnswerT>[];
	disabled?: boolean;
	required?: boolean;
}

// This interface is a subset of QuizQuestionProps.
// The props are limited to ensure that
// their configurations don't collide with Quiz'.
// For example: Quiz should be able to apply `disabled` to all questions
// without being overriden by the `disabled` prop of the individual question.
export interface Question<AnswerT extends number | string> {
	/**
	 * Question text, can be plain text or contain code.
	 * If the question text contains code, use the PrismFormatted component to ensure the code is rendered correctly.
	 */
	question: QuizQuestionProps<AnswerT>["question"];

	/**
	 * Answer options
	 */
	answers: QuizQuestionAnswer<AnswerT>[];

	/**
	 * Value of the correct answer
	 */
	correctAnswer: AnswerT;

	/**
	 * Change event handler, called when an answer is selected
	 */
	onChange?: (selectedAnswer: AnswerT) => void;

	/**
	 * Value of the selected answer
	 */
	selectedAnswer?: AnswerT;
}
