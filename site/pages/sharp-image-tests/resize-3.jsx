#!/usr/bin/env node

const sharp = require('sharp')
const exec = require('child_process').exec

const inputFile = 'source_images/horizontal-quick-brown-fox.png'
const outputFile = 'outputs/resize-3.png'

sharp(inputFile).resize({ width: 600, height: 600 }).toFile(outputFile)

exec(`open ${outputFile}`)
