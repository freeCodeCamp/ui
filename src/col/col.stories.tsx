import React from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Col } from ".";

const story = {
	title: "Components/Col",
	component: Col,
	argTypes: {
		className: { control: { type: "text" } },
		xs: { options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] },
		sm: { options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] },
		md: { options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] },
		lg: { options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] },
		xsOffset: { options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] },
		smOffset: { options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] },
		mdOffset: { options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] },
		lgOffset: {
			options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined],
		},
	},
} satisfies Meta<typeof Col>;

const Template: StoryFn<typeof Col> = (args) => {
	return (
		<Col className="bg-gray-700" {...args}>
			<p>Random text to test the element width</p>
		</Col>
	);
};

export const Default: StoryObj<typeof Col> = {
	render: Template,

	args: {
		// default props go here
	},
};

export default story;
