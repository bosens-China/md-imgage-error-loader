module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'no-restricted-syntax': 'off',
    'import/prefer-default-export': 'off',
  },
  env: {
    node: true,
    jest: true,
  },
};
