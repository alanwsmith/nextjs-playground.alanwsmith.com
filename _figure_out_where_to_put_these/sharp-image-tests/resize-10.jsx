#!/usr/bin/env node

// THIS is the one you're using for the headshot engine process
// it is based off the height. it deals with images that need to
// be adjusted left or right based off facial recognition and
// then adjusts back if the crop would take things outside
// the canvas area

const sharp = require('sharp')
const exec = require('child_process').exec

const inputFile = '/Users/alans/Desktop/headshots_45609_Player_Bravo.png'
const outputFile =
  '/Users/alans/Desktop/headshots_45609_Player_Bravo-cropped.png'

function getResizeDetails(params) {
  const resizeDetails = {
    extract: { top: 0, height: params.sourceHeight },
    resize: { width: params.targetWidth, height: params.targetHeight },
  }
  const ratio = params.targetWidth / params.targetHeight
  resizeDetails.extract['width'] = Math.floor(params.sourceHeight * ratio)
  //
  // THIS IS WHATS added here to keep the crop area setup propperly.
  // inside the cavas. otherwise, it throws an error.
  const leftOffset = Math.max(
    Math.min(
      Math.floor(params.faceCenter - resizeDetails.extract['width'] / 2),
      Math.floor(params.sourceWidth - resizeDetails.extract['width'])
    ),
    0
  )
  //
  ////
  // (params.sourceHeight * ratio * params.faceCenter) / params.sourceWidth
  resizeDetails.extract['left'] = Math.floor(leftOffset)
  return resizeDetails
}

const resizeParams = getResizeDetails({
  sourceHeight: 1800,
  sourceWidth: 2700,
  faceCenter: 1752,
  targetWidth: 800,
  targetHeight: 600,
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
