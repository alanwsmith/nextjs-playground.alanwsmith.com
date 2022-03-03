import { useState } from 'react'
import style from './Styles.module.css'

function ComponentOne() {
  return <div>Component One is currently loaded</div>
}

function ComponentTwo() {
  return <div>Component Two is now loaded</div>
}

export default function SwitcherTest() {
  const theComponents = [<ComponentOne key="c1" />, <ComponentTwo key="c2" />]
  const [pointer, setPointer] = useState(0)

  const switchComponents = () => {
    if (pointer === 0) {
      setPointer(1)
    } else {
      setPointer(0)
    }
  }

  return (
    <div>
      {theComponents[pointer]}
      <button className={style.btn} onClick={switchComponents}>
        Switch Components
      </button>
    </div>
  )
}
