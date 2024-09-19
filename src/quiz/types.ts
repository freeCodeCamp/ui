import type {
	QuizQuestionAnswer,
	QuizQuestionValidation,
} from "../quiz-question";

// This interface is a subset of QuizQuestionProps.
// The props are limited to ensure that
// their configurations don't collide with Quiz'.
// For example: Quiz should be able to apply `disabled` to all questions
// without being overriden by the `disabled` prop of the individual question.
export interface Question {
	/**
	 * Question text
	 */
	question: string;

	/**
	 * Answer options
	 */
	answers: QuizQuestionAnswer[];

	/**
	 * Value of the correct answer
	 */
	correctAnswer: QuizQuestionAnswer["value"];

	/**
	 * Change event handler, called when an answer is selected
	 */
	onChange?: (selectedOption: number) => void;

	/**
	 * Information needed to render the validation status
	 */
	validation?: QuizQuestionValidation;

	/**
	 * Value of the selected answer
	 */
	selectedAnswer?: number;
}
