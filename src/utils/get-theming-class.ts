/**
 * This function returns the theming class that would be added to the consumer's `body` element.
 * The function accepts `theme`, which can be controled by the consumer,
 * and default to the system theme if `theme` isn't specified.
 */
export const getThemingClass = (theme?: "light" | "dark") => {
	if (theme) {
		return theme === "dark" ? "dark-palette" : "light-palette";
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark-palette"
		: "light-palette";
};
