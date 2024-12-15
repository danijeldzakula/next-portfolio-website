/** @type {import("prettier").Config} */
const config = {
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  trailingComma: 'es5',
  tabWidth: 2,
  printWidth: 80,
  semi: true,
  importOrder: [
    '^(react/(.*)$)|^(react-(.*)$)|^(react$)|^(next/(.*)$)|^(next$)|^(@next/(.*)$)|^(next-(.*)$)',
    '<THIRD_PARTY_MODULES>',
    '^@/hooks/(.*)$',
    '^@/components/(.*)$',
    '^@/utils/(.*)$',
    '^@/',
    '^[./]',
    '^[.]/[-a-zA-Z0-9_]+[.](css|scss|less)$', // end with css etc
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindConfig: './tailwind.config.ts',
};

module.exports = config;
