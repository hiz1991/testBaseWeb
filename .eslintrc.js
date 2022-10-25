module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  globals: {
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false,
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
    indent: 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': 0,
    'multiline-ternary': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 'off',
    'react/no-unescaped-entities': 0,
    'react/prop-types': 'off',
    'space-before-function-paren': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'arrow-parens': ['off', 'always'],
    '@typescript-eslint/indent': [
      'error',
      2,
      { SwitchCase: 1, ignoredNodes: ['TSTypeParameterInstantiation'] },
    ],
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
          Object: false,
          Function: false,
        },
        extendDefaults: true,
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      // cant disable for all arrow functions, so just change it to `warn` instead of `error`
      'warn',
      { allowDirectConstAssertionInArrowFunctions: true, allowExpressions: true },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-shadow': [
      'off',
      {
        hoist: 'all',
      },
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { enforceForJSX: true, allowShortCircuit: true },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '_' },
    ],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/semi': ['off', null],
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'off',
    'brace-style': ['off', 'off'],
    camelcase: ['off'],
    curly: 'error',
    'eol-last': 'off',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'off',
    'id-match': 'error',
    'linebreak-style': 'off',
    'max-classes-per-file': ['error', 4],
    'max-len': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-case-declarations': 'off',
    'no-cond-assign': 'error',
    'no-constant-condition': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-eval': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'error',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'off',
    'no-trailing-spaces': 'off',
    'no-useless-constructor': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'quote-props': 'off',
    radix: 'off',
    'space-in-parens': ['off', 'never'],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
        exceptions: ['*'],
      },
    ],
  },
}
