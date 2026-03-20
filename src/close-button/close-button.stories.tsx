import preview from "#.storybook/preview";
import { CloseButton } from "./close-button";

const meta = preview.meta({
	title: "Components/CloseButton",
	component: CloseButton,
	tags: ["autodocs"],
});

export const Basic = meta.story({
	args: {},
});

export default meta;
