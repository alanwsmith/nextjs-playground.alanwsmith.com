import { useState } from 'react'

function handleClick(testObject, setTestObject, onOff, setOnOff) {
  if (onOff === true) {
    setOnOff(false)
  } else {
    setOnOff(true)
  }
  const newValue = testObject.count + 1
  setTestObject({ count: newValue })
}

export default function Button({ testObject, setTestObject }) {
  console.log('Rendering button')
  const [onOff, setOnOff] = useState(true)
  if (onOff === true) {
    return (
      <div>
        <button
          onClick={() => {
            handleClick(testObject, setTestObject, onOff, setOnOff)
          }}
        >
          ON
        </button>
      </div>
    )
  } else {
    return (
      <div>
        <button
          onClick={() => {
            handleClick(testObject, setTestObject, onOff, setOnOff)
          }}
        >
          OFF
        </button>
      </div>
    )
  }
}
