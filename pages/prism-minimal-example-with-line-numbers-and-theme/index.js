import { useEffect } from 'react'

import Prism from 'prismjs'

import 'prismjs/themes/prism-coy.css'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default function Page() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const codeSample = `<div className="example">
  {Math.random()}
</div>`

  return (
    <main>
      <pre className="line-numbers">
        <code className="language-jsx">{codeSample}</code>
      </pre>
    </main>
  )
}
