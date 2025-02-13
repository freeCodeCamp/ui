import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.tsx"],

	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-a11y",
		{
			name: "@storybook/addon-styling-webpack",
			options: {
				rules: [
					{
						test: /\.css$/,
						sideEffects: true,
						use: [
							"style-loader",
							{
								loader: "css-loader",
								options: {
									importLoaders: 1,
									// Enable Interoperable CSS mode so that CSS variables can be imported into JS via the `:export` syntax.
									// We should not need this mode if/when we use CSS modules in our codebase.
									// https://webpack.js.org/loaders/css-loader/#separating-interoperable-css-only-and-css-module-features
									modules: {
										mode: "icss",
									},
								},
							},
						],
					},
				],
			},
		},
		"@storybook/addon-webpack5-compiler-babel",
	],

	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) =>
				prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
		},
	},

	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},

	docs: {
		autodocs: true,
	},

	staticDirs: [{ from: "../src/assets", to: "/assets" }],
};

export default config;
