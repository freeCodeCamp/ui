import React from "react";
import { StoryFn } from "@storybook/react";
import { QuestionLabel, QuestionLabelProps } from ".";

const story = {
	title: "components/QuestionLabel",
	component: QuestionLabel,
};

const Template: StoryFn<QuestionLabelProps> = (args) => {
	return <QuestionLabel {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	// default props go here
	question: "What is the capital of France?",
};

export default story;
