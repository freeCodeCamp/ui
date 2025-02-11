module.exports = {
	presets: [
		"@babel/preset-react",
		"@babel/preset-typescript",
		[
			"@babel/preset-env",
			{
				targets: {
					browsers: [">0.25%", "not dead"],
				},
			},
		],
	],
	plugins: [
		["transform-react-remove-prop-types", { removeImport: true }],
		[
			"prismjs",
			{
				languages: [
					"clike",
					"css",
					"html",
					"javascript",
					"json",
					"jsx",
					"markup",
					"mathml",
					"pug",
					"python",
					"sql",
					"svg",
					"typescript",
					"xml",
					"bash",
				],
				theme: "default",
				css: true,
				plugins: ["line-numbers"],
			},
		],
	],
};
