import type { QuizQuestionAnswer, QuizQuestionProps } from "../quiz-question";
import type { MultipleAnswerQuizQuestionProps } from "../multiple-answer-quiz-question";

export interface QuizProps<AnswerT extends number | string> {
	questions: Question<AnswerT>[];
	disabled?: boolean;
	required?: boolean;
}

interface QuestionBase<AnswerT extends number | string> {
	question: QuizQuestionProps<AnswerT>["question"];
	answers: QuizQuestionAnswer<AnswerT>[];
}

interface SingleAnswerQuestionBase<
	AnswerT extends number | string,
> extends QuestionBase<AnswerT> {
	type?: "single";
	correctAnswer: AnswerT;
	onChange?: (selectedAnswer: AnswerT) => void;
	selectedAnswer?: AnswerT;
}

interface MultipleAnswerQuestionBase<
	AnswerT extends number | string,
> extends QuestionBase<AnswerT> {
	type: "multiple";
	correctAnswers: AnswerT[];
	onChange?: (selectedAnswers: AnswerT[]) => void;
	selectedAnswers?: AnswerT[];
}

type AudioProps =
	| {
			audioUrl?: never;
			audioAriaLabel?: never;
			transcript?: never;
			audioStartTime?: never;
			audioFinishTime?: never;
	  }
	| {
			audioUrl: string;
			audioAriaLabel: string;
			transcript: string;
			audioStartTime?: number;
			audioFinishTime?: number;
	  };

export type SingleAnswerQuestion<AnswerT extends number | string> =
	SingleAnswerQuestionBase<AnswerT> & AudioProps;

export type MultipleAnswerQuestion<AnswerT extends number | string> =
	MultipleAnswerQuestionBase<AnswerT> &
		Omit<
			MultipleAnswerQuizQuestionProps<AnswerT>,
			| "question"
			| "answers"
			| "position"
			| "disabled"
			| "required"
			| "selectedAnswers"
			| "onChange"
		> &
		AudioProps;

export type Question<AnswerT extends number | string> =
	| SingleAnswerQuestion<AnswerT>
	| MultipleAnswerQuestion<AnswerT>;
