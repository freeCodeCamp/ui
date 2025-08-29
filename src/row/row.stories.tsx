import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Row } from ".";
import { Col } from "../col";

const story = {
	title: "Components/Row",
	component: Row,
} satisfies Meta<typeof Row>;

type Story = StoryObj<typeof Row>;

export const Default: Story = {
	args: {
		children: (
			<>
				<Col
					xs={10}
					md={4}
					className="bg-blue-700 my-2 px-3 py-2 text-white text-center"
				>
					Column 1
				</Col>
				<Col
					xs={2}
					md={8}
					className="bg-blue-700 my-2 px-3 py-2 text-white text-center"
				>
					Column 2
				</Col>
			</>
		),
	},
};

export const Horizontal: Story = {
	args: {
		orientation: "horizontal",
		children: (
			<>
				<Col
					xs={4}
					md={6}
					className="bg-blue-700 border-1 border-gray-150 px-3 py-2 text-white text-center"
				>
					Column 1
				</Col>
				<Col
					xs={5}
					md={2}
					className="bg-blue-700 border-1 border-gray-150 px-3 py-2 text-white text-center"
				>
					Column 2
				</Col>
				<Col
					xs={3}
					md={4}
					className="bg-blue-700 border-1 border-gray-150 px-3 py-2 text-white text-center"
				>
					Column 3
				</Col>
			</>
		),
	},
};

export default story;
