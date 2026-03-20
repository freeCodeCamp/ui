import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.tsx"],

	addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],

	framework: {
		name: "@storybook/react-vite",
		options: {},
	},

	staticDirs: [{ from: "../src/assets", to: "/assets" }],

	managerHead: (head) => `
		${head}
		<link rel="icon" type="image/png" href="https://cdn.freecodecamp.org/universal/favicons/favicon.ico">
	`,
};

export default config;
