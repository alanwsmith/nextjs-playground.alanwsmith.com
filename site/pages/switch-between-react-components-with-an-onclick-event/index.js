import fs from 'fs'
import SwitcherTest from './SwitcherTest'

export default function Page({ fileAsString }) {
  return (
    <div>
      <h1>Switch Between Next.js/React Components With An onClick Event</h1>
      <p>
        I&apos;m having a hard time finding a simple example that shows how to
        click a button or link to switch between different React components
        (e.g. in Next.js projects). The code below is what I came up with. It
        works and is what&apos;s powering the example. I&apos;m not sure if
        it&apos;s the recommended way or if there are issues with it. So,
        consider this page pending until I get some feedback on it.
      </p>
      <p>
        (I had to add &apos;key&apos; attributes to the components in the array which
        feels weird. That&apos;s part of what makes me think I&apos;m not doing
        this in the generally recommended way)
      </p>
      <h2>Example</h2>
      <p>
        Here&apos;s a working example. Click the &quot;Switch Componenets&quot;
        button to change the component.
      </p>
      <div className="bg-gray-700 p-3 rounded-md mb-4 border border-black">
        <SwitcherTest />
      </div>
      <h2>Code</h2>
      <p>
        This is the source code for the example above. Normally, I would split
        the components into seperate files. I&apos;m combining them here to make
        the page easier to read.
      </p>
      <hr />
      <pre className="my-4">{fileAsString}</pre>
      <hr />

      <p className="pt-4">
        If you have feedback, please{' '}
        <a href="https://twitter.com/TheIdOfAlan">let me know</a>
      </p>
    </div>
  )
}

export async function getStaticProps(context) {
  try {
    const fileText = fs.readFileSync(
      `./pages/switch-between-react-components-with-an-onclick-event/SwitcherTest.js`,
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
