import React from "react";
import { StoryFn } from "@storybook/react";
import { OptionLabel, OptionLabelProps } from ".";

const story = {
	title: "components/OptionLabel",
	component: OptionLabel,
};

const Template: StoryFn<OptionLabelProps> = (args) => {
	return <OptionLabel {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	// default props go here
	questionText: "What is the capital of France?",
};

export default story;
