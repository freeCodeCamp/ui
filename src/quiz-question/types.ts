import { ReactNode } from "react";

export interface QuizQuestionAnswer {
	label: ReactNode;
	value: number;
}

export interface QuizQuestionValidation {
	state: "correct" | "incorrect";
	message: string;
}

export interface QuizQuestionProps {
	/**
	 * Question text
	 */
	question: ReactNode;

	/**
	 * Answer options
	 */
	answers: QuizQuestionAnswer[];

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
	 * Information needed to render the validation status
	 */
	validation?: QuizQuestionValidation;

	/**
	 * Value of the selected answer
	 */
	selectedAnswer?: QuizQuestionAnswer["value"];

	/**
	 * Change event handler, called when an answer is selected
	 */
	onChange?: (selectedAnswer: QuizQuestionAnswer["value"]) => void;
}
