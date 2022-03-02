import { useState } from 'react'

function ThingOne() {
  return <div>Thing One Is Here Now</div>
}

function OtherThing() {
  return <div>Other Thing Took Over</div>
}

export default function SwitcherTest({ fileAsString }) {
  const theThings = [<ThingOne />, <OtherThing />]
  const [pointer, setPointer] = useState(0)

  const switchThings = () => {
    if (pointer === 0) {
      setPointer(1)
    } else {
      setPointer(0)
    }
  }

  return (
    <div>
      {theThings[pointer]}
      <div>
        <button onClick={switchThings}>switch</button>
      </div>
      <pre>{fileAsString}</pre>
    </div>
  )
}
