export interface Option {
	label: string;
	value: number;
}

export interface QuizQuestionProps {
	question: string;
	options: Option[];
	required?: boolean;
	disabled?: boolean;
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
	disabled?: boolean;
}
