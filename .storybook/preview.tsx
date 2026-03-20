import React, { useEffect } from "react";
import { definePreview } from "@storybook/react-vite";
import "../src/base.css";
import "../src/fonts.css";

const THEME_OPTIONS = {
	light: {
		name: "Light",
		value: "light-palette",
		backgroundColor: "#f5f6f7",
	},
	dark: {
		name: "Dark",
		value: "dark-palette",
		backgroundColor: "#1b1b32",
	},
} as const;

const WithThemeProvider = (
	Story: React.ComponentType,
	context: { globals: { theme?: string } },
) => {
	const theme = context.globals.theme || THEME_OPTIONS.light.value;
	const themeConfig =
		Object.values(THEME_OPTIONS).find((t) => t.value === theme) ||
		THEME_OPTIONS.light;

	useEffect(() => {
		const body = document.body;

		Object.values(THEME_OPTIONS).forEach((t) => {
			body.classList.remove(t.value);
		});

		body.classList.add(theme);

		const canvas = document.querySelector(".sb-show-main") as HTMLElement;
		const docsStories = document.querySelectorAll(".docs-story");

		if (canvas) {
			canvas.style.backgroundColor = themeConfig.backgroundColor;
		}

		if (docsStories.length > 0) {
			docsStories.forEach((el) => {
				(el as HTMLElement).style.backgroundColor = themeConfig.backgroundColor;
			});
		}

		return () => {
			Object.values(THEME_OPTIONS).forEach((t) => {
				body.classList.remove(t.value);
			});
		};
	}, [theme, themeConfig.backgroundColor]);

	return <Story />;
};

const globalTypes = {
	theme: {
		name: "Theme",
		description: "Global theme for components",
		defaultValue: THEME_OPTIONS.light.value,
		toolbar: {
			icon: "paintbrush",
			items: [
				{
					value: THEME_OPTIONS.light.value,
					title: THEME_OPTIONS.light.name,
					icon: "sun",
				},
				{
					value: THEME_OPTIONS.dark.value,
					title: THEME_OPTIONS.dark.name,
					icon: "moon",
				},
			],
			dynamicTitle: true,
		},
	},
};

export default definePreview({
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: { disable: true },
	},
	globalTypes,
	decorators: [WithThemeProvider],
});
