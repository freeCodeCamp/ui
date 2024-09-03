export interface QuizQuestionOption {
	label: string;
	value: number;
}

interface QuizQuestionValidation {
	state: "correct" | "incorrect";
	message: string;
}

export interface QuizQuestionProps {
	/**
	 * Question text
	 */
	question: string;

	/**
	 * Answer options
	 */
	options: QuizQuestionOption[];

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
	 * Value of the selected option
	 */
	selectedOption?: QuizQuestionOption["value"];

	/**
	 * Change event handler, called when an option is selected
	 */
	onChange?: ({
		questionId,
		selectedOption,
	}: {
		/**
		 * ID of the question
		 */
		questionId: string;

		/**
		 * Value of the selected option
		 */
		selectedOption: QuizQuestionOption["value"];
	}) => void;
}
