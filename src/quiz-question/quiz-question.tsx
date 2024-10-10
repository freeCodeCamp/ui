import React, { ReactNode } from "react";
import { RadioGroup } from "@headlessui/react";

import type { QuizQuestionAnswer, QuizQuestionProps } from "./types";
import { Answer } from "./answer";

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
		<span className="text-foreground-primary flex">
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
export const QuizQuestion = ({
	question,
	answers,
	required,
	disabled,
	validation,
	selectedAnswer,
	onChange,
	position,
}: QuizQuestionProps) => {
	const handleChange = (selectedOption: QuizQuestionAnswer["value"]) => {
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
			<RadioGroup.Label className="block mb-[20px]">
				<QuestionText question={question} position={position} />
			</RadioGroup.Label>

			{answers.map(({ value, label, feedback }) => {
				const checked = selectedAnswer === value;
				return (
					<Answer
						key={value}
						value={value}
						label={label}
						feedback={checked && validation && feedback}
						checked={checked}
						disabled={disabled}
						validation={checked ? validation : undefined}
					/>
				);
			})}
		</RadioGroup>
	);
};
