import type { Meta, StoryObj } from "@storybook/react";

import { Audio } from "./audio";

const meta: Meta<typeof Audio> = {
	component: Audio,
	title: "Components/Audio",
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

type Story = StoryObj<typeof Audio>;

export const Default: Story = {
	args: {
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
	},
};

export const WithAriaLabel: Story = {
	args: {
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
		"aria-label": "Example audio clip",
	},
};

export const WithCustomClass: Story = {
	args: {
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
		className: "mt-4",
	},
};
