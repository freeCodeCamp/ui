import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import path from "path";

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
    postcss({
			extract: path.resolve('dist/normalize.css'),
      minimize: true,
    }),
		resolve(),
		typescript({ sourceMap: true, declaration: true, declarationDir: "dist" }),
		babel({ babelHelpers: "bundled" }),
		commonjs(),
		production && terser(),
	],
	external: ["react"],
};

export default config;
