import React from "react";
import preview from "#.storybook/preview";
import { Spacer } from "./spacer";
import { Button } from "../button";

const meta = preview.meta({
	title: "Components/Spacer",
	component: Spacer,
	tags: ["autodocs"],
});

const SpacerTemplate = (args: React.ComponentProps<typeof Spacer>) => (
	<>
		<Button>Button one</Button>
		<Spacer {...args} />
		<Button>Button two</Button>
	</>
);

export const XXS = meta.story({
	render: SpacerTemplate,
	args: {
		size: "xxs",
	},
});

export const XS = meta.story({
	render: SpacerTemplate,
	args: {
		size: "xs",
	},
});

export const S = meta.story({
	render: SpacerTemplate,
	args: {
		size: "s",
	},
});

export const M = meta.story({
	render: SpacerTemplate,
	args: {
		size: "m",
	},
});

export const L = meta.story({
	render: SpacerTemplate,
	args: {
		size: "l",
	},
});

export const XL = meta.story({
	render: SpacerTemplate,
	args: {
		size: "xl",
	},
});

export const XXL = meta.story({
	render: SpacerTemplate,
	args: {
		size: "xxl",
	},
});

export default meta;
