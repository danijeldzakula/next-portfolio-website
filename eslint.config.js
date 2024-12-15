import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    extends: ['eslint:recommended', 'next'],
  }),
  {
    files: ['*.ts', '*.tsx', '*.mjs', '*.cjs'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: ['.next/**/*'], // Ignoriši `.next` direktorijum i njegove poddirektorijume
  },
];

export default eslintConfig;
