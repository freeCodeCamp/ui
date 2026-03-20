import React from "react";
import preview from "#.storybook/preview";
import { Typography } from "./typography";

const meta = preview.meta({
	title: "Design System/Typography",
	component: Typography,
	tags: ["autodocs"],
});

export const TypographySystem = meta.story({
	render: () => <Typography />,
});

export default meta;
