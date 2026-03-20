import React from "react";
import preview from "#.storybook/preview";
import { Spacer } from "./spacer";
import { Button } from "../button";

const meta = preview.meta({
	title: "Components/Spacer",
	component: Spacer,
	tags: ["autodocs"],
});

export const XXS = meta.story({
	render: (args) => (
		<>
			<Button>Button one</Button>
			<Spacer {...args} />
			<Button>Button two</Button>
		</>
	),
	args: {
		size: "xxs",
	},
});

export const XS = meta.story({
	render: (args) => (
		<>
			<Button>Button one</Button>
			<Spacer {...args} />
			<Button>Button two</Button>
		</>
	),
	args: {
		size: "xs",
	},
});

export const S = meta.story({
	render: (args) => (
		<>
			<Button>Button one</Button>
			<Spacer {...args} />
			<Button>Button two</Button>
		</>
	),
	args: {
		size: "s",
	},
});

export const M = meta.story({
	render: (args) => (
		<>
			<Button>Button one</Button>
			<Spacer {...args} />
			<Button>Button two</Button>
		</>
	),
	args: {
		size: "m",
	},
});

export const L = meta.story({
	render: (args) => (
		<>
			<Button>Button one</Button>
			<Spacer {...args} />
			<Button>Button two</Button>
		</>
	),
	args: {
		size: "l",
	},
});

export const XL = meta.story({
	render: (args) => (
		<>
			<Button>Button one</Button>
			<Spacer {...args} />
			<Button>Button two</Button>
		</>
	),
	args: {
		size: "xl",
	},
});

export const XXL = meta.story({
	render: (args) => (
		<>
			<Button>Button one</Button>
			<Spacer {...args} />
			<Button>Button two</Button>
		</>
	),
	args: {
		size: "xxl",
	},
});

export default meta;
