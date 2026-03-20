import preview from "#.storybook/preview";
import { HelpBlock } from "./help-block";

const meta = preview.meta({
	title: "Components/HelpBlock",
	component: HelpBlock,
	tags: ["autodocs"],
	parameters: {
		controls: {
			include: ["className", "children"],
		},
	},
});

export const Default = meta.story({
	args: {
		children: "This is a HelpBlock",
	},
});

export default meta;
