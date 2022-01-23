function getExtractParams() {


}



NOTE: This one isn't all the way there. this is an intentional error 
look at the resize-10.js or so in the scratchpad for the better data to put in here



function leftOffsetOriginal() {
  const sourceWidth = 2700
  const sourceHeight = 1800
  const faceCenter = 2000
  const finalWidth = 312
  const finalHeight = 498

  const ratio = finalWidth / finalHeight
  console.log(`-- ratio: ${ratio}`)

  const initialCropWidthBeforeResize = Math.floor(sourceHeight * ratio)
  console.log(
    `-- initialCropWidthBeforeResize: ${initialCropWidthBeforeResize}`
  )

  const faceCenterBasedOnRatio = Math.floor(
    (sourceHeight * ratio * faceCenter) / sourceWidth
  )
  console.log(`-- faceCenterBasedOnRatio: ${faceCenterBasedOnRatio}`)

  const faceWidthDivided = Math.floor(faceCenterBasedOnRatio / 2)
  console.log(`-- faceWidthDivided: ${faceWidthDivided}`)

  return <div>here</div>
}

export default function TheForm() {
  const sourceWidth = 2700
  const centerPoints = [1350, 1500, 1300]
  const reports = centerPoints.map((centerPoint) => (
    <div className="pb-8">
      <div>{leftOffset({sourceWidth: 2700, sourceHeight: 1800, faceCenter: 1018, )}</div>
      <hr />
      <div>Source width: {sourceWidth}</div>
      <div>Center Point: {centerPoint}</div>
      <div>
        Max half width: {Math.min(sourceWidth - centerPoint, centerPoint)}
      </div>
      <div>
        Max full width: {Math.min(sourceWidth - centerPoint, centerPoint) * 2}
      </div>
      <div>
        Left offset:{' '}
        {centerPoint - Math.min(sourceWidth - centerPoint, centerPoint)}
      </div>
    </div>
  ))
  return reports
}
