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
				<Col xs={10} md={4} className="bg-blue-700">
					<p className={"text-white px-3 py-2 text-center"}>Column 1</p>
				</Col>
				<Col xs={2} md={8} className="bg-blue-700">
					<p className={"text-white px-3 py-2 text-center"}>Column 2</p>
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
				<Col xs={4} md={6} className="bg-blue-700">
					<p className={"text-white px-3 py-2 text-center"}>Column 1</p>
				</Col>
				<Col xs={5} md={2} className="bg-blue-700">
					<p className={"text-white px-3 py-2 text-center"}>Column 2</p>
				</Col>
				<Col xs={3} md={4} className="bg-blue-700">
					<p className={"text-white px-3 py-2 text-center"}>Column 3</p>
				</Col>
			</>
		),
	},
};

export default story;
