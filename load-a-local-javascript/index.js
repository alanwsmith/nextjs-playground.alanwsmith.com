import fs from 'fs'
import Script from 'next/script'

export default function Page(props) {
  const exampleScriptTag = `<Script src="https://www.google-analytics.com/analytics.js" />`

  // put in an example of this:
  // <Script id="show-banner" strategy="lazyOnload">
  // {`document.getElementById('banner').classList.remove('hidden')`}
  // </Script>

  return (
    <div>
      <p>
        Note: this is proabbly not the way you want to do this, but it lets you
        get a script that is sitting in the same directory as your page. You are
        probably better off putting the script in the public directory and
        calling it from there like: {exampleScriptTag}
      </p>
      <div>{props.script_js}</div>
      <Script
        id="test_script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: props.script_js,
        }}
      />
    </div>
  )
}

export async function getStaticProps(context) {
  function loadFileAsString(path) {
    try {
      const fileText = fs.readFileSync(path, `utf8`)
      return fileText
    } catch (err) {
      return `Could not load: ${path}`
    }
  }
  return {
    props: {
      script_js: loadFileAsString(`./pages/load-a-local-javascript/script.js`),
    },
  }
}
