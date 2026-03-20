import preview from "#.storybook/preview";

import { Audio } from "./audio";

const meta = preview.meta({
	component: Audio,
	title: "Internal Components/Audio",
	tags: ["autodocs"],
	parameters: {
		controls: { expanded: true },
	},
});

export default meta;

export const Default = meta.story({
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
});

export const WithAriaLabel = meta.story({
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
});

export const WithAudioSegment = meta.story({
	args: {
		src: "https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
		"aria-label": "Audio segment demo",
		startTime: 2,
		finishTime: 5,
	},
	parameters: {
		docs: {
			description: {
				story:
					"This story demonstrates the Audio component with `startTime` and `finishTime` props, which play only a segment of the audio instead of the full clip.",
			},
			source: {
				code: `<Audio
  src="https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3"
  aria-label="Audio segment demo"
  startTime={2}
  finishTime={5}
/>`,
			},
		},
	},
});
