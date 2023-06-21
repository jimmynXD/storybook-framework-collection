/**
 * From root,
 * `pnpm run sync` to format all package.json files in a certain order
 *
 * `pnpm run sync:fix` to control versions of packages that are the same in every project
 */

module.exports = {
  semverRange: '^',
  source: [
    'core/package.json',
    'package.json',
    'apps/*/package.json',
    'packages/*/package.json',
  ],
  // we only look at devDependencies and dependencies aka prod
  dependencyTypes: ['dev', 'prod'],
  // we disregard peerDependencies. this is to make sure other projects have a minimum installed version of a package
  peer: false,
  // we control versions for packages that are the same in every project.
  versionGroups: [
    {
      label: 'Carbon react packages',
      packages: ['**'],
      dependencies: [
        'carbon-components-react',
        '@types/carbon-components-react',
      ],
      dependencyTypes: ['dev', 'prod'],
      pinVersion: '7.49.0',
    },
    {
      label: 'Carbon common package',
      packages: ['**'],
      dependencies: ['carbon-components'],
      dependencyTypes: ['dev', 'prod'],
      pinVersion: '10.56.0',
    },
    {
      label: 'Carbon icon package',
      packages: ['**'],
      dependencies: ['carbon-icons'],
      dependencyTypes: ['dev', 'prod'],
      pinVersion: '7.0.7',
    },
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
      pinVersion: '^1.15.1',
    },
    {
      label: 'Internal configs',
      packages: ['**'],
      dependencies: ['@local/*'],
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
      pinVersion: '^8.41.0',
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
