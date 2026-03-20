import React from "react";
import preview from "#.storybook/preview";
import { FormControl } from "../form-control";

import { ControlLabel } from "../control-label";
import { FormGroup } from ".";

const meta = preview.meta({
	title: "Components/FormGroup",
	component: FormGroup,
	tags: ["autodocs"],
	argTypes: {
		children: { control: { type: "object" } },
		className: { control: { type: "text" } },
		controlId: { control: { type: "text" } },
		as: { control: { type: "text" } },
		validationState: { options: ["success", "warning", "error", null] },
	},
});

const Child = () => {
	return (
		<>
			<ControlLabel>Label</ControlLabel>
			<FormControl type={"text"} placeholder="Hello World" />
		</>
	);
};

export const Default = meta.story({
	args: {
		children: <Child />,
	},
});

export const Success = meta.story({
	args: {
		children: <Child />,
		validationState: "success",
	},
});

export const Error = meta.story({
	args: {
		children: <Child />,
		validationState: "error",
	},
});

export const Warning = meta.story({
	args: {
		children: <Child />,
		validationState: "warning",
	},
});

export default meta;
