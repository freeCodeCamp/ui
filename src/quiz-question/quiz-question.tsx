import React from "react";
import { RadioGroup } from "@headlessui/react";

import { type QuizQuestionProps, type RadioProps, type Option } from "./types";

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
	"items-center",
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

const RadioOption = ({ value, label, disabled }: RadioProps) => {
	const radioOptionCls = [
		...radioOptionDefaultClasses,
		...(disabled ? ["cursor-not-allowed", "opacity-80"] : []),
	];

	return (
		<RadioGroup.Option
			key={value}
			value={value}
			className={radioOptionCls.join(" ")}
		>
			{({ active, checked }) => (
				<>
					<RadioIcon active={active} checked={checked} />
					<RadioGroup.Label className="m-0 text-foreground-primary" as="p">
						{label}
					</RadioGroup.Label>
				</>
			)}
		</RadioGroup.Option>
	);
};

export const QuizQuestion = ({
	question,
	options,
	required,
	disabled,
	onChange,
}: QuizQuestionProps) => {
	const handleChange = (selectedOption: Option["value"]) => {
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
		>
			<RadioGroup.Label className="block mb-[20px] text-foreground-primary">
				{question}
			</RadioGroup.Label>

			{options.map(({ value, label }) => (
				<RadioOption
					key={value}
					value={value}
					label={label}
					disabled={disabled}
				/>
			))}
		</RadioGroup>
	);
};
