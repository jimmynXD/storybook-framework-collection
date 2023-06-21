/* eslint-disable @typescript-eslint/no-var-requires */
const ghpages = require('gh-pages')
const path = require('path')
const { execSync } = require('child_process')

process.env.NODE_ENV = 'production'

console.log('Building app...')
execSync('vitepress build', { stdio: 'inherit' })

console.log('Deploying app...')
ghpages.publish(
  path.resolve(__dirname, '..', '.vitepress', 'dist'),
  function (err) {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    console.log('Deploying app complete.')
  }
)
