import { useState } from 'react'
import fs from 'fs'

export default function Page({ data }) {
  const [buttonColor, setButtonColor] = useState('yellow')
  return (
    <div>
      <div>{data}</div>
      {buttonColor === 'yellow' ? (
        <YellowButton setButtonColor={setButtonColor} />
      ) : (
        <GreenButton setButtonColor={setButtonColor} />
      )}
    </div>
  )
}

function YellowButton({ setButtonColor }) {
  function switchToGreen() {
    setButtonColor('green')
  }
  return (
    <button
      className="bg-yellow-500 py-2 px-4 rounded m-10 text-black"
      onClick={() => switchToGreen()}
    >
      Switch To Green
    </button>
  )
}

function GreenButton({ setButtonColor }) {
  function switchToYellow() {
    setButtonColor('yellow')
  }
  return (
    <button
      className="bg-green-600 py-2 px-4 rounded m-10 text-black"
      onClick={() => switchToYellow()}
    >
      Switch To Yellow
    </button>
  )
}

export async function getStaticProps(context) {
  console.log(__dirname)
  try {
    console.log(__dirname)
    const data = fs.readFileSync(
      `./pages/switch-components-via-state.js`,
      `utf8`
    )
    return {
      props: {
        data: data,
      },
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        data: `could not find file`,
      },
    }
  }
}
