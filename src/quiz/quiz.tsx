import React from "react";

import { QuizQuestion } from "../quiz-question";
import { PrismFormatted } from "../prism-formatted";
import { type QuizProps } from "./types";

type LabelProps = { text: string };

const removeParagraphTags = (text: string): string => {
	// Remove a single pair of wrapping <p>...</p> tags if present
	// without affecting inner HTML or code blocks.
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

type QuizComponent = (<AnswerT extends number | string>(
	props: QuizProps<AnswerT>,
) => JSX.Element) & {
	QuestionLabel: typeof QuestionLabel;
	OptionLabel: typeof OptionLabel;
};

const QuizBase = <AnswerT extends number | string>({
	questions,
	disabled,
	required,
}: QuizProps<AnswerT>) => {
	return (
		<ul className="flex flex-col gap-y-[48px] list-none">
			{questions.map((question, index) => (
				<li key={index}>
					<QuizQuestion
						{...question}
						position={index + 1}
						disabled={disabled}
						required={required}
					/>
				</li>
			))}
		</ul>
	);
};

export const Quiz: QuizComponent = Object.assign(QuizBase, {
	QuestionLabel,
	OptionLabel,
});
