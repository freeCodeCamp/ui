import React, { ReactNode } from "react";
import { RadioGroup } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import type {
	QuizQuestionValidation,
	QuizQuestionAnswer,
	QuizQuestionProps,
} from "./types";
import { Answer } from "./answer";

const QuestionText = ({
	question,
	position,
}: {
	question: ReactNode;
	position?: number;
}) => {
	if (position == null) {
		return <span className="text-foreground-primary text-md">{question}</span>;
	}

	return (
		<span className="text-foreground-primary text-md flex">
			<span>{position}.</span>
			&nbsp;
			{question}
		</span>
	);
};

const ValidationIcon = ({
	validation,
}: {
	validation: QuizQuestionValidation;
}) => {
	const { state, message } = validation;

	// Add top and bottom margins to the icon in order to horizontally align it with the first line of question text.
	// The math is as follows:
	// top/bottom margin = (text font size * text line height - icon height) / 2
	// Note: The text font size and text line height values need to match the ones specified in tailwind.config.js
	const iconMarginClass = "my-[calc((18px*1.42857143-14px)/2)]";

	return state === "correct" ? (
		<FontAwesomeIcon
			icon={faCheck}
			size="sm"
			className={`text-background-success me-[8px] ${iconMarginClass}`}
			aria-label={message}
			aria-hidden={false}
		/>
	) : (
		<FontAwesomeIcon
			icon={faXmark}
			size="sm"
			className={`text-background-danger me-[8px] ${iconMarginClass}`}
			aria-label={message}
			aria-hidden={false}
		/>
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
			<RadioGroup.Label className="flex mb-[20px]">
				{validation && <ValidationIcon validation={validation} />}
				<QuestionText question={question} position={position} />
			</RadioGroup.Label>

			{answers.map(({ value, label }) => (
				<Answer
					key={value}
					value={value}
					label={label}
					checked={selectedAnswer === value}
					disabled={disabled}
				/>
			))}
		</RadioGroup>
	);
};
