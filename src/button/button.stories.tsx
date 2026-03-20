import React, { useState } from "react";
import { fn } from "storybook/test";
import preview from "#.storybook/preview";

import { FormControl } from "../form-control";
import { FormGroup } from "../form-group";
import { ControlLabel } from "../control-label";
import { Button } from ".";

const meta = preview.meta({
	title: "Components/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {
		controls: {
			include: [
				"children",
				"variant",
				"size",
				"disabled",
				"block",
				"href",
				"download",
				"target",
				"onClick",
			],
		},
	},
	args: {
		onClick: fn(),
	},
	argTypes: {
		variant: {
			options: ["primary", "danger", "info"],
		},
		size: {
			options: ["small", "medium", "large"],
		},
		disabled: {
			options: [true, false],
			control: { type: "radio" },
		},
		block: {
			options: [true, false],
			control: { type: "radio" },
		},
		target: {
			options: ["_self", "_blank", "_parent", "_top"],
		},
		href: {
			control: { type: "text" },
		},
		download: {
			control: { type: "text" },
		},
	},
});

export const Default = meta.story({
	args: {
		children: "Button",
	},
});

export const Danger = meta.story({
	args: {
		variant: "danger",
		children: "Button",
	},
});

export const Info = meta.story({
	args: {
		variant: "info",
		children: "Button",
	},
});

export const Large = meta.story({
	args: {
		size: "large",
		children: "Button",
	},
});

export const Small = meta.story({
	args: {
		size: "small",
		children: "Button",
	},
});

export const Disabled = meta.story({
	args: {
		children: "Button",
		disabled: true,
	},
});

export const FullWidth = meta.story({
	args: {
		children: "Button",
		block: true,
	},
});

export const AsALink = meta.story({
	args: {
		children: "I'm a link that looks like a button",
		href: "https://www.freecodecamp.org",
	},
});

export const AsADownloadLink = meta.story({
	args: {
		children: "I'm a download link",
		href: "https://www.freecodecamp.org",
		download: "my_file.txt",
	},
});

const FormWithSubmitButton = () => {
	const [username, setUsername] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
	};

	const handleSubmit = () => {
		alert("Submitted");
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormGroup controlId="username">
				<ControlLabel>Username</ControlLabel>
				<FormControl
					componentClass="input"
					type="text"
					onChange={handleChange}
				/>
			</FormGroup>

			<Button type="submit" disabled={!username}>
				Submit
			</Button>
		</form>
	);
};

export const AsASubmitButton = meta.story({
	render: FormWithSubmitButton,
});

export default meta;
