#!/usr/bin/env node

const sharp = require('sharp')
const exec = require('child_process').exec

const inputFile = '/Users/alans/Desktop/headshots_50095_Player_Charlie.png'
const outputFile =
  '/Users/alans/Desktop/headshots_50095_Player_Charlie-cropped.png'

function getResizeDetails(params) {
  const resizeDetails = {
    extract: { top: 0, height: params.sourceHeight },
    resize: { width: params.targetWidth, height: params.targetHeight },
  }
  const ratio = params.targetWidth / params.targetHeight
  resizeDetails.extract['width'] = Math.floor(params.sourceHeight * ratio)
  const leftOffset = Math.floor(
    params.faceCenter - resizeDetails.extract['width'] / 2
  )
  // (params.sourceHeight * ratio * params.faceCenter) / params.sourceWidth
  resizeDetails.extract['left'] = Math.floor(leftOffset)
  return resizeDetails
}

const resizeParams = getResizeDetails({
  sourceHeight: 1800,
  sourceWidth: 4700,
  faceCenter: 3429,
  targetWidth: 312,
  targetHeight: 498,
})

console.log(resizeParams)

const image = sharp(inputFile)

image
  .extract(resizeParams.extract)
  .resize(resizeParams.resize)
  .toFile(outputFile)
  .then((data) => {
    exec(`open ${outputFile}`)
  })

// const image = sharp(inputFile)
// image.metadata().then(function (metadata) {
//   const sourceWidth = metadata.width
//   const sourceHeight = metadata.height
//   const leftOffset = 417
//   const targetWidth = 312
//   const targetHeight = 498
//   const newRatio = targetWidth / targetHeight
//   const extractWidth = Math.floor(sourceHeight * newRatio)
//   console.log(newRatio)
//   image
//     .extract({
//       left: leftOffset,
//       top: 0,
//       width: extractWidth,
//       height: sourceHeight,
//     })
//     .resize({ width: targetWidth, height: targetHeight })
//     .toFile(outputFile)
// })
// exec(`open ${outputFile}`)

// .extract({ left: 0, top: 0, width: extractWidth, height: sourceHeight })
