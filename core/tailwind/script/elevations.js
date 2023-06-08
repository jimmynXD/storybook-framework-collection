/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const scssFilePath =
  'node_modules/@mskcc/fundamentals/src/variables/elevations.scss'

// Read the SCSS file
const scss = fs
  .readFileSync(scssFilePath, 'utf8')
  .replace(/\n/g, '')
  .replace(/ {3}/g, '')
  .replace(/;/g, ';\n')

const regex = /\$(.+?):(.+?);/g
let match
const variables = {}

while ((match = regex.exec(scss))) {
  // remove $msk-- from keys
  const key = match[1].trim().replace('msk--', 'msk-')
  const value = match[2].trim()
  variables[key] = [value]
}

const json = JSON.stringify({ ...variables }, null, 2)

// create new dist folder if it doesn't exist
if (fs.existsSync('./dist')) {
  if (fs.existsSync('./dist/msk-elevations.js')) {
    fs.unlinkSync('./dist/msk-elevations.js')
  }
} else {
  fs.mkdirSync('./dist')
}

// // write msk-colors.js file for consumption
fs.writeFileSync('./dist/msk-elevations.js', `module.exports = ${json}`)
