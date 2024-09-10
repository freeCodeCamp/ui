import type { Config } from "jest";

const config: Config = {
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
	// Stub out CSS as Jest would try to parse the imported stylesheets as JS modules
	// and throw an error as it can't transpile the code.
	// Ref: https://github.com/jestjs/jest/issues/3094#issuecomment-385164816
	moduleNameMapper: {
		"\\.css": "<rootDir>/__mocks__/styleMock.ts",
	},
};

export default config;
