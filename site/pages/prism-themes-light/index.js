import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import duotoneLight from 'prism-react-renderer/themes/duotoneLight'
import github from 'prism-react-renderer/themes/github'
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight'
import ultramin from 'prism-react-renderer/themes/ultramin'
import vsLight from 'prism-react-renderer/themes/vsLight'
import Link from 'next/link'

const code_example = `
function ThemeCodeBlock({ theme, code, language }) {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={code.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className="some_class" style={style}>
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
              className="token-line code_line"
            >
              <span className="line_number">
                {i + 1}
              </span>
              <span className="code_line_content">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
`

export default function Page() {
  return (
    <>
      <h1>Default Dark Themes From prism-react-renderer</h1>
      <p>
        These are the light themes that come with{' '}
        <a href="https://github.com/FormidableLabs/prism-react-renderer">
          prism-react-renderer
        </a>{' '}
        by default.{' '}
      </p>
      <p>
        There are also{' '}
        <Link href="prism-themes-dark">
          <a>dark themes</a>
        </Link>
        .
      </p>

      <h3>duotoneLight</h3>
      <ThemeCodeBlock theme={duotoneLight} code={code_example} language="jsx" />
      <h3>github</h3>
      <ThemeCodeBlock theme={github} code={code_example} language="jsx" />
      <h3>nightOwlLight</h3>
      <ThemeCodeBlock
        theme={nightOwlLight}
        code={code_example}
        language="jsx"
      />
      <h3>ultramin</h3>
      <ThemeCodeBlock theme={ultramin} code={code_example} language="jsx" />
      <h3>vsLight</h3>
      <ThemeCodeBlock theme={vsLight} code={code_example} language="jsx" />
    </>
  )
}

function ThemeCodeBlock({ theme, code, language }) {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={code.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} code_block`} style={style}>
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
              className="token-line code_line"
            >
              <span
                className={
                  i === 0
                    ? `code_line_number code_line_number_first`
                    : i === tokens.length - 1
                    ? `code_line_number code_line_number_last`
                    : `code_line_number`
                }
              >
                {i + 1}
              </span>
              <span className={`code_line_content`}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
