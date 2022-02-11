import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import dracula from 'prism-react-renderer/themes/dracula'
import duotoneDark from 'prism-react-renderer/themes/duotoneDark'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import oceanicNext from 'prism-react-renderer/themes/oceanicNext'
import okaidia from 'prism-react-renderer/themes/okaidia'
import palenight from 'prism-react-renderer/themes/palenight'
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple'
import synthwave84 from 'prism-react-renderer/themes/synthwave84'
import vsDark from 'prism-react-renderer/themes/vsDark'
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
        These are the dark themes that come with{' '}
        <a href="https://github.com/FormidableLabs/prism-react-renderer">
          prism-react-renderer
        </a>{' '}
        by default.{' '}
      </p>
      <p>
        There are also{' '}
        <Link href="prism-themes-light">
          <a>light themes</a>
        </Link>
        .
      </p>

      <h3>dracula</h3>
      <ThemeCodeBlock theme={dracula} code={code_example} language="jsx" />
      <h3>duotoneDark</h3>
      <ThemeCodeBlock theme={duotoneDark} code={code_example} language="jsx" />
      <h3>nightOwl</h3>
      <ThemeCodeBlock theme={nightOwl} code={code_example} language="jsx" />
      <h3>oceanicNext</h3>
      <ThemeCodeBlock theme={oceanicNext} code={code_example} language="jsx" />
      <h3>okaidia</h3>
      <ThemeCodeBlock theme={okaidia} code={code_example} language="jsx" />
      <h3>palenight</h3>
      <ThemeCodeBlock theme={palenight} code={code_example} language="jsx" />
      <h3>shadesOfPurple</h3>
      <ThemeCodeBlock
        theme={shadesOfPurple}
        code={code_example}
        language="jsx"
      />
      <h3>synthwave84</h3>
      <ThemeCodeBlock theme={synthwave84} code={code_example} language="jsx" />
      <h3>vsDark</h3>
      <ThemeCodeBlock theme={vsDark} code={code_example} language="jsx" />
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
