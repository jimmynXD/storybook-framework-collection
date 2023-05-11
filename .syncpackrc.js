/**
 * From root,
 * `pnpm run sync` to format all package.json files in a certain order
 *
 * `pnpm run sync:fix` to control versions of packages that are the same in every project
 */

module.exports = {
  semverRange: '^',
  source: ['package.json', 'apps/*/package.json', 'packages/*/package.json'],
  // we only look at devDependencies and dependencies aka prod
  dependencyTypes: ['dev', 'prod'],
  // we disregard peerDependencies. this is to make sure other projects have a minimum installed version of a package
  peer: false,
  // we control versions for packages that are the same in every project.
  versionGroups: [
    {
      label: 'MSK DSM packages',
      packages: ['**'],
      dependencies: [
        '@mskcc/fundamentals',
        '@mskcc/components',
        '@mskcc/icons',
        '@mskcc/components-vue',
        '@mskcc/components-react',
      ],
      dependencyTypes: ['dev', 'prod'],
      pinVersion: '^1.12.0',
    },
    {
      label: 'Internal configs',
      packages: ['**'],
      dependencies: [
        '@mskcc/eslint-config',
        '@mskcc/prettier-config',
        '@mskcc/tailwind',
        '@mskcc/tsconfig',
      ],
      dependencyTypes: ['dev', 'prod'],
      pinVersion: 'workspace:*',
    },
    {
      label: 'typescript',
      packages: ['**'],
      dependencies: ['typescript'],
      dependencyTypes: ['dev'],
      pinVersion: '^5.0.4',
    },
    {
      label: 'eslint',
      packages: ['**'],
      dependencies: ['eslint'],
      dependencyTypes: ['dev'],
      pinVersion: '^8.8.0',
    },
    {
      label: '@types/node',
      packages: ['**'],
      dependencies: ['@types/node'],
      dependencyTypes: ['dev'],
      pinVersion: '^18',
    },
  ],

  // sort packages inside each of these sections
  sortAz: [
    'scripts',
    'dependencies',
    'peerDependencies',
    'devDependencies',
    'keywords',
  ],

  // the order of sections in package.json
  sortFirst: [
    'name',
    'version',
    'private',
    'description',
    'author',
    'license',
    'main',
    'modules',
    'types',
    'module',
    'files',
    'exports',
    'scripts',
    'dependencies',
    'peerDependencies',
    'devDependencies',
  ],
}
