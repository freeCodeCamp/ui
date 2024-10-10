import { ReactNode } from "react";

export interface QuizQuestionAnswer<T extends number | string> {
	label: ReactNode;
	value: T;
	feedback?: ReactNode;

	/**
	 * Information needed to render the validation status
	 */
	validation?: QuizQuestionValidation;
}

export interface QuizQuestionValidation {
	state: "correct" | "incorrect";
	message: string;
}

export interface QuizQuestionProps<AnswerT extends number | string> {
	/**
	 * Question text, can be plain text or contain code.
	 * If the question text contains code, use the PrismFormatted component to ensure the code is rendered correctly.
	 */
	question: ReactNode;

	/**
	 * Answer options
	 */
	answers: QuizQuestionAnswer<AnswerT>[];

	/**
	 * Position of the question amongst its siblings
	 */
	position?: number;

	/**
	 * Whether the question is required
	 */
	required?: boolean;

	/**
	 * Whether the question is disabled
	 */
	disabled?: boolean;

	/**
	 * Value of the selected answer
	 */
	selectedAnswer?: AnswerT;

	/**
	 * Change event handler, called when an answer is selected
	 */
	onChange?: (selectedAnswer: AnswerT) => void;
}
