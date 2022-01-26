#!/usr/bin/env node

const sharp = require('sharp')
const exec = require('child_process').exec

const inputFile = 'source_images/horizontal-quick-brown-fox.png'
const outputFile = 'outputs/resize-4.png'

sharp(inputFile)
  .extract({ left: 0, top: 0, width: 630, height: 630 })
  .resize({ width: 500, height: 500 })
  .toFile(outputFile)

exec(`open ${outputFile}`)
