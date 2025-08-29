import React from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Container } from ".";
import { Row } from "../row";
import { Col } from "../col";

const story = {
	title: "Components/Container",
	component: Container,
	argTypes: {
		fluid: {
			control: {
				type: "boolean",
			},
		},
	},
} satisfies Meta<typeof Container>;

const Template: StoryFn<typeof Container> = (args) => {
	return (
		<Container {...args}>
			<Row>
				<Col xs={12} className="bg-blue-700 px-3 py-2 text-white text-center">
					Column
				</Col>
			</Row>
		</Container>
	);
};

export const Default: StoryObj<typeof Container> = {
	render: Template,
	args: {},
	parameters: {
		docs: {
			description: {
				story: `Default container: centers content with horizontal padding and applies fixed max-widths.
- For medium screens (768px and up), the max width is 750px.
- For screens around 992px and wider, the max width is 970px.
- For large screens (1200px and wider), the max width is 1170px.
`,
			},
		},
	},
};

export const Fluid: StoryObj<typeof Container> = {
	render: Template,
	args: { fluid: true },
	parameters: {
		docs: {
			description: {
				story:
					"Fluid container: centers content with horizontal padding and stretches to full viewport width.",
			},
		},
	},
};

export default story;
