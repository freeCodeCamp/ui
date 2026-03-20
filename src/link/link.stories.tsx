import preview from "#.storybook/preview";
import { Link } from ".";

const meta = preview.meta({
	title: "Components/Link",
	component: Link,
	tags: ["autodocs"],
});

export const Default = meta.story({
	args: {
		children: "Go to freeCodeCamp",
		to: "https://www.freecodecamp.org",
	},
});

export const Block = meta.story({
	args: {
		children: "Go to freeCodeCamp",
		to: "https://www.freecodecamp.org",
		block: true,
	},
});

export default meta;
