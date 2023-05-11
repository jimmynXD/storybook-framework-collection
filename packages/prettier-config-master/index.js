'use strict'

module.exports = {
  printWidth: 80,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.html'],
      options: {
        bracketSameLine: true,
      },
    },
  ],
}
