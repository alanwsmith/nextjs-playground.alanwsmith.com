import { useState } from 'react'

export default function Page() {
  const [buttonColor, setButtonColor] = useState('yellow')
  return (
    <div>
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
