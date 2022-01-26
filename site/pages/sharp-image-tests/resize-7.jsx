#!/usr/bin/env node

const sharp = require('sharp')
const exec = require('child_process').exec

const inputFile = 'source_images/horizontal-quick-brown-fox.png'
const outputFile = 'outputs/resize-7.png'

// this is how to get a cropped in part of an image
// for a specific resize
// Could actually set it up as the metadata if you wanted

const image = sharp(inputFile)
image.metadata().then(function (metadata) {
  const sourceWidth = metadata.width
  const sourceHeight = metadata.height
  const leftOffset = 50
  const targetWidth = 700
  const targetHeight = 530
  const newRatio = targetWidth / targetHeight
  const extractWidth = Math.floor(sourceHeight * newRatio)
  console.log(newRatio)
  image
    .extract({
      left: leftOffset,
      top: 0,
      width: extractWidth,
      height: sourceHeight,
    })
    .resize({ width: targetWidth, height: targetHeight })
    .toFile(outputFile)
})

exec(`open ${outputFile}`)

// .extract({ left: 0, top: 0, width: extractWidth, height: sourceHeight })
