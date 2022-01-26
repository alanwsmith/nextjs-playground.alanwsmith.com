#!/usr/bin/env node

const sharp = require('sharp')
const exec = require('child_process').exec

const inputFile = '/Users/alans/Desktop/headshots_47917_Player_Delta.png'
const outputFile =
  '/Users/alans/Desktop/headshots_47917_Player_Delta-cropped.png'

// this is how to get a cropped in part of an image
// for a specific resize
// Could actually set it up as the metadata if you wanted

const image = sharp(inputFile)
image.metadata().then(function (metadata) {
  const sourceWidth = metadata.width
  const sourceHeight = metadata.height
  const leftOffset = 417
  const targetWidth = 312
  const targetHeight = 498
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
