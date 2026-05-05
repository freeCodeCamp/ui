import { create } from "@storybook/theming";

export const lightTheme = create({
	base: "light",
	brandTitle: "freeCodeCamp.org",
	brandImage:
		"https://cdn.freecodecamp.org/platform/universal/fcc_secondary.svg",
});

export const darkTheme = create({
	base: "dark",
	brandTitle: "freeCodeCamp.org",
	brandImage: "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg",
	appBg: "#0a0a23",
	appContentBg: "#0a0a23",
	barBg: "#0a0a23",
	colorSecondary: "#198eee",
	textColor: "#ffffff",
	textInverseColor: "#0a0a23",
});
