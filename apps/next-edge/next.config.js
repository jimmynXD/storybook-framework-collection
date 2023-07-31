const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'modules', 'app', 'styles')],
  },
}
