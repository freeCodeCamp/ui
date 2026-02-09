import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		conditions: ["import", "module", "browser", "default"],
		extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./vitest-setup.ts"],
		css: {
			modules: {
				classNameStrategy: "non-scoped",
			},
		},
	},
	ssr: {
		// SSR configuration for handling Radix UI packages during testing
		// Radix UI uses advanced ESM-only packages that can cause module resolution issues
		// in test environments. By marking them as noExternal, Vitest bundles these packages
		// properly instead of treating them as external dependencies.
		noExternal: [/@radix-ui\/.*/],
	},
});
