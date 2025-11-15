import React, { ReactNode } from "react";
import { RadioGroup } from "@headlessui/react";

import type { QuizQuestionAnswer, QuizQuestionProps } from "./types";
import { Answer } from "./answer";
import { PrismFormatted } from "../prism-formatted";

type LabelProps = { text: string };

const removeParagraphTags = (text: string): string => {
	if (text.startsWith("<p>") && text.endsWith("</p>")) {
		return text.slice(3, -4);
	}
	return text;
};

const defaultGetCodeBlockAriaLabel = (codeName: string) =>
	`${codeName} code example`;

const QuestionLabel = ({ text }: LabelProps) => {
	return (
		<PrismFormatted
			text={text}
			getCodeBlockAriaLabel={defaultGetCodeBlockAriaLabel}
		/>
	);
};

const OptionLabel = ({ text }: LabelProps) => {
	const cleanedText = removeParagraphTags(text);
	return (
		<PrismFormatted
			text={cleanedText}
			useSpan
			noAria
			getCodeBlockAriaLabel={defaultGetCodeBlockAriaLabel}
		/>
	);
};

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

type QuizQuestionComponent = (<AnswerT extends number | string>(
	props: QuizQuestionProps<AnswerT>,
) => JSX.Element) & {
	QuestionLabel: typeof QuestionLabel;
	OptionLabel: typeof OptionLabel;
};

/**
 * QuizQuestion is a radio group that allows users to select a single option from a list of multiple options.
 * The component can be used as a standalone component or in a group of multiple questions.
 *
 * QuizQuestion does not track its selected option internally,
 * but instead, it provides a `selectedAnswer` and an `onChange` props,
 * giving the parent component full control over the selection handling logic.
 */
const QuizQuestionBase = <AnswerT extends number | string>({
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

			{answers.map(({ value, label, feedback, validation }) => {
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
					/>
				);
			})}
		</RadioGroup>
	);
};

export const QuizQuestion: QuizQuestionComponent = Object.assign(
	QuizQuestionBase,
	{
		QuestionLabel,
		OptionLabel,
	},
);
