const ghpages = require('gh-pages')
const path = require('path')
const { execSync } = require('child_process')

console.log('Building Nuxt3 application...')
execSync('nuxt generate', { stdio: 'inherit' })

console.log('Deploying to gh-pages...')
ghpages.publish(path.resolve(__dirname, '..', 'dist'), function (err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log('Deployment to gh-pages complete.')
})
