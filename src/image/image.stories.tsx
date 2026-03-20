import preview from "#.storybook/preview";
import React from "react";
import { Image } from "./image";

// Additional type assertion necessary due to a bug of how Storybook handles the `decorators` property in meta
const meta = preview.meta({
	title: "Components/Image",
	component: Image,
	tags: ["autodocs"],
	argTypes: {
		responsive: {
			control: { type: "boolean" },
		},
	},
	decorators: [
		(Story) => <div style={{ width: "100px", height: "100px" }}>{Story()}</div>,
	],
});

export const Default = meta.story({
	args: {
		alt: "camper's avatar",
		src: "https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png",
		responsive: false,
	},
});

export const Responsive = meta.story({
	args: {
		alt: "camper's avatar",
		src: "https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png",
		responsive: true,
	},
});

export default meta;
