# @local/eslint-config

Add eslint code quality rules to each project.

## Installation

Add the following to each application's `package.json` file:

```json
{
  "devDependencies": {
    "@local/eslint-config": "workspace:*",
    "eslint": "^8.41.0"
  },
  "eslintConfig": {
    "root": true,
    "extends": ["@local/eslint-config"]
  }
}
```

## Package specific rules

| Rule   | extension                  |
| ------ | -------------------------- |
| base   | @local/eslint-config       |
| react  | @local/eslint-config/react |
| nextjs | @local/eslint-config/next  |
| nuxt3  | @local/eslint-config/nuxt3 |
