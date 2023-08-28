module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['standard', 'prettier', 'plugin:jest/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'prettier/prettier': 'error',
  },
};
