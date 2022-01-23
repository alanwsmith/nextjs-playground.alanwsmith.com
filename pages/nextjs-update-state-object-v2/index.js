import { useState } from 'react'

import Board from './Board'
import Button from './Button'

export default function Page() {
  const [testObject, setTestObject] = useState({ count: 1 })
  return (
    <div>
      <div>
        <Board testObject={testObject} />
      </div>
      <div>
        <Button testObject={testObject} setTestObject={setTestObject} />
      </div>
    </div>
  )
}
