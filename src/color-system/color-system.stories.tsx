import React from "react";
import preview from "#.storybook/preview";
import { AllPalettes } from "./color-system";

const meta = preview.meta({
	title: "Design System/Color",
	component: AllPalettes,
	tags: ["autodocs"],
});

export const ColorSystem = meta.story({
	render: () => <AllPalettes />,
});

export default meta;
