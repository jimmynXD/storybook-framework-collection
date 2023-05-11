const config = {
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['turbo', 'prettier'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}

module.exports = config
