import React from "react";
import { RadioGroup } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import { type QuizQuestionOption, type QuizQuestionProps } from "./types";

import { Option } from "./option";

/**
 * QuizQuestion is a radio group that allows users to select a single option from a list of multiple options.
 * The component can be used as a standalone component or in a group of multiple questions.
 *
 * QuizQuestion does not track its selected option internally,
 * but instead, it provides a `selectedValue` and an `onChange` props,
 * giving the parent component full control over the selection handling logic.
 */
export const QuizQuestion = ({
	question,
	options,
	required,
	disabled,
	validation,
	selectedValue,
	onChange,
}: QuizQuestionProps) => {
	const handleChange = (selectedValue: QuizQuestionOption["value"]) => {
		if (!onChange) {
			return;
		}

		onChange({
			questionId: question,
			selectedValue,
		});
	};

	const maybeRenderValidationIcon = () => {
		if (!validation) {
			return;
		}

		const { state, message } = validation;

		return state === "correct" ? (
			<FontAwesomeIcon
				icon={faCheck}
				className="text-background-success me-[8px]"
				aria-label={message}
				aria-hidden={false}
			/>
		) : (
			<FontAwesomeIcon
				icon={faXmark}
				className="text-background-danger me-[8px]"
				aria-label={message}
				aria-hidden={false}
			/>
		);
	};

	return (
		<RadioGroup
			onChange={handleChange}
			aria-required={required}
			disabled={disabled}
			// `selectedValue` should not be `undefined`
			// or React will automatically consider QuizQuestion an uncontrolled component
			// Ref: https://react.dev/reference/react-dom/components/input#im-getting-an-error-a-component-is-changing-an-uncontrolled-input-to-be-controlled
			value={selectedValue ?? null}
		>
			<RadioGroup.Label className="block mb-[20px]">
				{maybeRenderValidationIcon()}
				<span className="text-foreground-primary">{question}</span>
			</RadioGroup.Label>

			{options.map(({ value, label }) => (
				<Option
					key={value}
					value={value}
					label={label}
					checked={selectedValue === value}
					disabled={disabled}
				/>
			))}
		</RadioGroup>
	);
};
