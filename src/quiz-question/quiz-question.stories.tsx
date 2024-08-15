import { Meta, StoryObj } from "@storybook/react";
import { QuizQuestion } from "./quiz-question";

const story = {
	title: "Components/QuizQuestion",
	component: QuizQuestion,
} satisfies Meta<typeof QuizQuestion>;

type Story = StoryObj<typeof QuizQuestion>;

export const Default: Story = {
	args: {
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		options: [
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		],
		onChange: () => {},
	},
};

export const Disabled: Story = {
	args: {
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		options: [
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		],
		onChange: () => {},
		disabled: true,
	},
};

export default story;
