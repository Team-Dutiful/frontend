module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "react-hooks"],
	extends: [
		"airbnb",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	rules: {
		"react/require-default-props": 0,
		"linebreak-style": 0,
		"import/prefer-default-export": 0,
		"prettier/prettier": 0,
		"import/extensions": 0,
		"no-use-before-define": 0,
		"import/no-unreolved": 0,
		"import/no-extraneous-dependencies": 0,
		"no-shadow": 0,
		"no-param-reassign": 0,
		"react/prop-types": 0,
		"react/jsx-props-no-spreading": "off",
		"react/function-component-definition": [
			2,
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
		"react/jsx-filename-extension": [
			2,
			{
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		],
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
	},
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
			typescript: {},
		},
	},
};
