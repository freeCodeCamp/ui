import { addons } from "@storybook/manager-api";
import { GLOBALS_UPDATED } from "@storybook/core-events";
import { lightTheme, darkTheme } from "./theme";

const urlParams = new URLSearchParams(window.location.search);
const globalsParam = urlParams.get("globals");
const isInitialDark = globalsParam?.includes("theme:dark-palette");

addons.setConfig({
	theme: isInitialDark ? darkTheme : lightTheme,
});

// Register a tiny addon to dynamically update the manager UI without requiring a reload
addons.register("fcc-theme-switcher", (api) => {
	api.on(GLOBALS_UPDATED, ({ globals }) => {
		if (globals && globals.theme) {
			api.setOptions({
				theme: globals.theme === "dark-palette" ? darkTheme : lightTheme,
			});
		}
	});
});
