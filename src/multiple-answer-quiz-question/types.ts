import type { ReactNode } from "react";

import type { QuizQuestionAnswer } from "../quiz-question";

interface MultipleAnswerQuizQuestionBaseProps<AnswerT extends number | string> {
	question: ReactNode;
	answers: QuizQuestionAnswer<AnswerT>[];
	position?: number;
	required?: boolean;
	disabled?: boolean;
	selectedAnswers?: AnswerT[];
	onChange?: (selectedAnswers: AnswerT[]) => void;
}

type MultipleAnswerQuizQuestionWithoutAudio<AnswerT extends number | string> =
	MultipleAnswerQuizQuestionBaseProps<AnswerT> & {
		audioUrl?: never;
		audioAriaLabel?: never;
		transcript?: never;
		audioStartTime?: never;
		audioFinishTime?: never;
	};

type MultipleAnswerQuizQuestionWithAudio<AnswerT extends number | string> =
	MultipleAnswerQuizQuestionBaseProps<AnswerT> & {
		audioUrl: string;
		audioAriaLabel: string;
		transcript: string;
		audioStartTime?: number;
		audioFinishTime?: number;
	};

export type MultipleAnswerQuizQuestionProps<AnswerT extends number | string> =
	| MultipleAnswerQuizQuestionWithoutAudio<AnswerT>
	| MultipleAnswerQuizQuestionWithAudio<AnswerT>;
