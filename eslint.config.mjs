import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import jestPlugin from "eslint-plugin-jest";
import jestDomPlugin from "eslint-plugin-jest-dom";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import globals from "globals";

export default [
	// Ignore patterns
	{
		ignores: ["dist/**", "storybook-static/**", "*.config.js"],
	},

	// ESLint recommended rules
	js.configs.recommended,

	// TypeScript ESLint recommended rules
	...tseslint.configs.recommended,

	// React plugin flat config
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
		...reactPlugin.configs.flat.recommended,
		languageOptions: {
			...reactPlugin.configs.flat.recommended.languageOptions,
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
			},
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},

	// React hooks recommended
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		plugins: {
			"react-hooks": reactHooksPlugin,
		},
		rules: {
			...reactHooksPlugin.configs.recommended.rules,
		},
	},

	// JSX A11y recommended
	{
		files: ["**/*.{jsx,tsx}"],
		plugins: {
			"jsx-a11y": jsxA11yPlugin,
		},
		rules: {
			...jsxA11yPlugin.configs.recommended.rules,
		},
	},

	// Jest DOM recommended
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		plugins: {
			"jest-dom": jestDomPlugin,
		},
		rules: {
			...jestDomPlugin.configs.recommended.rules,
		},
	},

	// Testing Library React
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		plugins: {
			"testing-library": testingLibraryPlugin,
		},
		rules: {
			...testingLibraryPlugin.configs.react.rules,
		},
	},

	// Test files configuration
	{
		files: ["**/*.test.{js,ts,jsx,tsx}", "**/*.spec.{js,ts,jsx,tsx}"],
		plugins: {
			jest: jestPlugin,
		},
		languageOptions: {
			globals: {
				...jestPlugin.environments.globals.globals,
			},
		},
		rules: {
			...jestPlugin.configs.recommended.rules,
			...jestPlugin.configs.style.rules,
		},
	},

	// Custom rules overrides
	{
		files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
		rules: {
			"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		},
	},
];
