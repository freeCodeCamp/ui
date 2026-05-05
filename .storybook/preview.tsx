import React, { useEffect, useState } from "react";
import type { Preview, Decorator } from "@storybook/react";
import { DocsContainer as BaseDocsContainer } from "@storybook/blocks";
import { themes } from "@storybook/theming";
import { addons } from "@storybook/preview-api";
import { GLOBALS_UPDATED } from "@storybook/core-events";
import "../src/base.css";
import "../src/fonts.css";
import "./preview.css";

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

const applyThemeToBody = (theme: string) => {
	const body = document.body;
	Object.values(THEME_OPTIONS).forEach((t) => {
		body.classList.remove(t.value);
	});
	body.classList.add(theme);
};

// Apply theme to body globally (works for pure MDX pages without stories)
const channel = addons.getChannel();
channel.on(GLOBALS_UPDATED, ({ globals }) => {
	const theme = globals.theme || THEME_OPTIONS.light.value;
	applyThemeToBody(theme);
});

/**
 * Theme decorator that applies theme classes to the body and story container
 */
const WithThemeProvider: Decorator = (Story, context) => {
	const theme = context.globals.theme || THEME_OPTIONS.light.value;

	useEffect(() => {
		applyThemeToBody(theme);
	}, [theme]);

	return <Story />;
};

const DocsContainer = (
	props: React.ComponentProps<typeof BaseDocsContainer>,
) => {
	const [isDark, setIsDark] = useState(() =>
		document.body.classList.contains("dark-palette"),
	);

	useEffect(() => {
		const handleGlobals = ({
			globals,
		}: {
			globals: Record<string, unknown>;
		}) => {
			setIsDark(globals.theme === "dark-palette");
		};
		channel.on(GLOBALS_UPDATED, handleGlobals);
		return () => channel.off(GLOBALS_UPDATED, handleGlobals);
	}, []);

	return (
		<BaseDocsContainer {...props} theme={isDark ? themes.dark : themes.light}>
			{props.children}
		</BaseDocsContainer>
	);
};

export const globalTypes = {
	theme: {
		name: "Theme",
		description: "Global theme for components",
		defaultValue: THEME_OPTIONS.light.value,
		toolbar: {
			icon: "paintbrush",
			// Array of plain string values or MenuItem shape
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
			// Change title based on selected value
			dynamicTitle: true,
		},
	},
};

const preview: Preview = {
	parameters: {
		docs: {
			container: DocsContainer,
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		// Remove backgrounds to disable the default background selector
		backgrounds: { disable: true },
	},
	globalTypes,
	decorators: [WithThemeProvider],
};

export default preview;
