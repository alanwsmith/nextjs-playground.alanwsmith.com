import { useState } from 'react'

function handleClick(testObject, setTestObject) {
  const newValue = testObject.count + 1
  setTestObject({ count: newValue })
}

export default function Button({ testObject, setTestObject }) {
  const [onOff, setOnOff] = useState(true)
  if (onOff === true) {
    return (
      <div>
        <button
          onClick={() => {
            handleClick(testObject, setTestObject)
            setOnOff(false)
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
            handleClick(testObject, setTestObject)
            setOnOff(true)
          }}
        >
          OFF
        </button>
      </div>
    )
  }
}
