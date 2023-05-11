const ghpages = require('gh-pages')
const path = require('path')

console.log('Deploying to gh-pages...')
ghpages.publish(path.resolve(__dirname, '..', 'dist'), function (err) {
  console.error(err)
})
