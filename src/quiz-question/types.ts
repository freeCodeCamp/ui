export interface Option {
	label: string;
	value: number;
}

export interface Validation {
	state: "correct" | "incorrect";
	message: string;
}

export interface QuizQuestionProps {
	question: string;
	options: Option[];
	required?: boolean;
	disabled?: boolean;
	validation?: Validation;
	// `selectedOption` should not be `undefined`
	// or React will automatically consider QuizQuestion an uncontrolled component
	selectedOption: Option["value"] | null;
	onChange: ({
		questionId,
		selectedOption,
	}: {
		questionId: string;
		selectedOption: Option["value"];
	}) => void;
}

export interface RadioProps {
	label: string;
	value: number;
	checked?: boolean;
	disabled?: boolean;
}
