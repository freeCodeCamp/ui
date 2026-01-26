import React, { ReactNode } from "react";
import { RadioGroup } from "@headlessui/react";

import type { QuizQuestionAnswer, QuizQuestionProps } from "./types";
import { Answer } from "./answer";
import { Audio } from "./audio";
import { Transcript } from "./transcript";

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
			<span>{position}.</span>
			&nbsp;
			{question}
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
export const QuizQuestion = <AnswerT extends number | string>({
	question,
	answers,
	required,
	disabled,
	selectedAnswer,
	onChange,
	position,
	audioUrl,
	audioAriaLabel,
	transcript,
}: QuizQuestionProps<AnswerT>) => {
	const handleChange = (
		selectedOption: QuizQuestionAnswer<AnswerT>["value"],
	) => {
		if (!onChange) {
			return;
		}

		onChange(selectedOption);
	};

	return (
		<RadioGroup
			onChange={handleChange}
			aria-required={required}
			disabled={disabled}
			// `selectedAnswer` should not be `undefined`
			// or React will automatically consider QuizQuestion an uncontrolled component
			// Ref: https://react.dev/reference/react-dom/components/input#im-getting-an-error-a-component-is-changing-an-uncontrolled-input-to-be-controlled
			value={selectedAnswer ?? null}
		>
			<div className="mb-[20px]">
				<RadioGroup.Label className="block">
					<QuestionText question={question} position={position} />
				</RadioGroup.Label>

				{audioUrl && (
					<div className="ps-4">
						<Audio
							src={audioUrl}
							aria-label={audioAriaLabel}
							className="mt-3"
						/>
						<Transcript transcript={transcript} />
					</div>
				)}
			</div>

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
