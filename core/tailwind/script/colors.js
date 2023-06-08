/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

// pull in msk-colors.scss from fundamentals
const scssFilePath = 'node_modules/@mskcc/fundamentals/src/msk-colors.scss'

// Read the SCSS file
const scss = fs.readFileSync(scssFilePath, 'utf8')

const regex = /\$(.+?):(.+?);/g
let match
const variables = {}

while ((match = regex.exec(scss))) {
  const key = match[1].trim().replace('msk--', '')
  const lastDash = key.lastIndexOf('-')
  const parentKey = key.substring(0, lastDash)
  const lastKey = key.substring(lastDash + 1)
  const value = match[2].trim().replace(' !default', '')

  variables[parentKey] = {
    ...variables[parentKey],
    [lastKey]: value,
  }
}
const json = JSON.stringify({ msk: variables }, null, 2)

// create new dist folder if it doesn't exist
if (fs.existsSync('./dist')) {
  if (fs.existsSync('./dist/msk-colors.js')) {
    fs.unlinkSync('./dist/msk-colors.js')
  }
} else {
  fs.mkdirSync('./dist')
}

// write msk-colors.js file for consumption
fs.writeFileSync('./dist/msk-colors.js', `module.exports = ${json}`)
