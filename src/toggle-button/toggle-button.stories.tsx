import React, { useState } from "react";
import { fn } from "storybook/test";
import preview from "#.storybook/preview";
import { ToggleButton } from ".";

const meta = preview.meta({
	title: "WIP/ToggleButton",
	component: ToggleButton,
	tags: ["autodocs"],
	parameters: {
		controls: {
			include: [
				"children",
				"bsStyle",
				"bsSize",
				"disabled",
				"checked",
				"onChange",
				"value",
				"name",
			],
		},
	},
	args: {
		onChange: fn(),
	},
	argTypes: {
		bsStyle: {
			options: ["primary"],
		},
		bsSize: {
			options: ["small", "medium", "large"],
		},
		disabled: {
			options: [true, false],
			control: { type: "radio" },
		},
		checked: {
			options: [true, false],
			control: { type: "radio" },
		},
		value: {
			type: { name: "string" },
		},
		name: {
			type: { name: "string" },
		},
	},
});

export const Default = meta.story({
	args: {
		children: "Off",
	},
});

export const Checked = meta.story({
	args: {
		checked: true,
		children: "On",
		value: "Value",
	},
});

export const Large = meta.story({
	args: {
		bsSize: "large",
		children: "Off",
	},
});

export const Medium = meta.story({
	args: {
		bsSize: "medium",
		children: "Off",
	},
});

export const Disabled = meta.story({
	args: {
		children: "Off",
		disabled: true,
	},
});

export const RadioChecked = meta.story({
	args: {
		type: "radio",
		children: "On",
		value: "radio",
		name: "radio",
		checked: true,
	},
});

export const RadioUnchecked = meta.story({
	args: {
		type: "radio",
		children: "Off",
		value: "radio",
		name: "radio",
	},
});

const InsideToggleGroupRender = () => {
	const [checked, setChecked] = useState(true);

	return (
		<>
			<ToggleButton
				checked={checked}
				onChange={(checked) => {
					setChecked(checked);
				}}
			>
				On
			</ToggleButton>
			<ToggleButton
				checked={!checked}
				onChange={(checked) => {
					setChecked(!checked);
				}}
			>
				Off
			</ToggleButton>
		</>
	);
};

export const InsideToggleGroup = meta.story({
	render: InsideToggleGroupRender,
});

export default meta;
