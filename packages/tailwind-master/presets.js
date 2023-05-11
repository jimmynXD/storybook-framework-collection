/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('./dist/msk-colors.js')
const elevations = require('./dist/msk-elevations.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      sans: ['gotham', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['redhat-mono', 'Menlo', 'Courier', 'monospace'],
    },
    extend: {
      fontFamily: {
        'msk-sans': ['msk-sans', 'sans-serif'],
        'msk-source-sans-pro': ['source-sans-pro', 'sans-serif'],
      },
      fontSize: {
        'msk-h1': [
          '2.375rem',
          {
            fontWeight: '400',
            lineHeight: '1.3',
            letterSpacing: '-0.05em',
          },
        ],
        'msk-h2': [
          '2rem',
          {
            fontWeight: '400',
            lineHeight: '1.3',
            letterSpacing: '-0.05em',
          },
        ],
        'msk-h3': [
          '1.625rem',
          {
            fontWeight: '400',
            lineHeight: '1.4',
            letterSpacing: '-0.03em',
          },
        ],
        'msk-h4': [
          '1.375rem',
          {
            fontWeight: '500',
            lineHeight: '1.3',
            letterSpacing: '-0.02em',
          },
        ],
      },
      dropShadow: {
        'msk-text': '1px 1px 0px rgba(247, 243, 242, 1)',
      },
      spacing: {
        auto: 'auto',
      },
      boxShadow: {
        ...elevations,
      },
      colors: {
        ...colors,
      },
      screens: {
        420: { raw: '(min-height: 420px)' },
        500: { raw: '(min-height: 500px)' },
        1000: { raw: '(min-height: 1000px)' },
      },
    },
  },
}
