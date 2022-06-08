module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:import/recommended'
	],
	plugins: ['svelte3', '@typescript-eslint', 'import'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript'),
		'import/resolver': {
			typescript: {}
		}
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: ['./tsconfig.json', './tsconfig.lint.json'],
		tsconfigRootDir: './'
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
