module.exports = [
	{
		rules: {
			"no-unused-vars": "error",
			"no-undef": "error"
		},
		ignores: ["**/*.config.js", "dist/**/*.js", "node_modules/**/*", "coverage/**/*"]
	}
];
