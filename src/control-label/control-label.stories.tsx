import preview from "#.storybook/preview";
import { ControlLabel } from ".";

const meta = preview.meta({
	title: "Components/ControlLabel",
	component: ControlLabel,
	tags: ["autodocs"],
	parameters: {
		controls: {
			include: ["className"],
		},
	},
	argTypes: {
		className: { control: { type: "text" } },
		htmlFor: { control: { type: "text" } },
		srOnly: { options: ["srOnly", ""] },
	},
});

export const Default = meta.story({
	args: {
		children: "Control Label",
	},
});

export default meta;
