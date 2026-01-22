import React from "react";
import { RadioGroup } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faXmark,
	faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "../button";
import { QuizQuestionValidation, type QuizQuestionAnswer } from "./types";

interface AnswerProps<
	AnswerT extends number | string,
> extends QuizQuestionAnswer<AnswerT> {
	checked?: boolean;
	disabled?: boolean;
}

const radioIconDefaultClasses = [
	"block",
	"relative",
	"w-[20px]",
	"h-[20px]",
	"bg-background-secondary",
	"rounded-full",
	"border-2",
	"border-foreground-primary",
	"me-[15px]",
	"shrink-0",
];

const radioIconActiveClasses = [
	"outline",
	"outline-3",
	"outline-focus-outline-color",
	"outline-offset-2",
];

const radioIconCheckedClasses = [
	"before:absolute",
	"before:w-[10px]",
	"before:h-[10px]",
	"before:bg-foreground-primary",
	"before:rounded-full",
	"before:top-1/2",
	"before:start-1/2",
	"before:-translate-x-1/2",
	"before:-translate-y-1/2",
];

const radioOptionDefaultClasses = [
	// Set `focus:outline-none` to remove the Headless UI's default focus outline,
	// which highlights the entire option div while we only want to highlight the radio icon.
	"focus:outline-none",
	"cursor-pointer",
	"p-[20px]",
	"flex",
	"items-center",
	"col-start-1",
	"row-start-1",
];

const radioWrapperDefaultClasses = [
	"grid",
	"grid-cols-1",
	"grid-rows-[auto_auto]",
	"border-x-4",
	"border-t-4",
	"last:border-b-4",
	"border-background-tertiary",
	"bg-background-primary",
];

const RadioIcon = ({
	active,
	checked,
}: {
	active: boolean;
	checked: boolean;
}) => {
	let radioCls = [...radioIconDefaultClasses];

	if (active) {
		radioCls = radioCls.concat(radioIconActiveClasses);
	}
	if (checked) {
		radioCls = radioCls.concat(radioIconCheckedClasses);
	}

	return <span className={radioCls.join(" ")}></span>;
};

const ValidationMessage = ({ state, message }: QuizQuestionValidation) => {
	return state === "correct" ? (
		<p className="text-background-success">
			<FontAwesomeIcon
				icon={faCheck}
				className="text-background-success me-[8px]"
			/>
			{message}
		</p>
	) : (
		<p className="text-background-danger">
			<FontAwesomeIcon
				icon={faXmark}
				className="text-background-danger me-[8px]"
			/>
			{message}
		</p>
	);
};

export const Answer = <AnswerT extends number | string>({
	value,
	label,
	disabled,
	checked,
	validation,
	feedback,
	action,
}: AnswerProps<AnswerT>) => {
	const labelId = `quiz-answer-${value}-label`;

	const getRadioWrapperCls = () => {
		const cls = [...radioWrapperDefaultClasses];

		// Add second column for action button when action is provided
		if (action) {
			cls.push("grid-cols-[1fr_auto]", "gap-x-4");
		}

		if (validation?.state === "correct")
			cls.push("border-l-background-success");
		if (validation?.state === "incorrect")
			cls.push("border-l-background-danger");

		return cls.join(" ");
	};

	const getRadioOptionCls = () => {
		const cls = [...radioOptionDefaultClasses];

		if (disabled)
			cls.push("aria-disabled:cursor-not-allowed", "aria-disabled:opacity-80");
		return cls.join(" ");
	};

	return (
		<div className={getRadioWrapperCls()}>
			<RadioGroup.Option
				key={value}
				value={value}
				data-value={value}
				className={getRadioOptionCls()}
			>
				{({ active }) => (
					<>
						<RadioIcon active={active} checked={!!checked} />
						<RadioGroup.Label
							id={labelId}
							className="m-0 text-foreground-primary break-words min-w-0"
						>
							{label}
						</RadioGroup.Label>
					</>
				)}
			</RadioGroup.Option>

			{action && (
				<div className="col-start-2 row-start-1 flex items-center justify-center pe-[20px]">
					<Button
						onClick={action.onClick}
						aria-label={action.ariaLabel}
						aria-describedby={labelId}
					>
						<FontAwesomeIcon icon={faMicrophone} />
					</Button>
				</div>
			)}

			{(!!validation || !!feedback) && (
				// Remove the default bottom margin of the validation message `p`,
				// and apply a bottom padding of 20px to match the top padding of RadioGroup.Option
				// Span both columns for feedback
				<div className="col-span-2 row-start-2 ps-[20px] pb-[20px] [&>p:last-child]:m-0">
					{validation && (
						<ValidationMessage
							state={validation.state}
							message={validation.message}
						/>
					)}
					{feedback && (
						<div className="text-foreground-primary">{feedback}</div>
					)}
				</div>
			)}
		</div>
	);
};
