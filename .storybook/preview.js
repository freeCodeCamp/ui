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
				value: "#ffffff",
			},
			{
				name: "dark-palette",
				value: "#0a0a23",
			},	
		],
	},
};



/**
 * Gets matching theme name for currently selected background and provides it
 * to the story.
 */
function renderTheme(Story, context) {
	console.log('context.globals', context.globals);
	console.log('parameters.backgrounds.values', parameters.backgrounds.values);

	const selectedBackgroundValue = context.globals?.backgrounds?.value || parameters.backgrounds.default;
	const selectedBackgroundName = parameters.backgrounds.values.find(
		(bg) => bg.value === selectedBackgroundValue,
	)?.name;

	const className = selectedBackgroundName || parameters.backgrounds.default;

	console.log('Selected className:', className);

	if (className === "light-palette") {
		document.body.classList.remove("dark-palette");
		document.body.classList.add("light-palette");
	} else {
		document.body.classList.remove("light-palette");
		document.body.classList.add("dark-palette");
	}

	return <Story />;
}

export const decorators = [renderTheme];