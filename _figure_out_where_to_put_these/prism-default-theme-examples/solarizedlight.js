import { useEffect } from 'react'
import Link from 'next/link'

import fs from 'fs'
import Prism from 'prismjs'

import 'prismjs/themes/prism-solarizedlight.css'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default function Page({ fileAsString }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <main>
      <h1 className="max-w-2xl mx-auto">Prism Default SolarizedLight Theme</h1>
      <div className="max-w-2xl mx-auto">
        <Link href="/prism-default-theme-examples">
          <a>Back to theme list</a>
        </Link>{' '}
        - Note: sometimes you have to refresh to get these samples to display
        properly. Not sure why yet...
      </div>
      <div className="max-w-2xl mx-auto">
        <pre className="line-numbers">
          <code className="language-jsx">{fileAsString}</code>
        </pre>
      </div>
    </main>
  )
}

export async function getStaticProps(context) {
  const fileToRead = `./pages/prism-default-theme-examples/solarizedlight.js`
  try {
    const fileText = fs.readFileSync(fileToRead, `utf8`)
    return {
      props: {
        fileAsString: fileText,
      },
    }
  } catch (err) {
    return {
      props: {
        data: `Could not find: ${fileToRead}`,
      },
    }
  }
}
