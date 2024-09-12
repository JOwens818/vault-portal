import globals from 'globals';
import pluginJs from '@eslint/js';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    ignores: ['/*', '!/src'],
    ...pluginReact.configs.flat.recommended,
    rules: {
      'max-len': ['error', { code: 120 }],
      semi: 'error',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'all', caughtErrors: 'all', argsIgnorePattern: '^_' }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off'
    }
  },
  {
    languageOptions: {
      globals: globals.browser,
      ...pluginReact.configs.flat.recommended.languageOptions
    }
  },
  eslint.configs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettier
];
