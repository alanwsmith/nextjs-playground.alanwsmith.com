import HeadTag from '../components/HeadTag'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <HeadTag
        description="A Next.js scratchpad from Alan W. Smith"
        image="https://nextjs-scratchpad.alanwsmith.com/og-images/main.png"
        title="The Next.js Scratchpad Of Alan"
        type="website"
        url="https://nextjs-scratchpad.alanwsmith.com"
      />
      <h1>Next.js Scratchpad</h1>
      <p>
        This is a little scratchpad for me to play around with Next.js to figure
        it out
      </p>

      <h3>Pages</h3>
      <ul>
        <li>
          <Link href="/switch-between-react-components-with-an-onclick-event">
            <a>Switch Between React Component with an onClick Event</a>
          </Link>
        </li>
        <li>
          <Link href="/prism-themes-dark">
            <a>prism-themes-dark</a>
          </Link>
        </li>
        <li>
          <Link href="/prism-themes-light">
            <a>prism-themes-light</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
