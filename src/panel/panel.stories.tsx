import React from "react";
import preview from "#.storybook/preview";
import { Panel } from ".";

const meta = preview.meta({
	title: "Components/Panel",
	component: Panel,
	tags: ["autodocs"],
	parameters: {
		controls: {
			include: ["className", "variant"],
		},
	},
	argTypes: {
		className: { control: { type: "text" } },
		variant: { option: ["primary", "danger", "info", undefined] },
	},
});

const Child = () => {
	return (
		<>
			<Panel.Heading>
				<Panel.Title>Here is panel Heading</Panel.Title>
			</Panel.Heading>
			<Panel.Body>Here is Panel body</Panel.Body>
		</>
	);
};

export const Default = meta.story({
	args: {
		children: <Child />,
	},
});

export const Primary = meta.story({
	args: {
		children: <Child />,
		variant: "primary",
	},
});

export const Info = meta.story({
	args: {
		children: <Child />,
		variant: "info",
	},
});

export const Danger = meta.story({
	args: {
		children: <Child />,
		variant: "danger",
	},
});

export default meta;
