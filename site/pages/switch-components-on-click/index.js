import SwitcherTest from './SwitcherTest'

export default function Page({ fileAsString }) {
  return (
    <div>
      <h3>Example</h3>
      <SwitcherTest />
      <h3>Code</h3>
      <pre>{fileAsString}</pre>
    </div>
  )
}

import fs from 'fs'

export async function getStaticProps(context) {
  try {
    const fileText = fs.readFileSync(
      `./pages/switch-components-on-click/SwitcherTest.js`,
      `utf8`
    )
    return {
      props: {
        fileAsString: fileText,
      },
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        fileAsString: `could not find file`,
      },
    }
  }
}
