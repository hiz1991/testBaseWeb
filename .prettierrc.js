module.exports = {
  jsxBracketSameLine: false,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  parser: 'typescript',
  bracketSpacing: true,
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '**/*.html',
      options: {
        trailingComma: 'none',
      },
    },
  ],
}
