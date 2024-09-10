import { getThemingClass } from "./get-theming-class";

// We are interested in the `matches` value
// as it is the result of the `(prefers-color-scheme: dark)` lookup.
// This function allows us to programmatically switch the `matches` value
// in order to validate the value `getThemingClass()` returns.
const mockSystemTheme = (theme?: "light" | "dark") => {
	Object.defineProperty(window, "matchMedia", {
		writable: true,
		value: jest.fn().mockImplementation((query) => ({
			matches: query.includes(theme),
			media: query,
		})),
	});
};

describe("getThemingClass", () => {
	it("should return `light-palette` if `theme` is `light`", () => {
		const cls = getThemingClass("light");
		expect(cls).toBe("light-palette");
	});

	it("should return `dark-palette` if `theme` is `dark`", () => {
		const cls = getThemingClass("dark");
		expect(cls).toBe("dark-palette");
	});

	it("should return `light-palette` if `theme` is not specified and system theme is `light`", () => {
		mockSystemTheme("light");

		const cls = getThemingClass();
		expect(cls).toBe("light-palette");
	});

	it("should return `dark-palette` if `theme` is not specified and system theme is `dark`", () => {
		mockSystemTheme("dark");

		const cls = getThemingClass();
		expect(cls).toBe("dark-palette");
	});
});
