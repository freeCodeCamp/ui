import type { Meta, StoryObj } from "@storybook/react";

import { Audio } from "./audio";

const meta: Meta<typeof Audio> = {
	component: Audio,
	title: "Internal Components/Audio",
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

type Story = StoryObj<typeof Audio>;

export const Default: Story = {
	args: {
		src: "https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
		"aria-label": "Audio player",
	},
	parameters: {
		docs: {
			source: {
				code: `<Audio 
  src="https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3"
  aria-label="Audio player"
/>`,
			},
		},
	},
};

export const WithAriaLabel: Story = {
	args: {
		src: "https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
		"aria-label": "Example audio clip",
	},
	parameters: {
		docs: {
			source: {
				code: `<Audio 
  src="https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3"
  aria-label="Example audio clip"
/>`,
			},
		},
	},
};

export const WithCustomClass: Story = {
	args: {
		src: "https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
		"aria-label": "Audio player",
		className: "mt-4",
	},
	parameters: {
		docs: {
			source: {
				code: `<Audio 
  src="https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3"
  aria-label="Audio player"
  className="mt-4"
/>`,
			},
		},
	},
};

export const WithAudioSegment: Story = {
	args: {
		src: "https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
		"aria-label": "Audio segment demo",
		startTime: 2,
		finishTime: 5,
		className: "mt-4",
	},
	parameters: {
		docs: {
			source: {
				code: `<Audio 
  src="https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3"
  aria-label="Audio segment demo"
  startTime={2}
  finishTime={5}
  className="mt-4"
/>`,
			},
		},
	},
};
