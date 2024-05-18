import astroEslintParser from 'astro-eslint-parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import js from '@eslint/js';

export default [
    js.configs.recommended,
    ...eslintPluginAstro.configs['flat/recommended'],
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        files: ['**/*.astro'],
        languageOptions: {
            parser: astroEslintParser,
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
        },
    },
    {
        files: ['**/*.{js,jsx,astro}'],
        rules: {
            'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        },
    },
    {
        ignores: ['dist', 'node_modules', '.github', 'types.generated.d.ts', '.astro'],
    },
];
