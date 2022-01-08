import fs from 'fs'
import Code from './Code'
import Prism from 'prismjs'
import { useEffect } from 'react'

import 'prismjs/themes/prism-dark.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default function Page({ textOfFile }) {
  // const highlights = Prism.highlight(
  //   textOfFile,
  //   Prism.languages.javascript,
  //   'javascript'
  // )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll()
    }
  }, [])

  // <div dangerouslySetInnerHTML={{ __html: highlights }} />

  return (
    <div className="line-numbers">
      <Code />
      <pre className="line-numbers">
        <code className="language-css">{textOfFile}</code>
      </pre>
    </div>
  )
}

export async function getStaticProps(context) {
  try {
    const fileText = fs.readFileSync(
      `./pages/nextjs-switch-components-via-state/Code.js`,
      `utf8`
    )
    return {
      props: {
        textOfFile: fileText,
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
