import React from "react";
import { RadioGroup } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import { QuizQuestionValidation, type QuizQuestionAnswer } from "./types";
import { Spacer } from "../spacer";

interface AnswerProps extends QuizQuestionAnswer {
	checked?: boolean;
	disabled?: boolean;
	validation?: QuizQuestionValidation;
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
	"flex",
	"flex-col",
	"p-[20px]",
	"border-x-4",
	"border-t-4",
	"last:border-b-4",
	"border-background-tertiary",
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

export const Answer = ({
	value,
	label,
	disabled,
	checked,
	validation,
}: AnswerProps) => {
	const radioOptionCls = [
		...radioOptionDefaultClasses,
		...(disabled
			? ["aria-disabled:cursor-not-allowed", "aria-disabled:opacity-80"]
			: []),
	];

	return (
		<RadioGroup.Option
			key={value}
			value={value}
			className={radioOptionCls.join(" ")}
		>
			{({ active }) => (
				<>
					<div className="flex items-center">
						<RadioIcon active={active} checked={!!checked} />
						<RadioGroup.Label className="m-0 text-foreground-primary">
							{label}
						</RadioGroup.Label>
					</div>
					{checked && validation && (
						<>
							<Spacer size="s" />
							<div>
								<ValidationMessage
									state={validation.state}
									message={validation.message}
								/>
							</div>
						</>
					)}
				</>
			)}
		</RadioGroup.Option>
	);
};
