import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";

const production = process.env.NODE_ENV !== "development";

const config = {
	input: "src/index.ts",
	output: [
		{
			file: "dist/bundle.js",
			format: "cjs",
			sourcemap: true,
		},
		{
			file: "dist/bundle.es.js",
			format: "es",
			sourcemap: true,
		},
	],
	plugins: [
		postcss(),
		resolve(),
		typescript({
			sourceMap: true,
			declaration: true,
			declarationDir: "dist",
			include: ["src/**/*"],
			exclude: ["**/*.test.*", "**/*.stories.*"],
		}),
		copy({
			targets: [{ src: "src/assets", dest: "dist" }],
		}),
		babel({ babelHelpers: "bundled" }),
		commonjs(),
		production && terser(),
	],
	external: ["react"],
};

export default config;
