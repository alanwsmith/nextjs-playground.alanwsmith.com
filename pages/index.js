import Head from 'next/head'
import Favicons from '../components/Favicons'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scratchpad - Alan W. Smith</title>
        <meta
          name="description"
          content="The coding scratchpad of Alan W. Smith"
        />
        <Favicons />
      </Head>
      <main>
        <div>here</div>
      </main>
    </div>
  )
}
