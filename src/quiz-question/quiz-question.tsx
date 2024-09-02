import React from "react";
import { RadioGroup } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import {
	type QuizQuestionOption,
	type QuizQuestionProps,
	type Validation,
} from "./types";

import { Option } from "./option";

const ValidationIcon = ({ state, message }: Validation) => {
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

export const QuizQuestion = ({
	question,
	options,
	required,
	disabled,
	validation,
	selectedOption,
	onChange,
}: QuizQuestionProps) => {
	const handleChange = (selectedOption: QuizQuestionOption["value"]) => {
		onChange({
			questionId: question,
			selectedOption,
		});
	};

	return (
		<RadioGroup
			onChange={handleChange}
			aria-required={required}
			disabled={disabled}
			// `selectedOption` should not be `undefined`
			// or React will automatically consider QuizQuestion an uncontrolled component
			// Ref: https://react.dev/reference/react-dom/components/input#im-getting-an-error-a-component-is-changing-an-uncontrolled-input-to-be-controlled
			value={selectedOption ?? null}
		>
			<RadioGroup.Label className="block mb-[20px]">
				{validation && (
					<ValidationIcon
						state={validation.state}
						message={validation.message}
					/>
				)}
				<span className="text-foreground-primary">{question}</span>
			</RadioGroup.Label>

			{options.map(({ value, label }) => (
				<Option
					key={value}
					value={value}
					label={label}
					checked={selectedOption === value}
					disabled={disabled}
				/>
			))}
		</RadioGroup>
	);
};
