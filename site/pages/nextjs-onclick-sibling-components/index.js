import { useState } from 'react'

export default function Home() {
  const [theState, setTheState] = useState({ count: 0 })
  return (
    <div>
      <div>
        <Sibling2 theState={theState} />
        <Sibling1 theState={theState} setTheState={setTheState} />
      </div>
      <div></div>
    </div>
  )
}

function Sibling1({ theState, setTheState }) {
  return (
    <div>
      <div>{theState.count}</div>
      <div>
        <button onClick={() => setTheState({ count: theState.count + 1 })}>
          Click
        </button>
      </div>
    </div>
  )
}

function Sibling2({ theState }) {
  return <div>{theState.count}</div>
}
