import React from "react";
import "../src/base.css";
import "../src/fonts.css";

export const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		default: "light-palette",
		values: [
			{
				name: "light-palette",
				value: "#f5f6f7",
			},
			{
				name: "dark-palette",
				value: "#1b1b32",
			},
		],
	},
};

export const decorators = [renderTheme];

/**
 * Gets matching theme name for currently selected background and provides it
 * to the story.
 */
function renderTheme(Story, context) {
	const selectedBackgroundValue = context.globals.backgrounds?.value;
	const selectedBackgroundName = parameters.backgrounds.values.find(
		(bg) => bg.value === selectedBackgroundValue,
	)?.name;

	// Use the value of the default background to prevent "undefined" className
	const className = selectedBackgroundName || parameters.backgrounds.default;

	if (className === "light-palette") {
		document.body.classList.remove("dark-palette");
		document.body.classList.add("light-palette");
	} else {
		document.body.classList.remove("light-palette");
		document.body.classList.add("dark-palette");
	}

	return <Story />;
}
