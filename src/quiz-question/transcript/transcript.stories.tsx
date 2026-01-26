import type { Meta, StoryObj } from "@storybook/react";

import { Transcript } from "./transcript";

const meta: Meta<typeof Transcript> = {
	component: Transcript,
	title: "Components/Transcript",
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

type Story = StoryObj<typeof Transcript>;

export const WithoutSpeakers: Story = {
	args: {
		transcript: `In this lesson, we'll explore the fundamentals of JavaScript.
JavaScript is a versatile programming language used for web development.
It allows you to create interactive and dynamic web pages.
Let's start by understanding variables and data types.`,
	},
};

export const WithSpeakers: Story = {
	args: {
		transcript: `Tom: Hi, that's right. I'm Tom McKenzie.
Maria: Welcome aboard, Tom. How do you like California so far?
Tom: I like it. It's different from Texas, but I like it here.`,
	},
};
