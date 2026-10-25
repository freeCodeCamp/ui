import React from "react";

import type { QuizQuestionAnswer } from "../quiz-question";
import { Audio } from "../quiz-question/audio";
import { Transcript } from "../quiz-question/transcript";
import { MultipleAnswer } from "./answer";
import type { MultipleAnswerQuizQuestionProps } from "./types";

const QuestionText = ({
	question,
	position,
}: {
	question: React.ReactNode;
	position?: number;
}) => (
	<span className="text-foreground-primary">
		{position == null ? null : `${position}. `}
		{question}
	</span>
);

/**
 * MultipleAnswerQuizQuestion lets users select more than one answer.
 * Selection state is controlled by the parent through selectedAnswers and onChange.
 */
export const MultipleAnswerQuizQuestion = <AnswerT extends number | string>({
	question,
	answers,
	position,
	required,
	disabled,
	selectedAnswers = [],
	onChange,
	audioUrl,
	audioAriaLabel,
	transcript,
	audioStartTime,
	audioFinishTime,
}: MultipleAnswerQuizQuestionProps<AnswerT>) => {
	const handleChange = (
		value: QuizQuestionAnswer<AnswerT>["value"],
		checked: boolean,
	) => {
		if (!onChange) {
			return;
		}

		const nextAnswers = checked
			? [...selectedAnswers, value]
			: selectedAnswers.filter((selected) => selected !== value);

		onChange(nextAnswers);
	};

	return (
		<fieldset
			className="m-0 min-w-0 border-0 p-0"
			disabled={disabled}
			aria-required={required}
		>
			<legend className="mb-[20px] block">
				<QuestionText question={question} position={position} />
			</legend>

			{audioUrl && (
				<div className="mb-[20px] ps-4 w-full max-w-lg space-y-3">
					<Audio
						src={audioUrl}
						aria-label={audioAriaLabel}
						startTime={audioStartTime}
						finishTime={audioFinishTime}
					/>
					<Transcript transcript={transcript!} />
				</div>
			)}

			{answers.map(({ value, label, feedback, validation, action }) => (
				<MultipleAnswer
					key={value}
					value={value}
					label={label}
					feedback={feedback}
					validation={validation}
					action={action}
					checked={selectedAnswers.includes(value)}
					disabled={disabled}
					onChange={(checked) => handleChange(value, checked)}
				/>
			))}
		</fieldset>
	);
};
