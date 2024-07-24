import React from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Spacer } from "./spacer";
import { Button } from "../button";

const story = {
	title: "Components/Spacer",
	component: Spacer,
} satisfies Meta<typeof Spacer>;

type Story = StoryObj<typeof Spacer>;

const Template: StoryFn<typeof Spacer> = (args) => (
	<>
		<Button>Button one</Button>
		<Spacer {...args} />
		<Button>Button two</Button>
	</>
);

export const XXS: Story = {
	render: Template,
	args: {
		size: "xxs",
	},
};

export const XS: Story = {
	render: Template,
	args: {
		size: "xs",
	},
};

export const S: Story = {
	render: Template,
	args: {
		size: "s",
	},
};

export const M: Story = {
	render: Template,
	args: {
		size: "m",
	},
};

export const L: Story = {
	render: Template,
	args: {
		size: "l",
	},
};

export const XL: Story = {
	render: Template,
	args: {
		size: "xl",
	},
};

export const XXL: Story = {
	render: Template,
	args: {
		size: "xxl",
	},
};

export default story;
