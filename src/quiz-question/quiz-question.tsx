import React, { ReactNode } from "react";
import { RadioGroup } from "@headlessui/react";

import type { QuizQuestionAnswer, QuizQuestionProps } from "./types";
import { Answer } from "./answer";
import { QuestionLabel } from "../quiz/question-label";
import { OptionLabel } from "../quiz/option-label";

const QuestionText = ({
	question,
	position,
}: {
	question: ReactNode;
	position?: number;
}) => {
	if (position == null) {
		return <span className="text-foreground-primary">{question}</span>;
	}

	return (
		<span className="text-foreground-primary flex items-baseline">
			<span>{position}.</span>&nbsp;{question}
		</span>
	);
};

/**
 * QuizQuestion is a radio group that allows users to select a single option from a list of multiple options.
 * The component can be used as a standalone component or in a group of multiple questions.
 *
 * QuizQuestion does not track its selected option internally,
 * but instead, it provides a `selectedAnswer` and an `onChange` props,
 * giving the parent component full control over the selection handling logic.
 */
const QuizQuestion = <AnswerT extends number | string>({
	question,
	answers,
	required,
	disabled,
	selectedAnswer,
	onChange,
	position,
}: QuizQuestionProps<AnswerT>) => {
	const handleChange = (
		selectedOption: QuizQuestionAnswer<AnswerT>["value"],
	) => {
		if (!onChange) return;
		onChange(selectedOption);
	};

	return (
		<RadioGroup
			onChange={handleChange}
			aria-required={required}
			disabled={disabled}
			value={selectedAnswer ?? null}
		>
			<RadioGroup.Label className="block mb-[20px]">
				<QuestionText question={question} position={position} />
			</RadioGroup.Label>

			{answers.map(({ value, label, feedback, validation, action }) => {
				const checked = selectedAnswer === value;

				return (
					<Answer
						key={value}
						value={value}
						label={label}
						feedback={checked && validation && feedback}
						checked={checked}
						disabled={disabled}
						validation={validation}
						action={action}
					/>
				);
			})}
		</RadioGroup>
	);
};

QuizQuestion.QuestionLabel = QuestionLabel;
QuizQuestion.OptionLabel = OptionLabel;

export { QuizQuestion };
