import Link from 'next/Link'

export default function Page() {
  const themes = [
    'Coy',
    'Dark',
    'Funky',
    'Okaidia',
    'SolarizedLight',
    'Tomorrow',
    'Twilight',
  ]
  return (
    <ul>
      <li key="prism">
        <Link href={`/prism-default-theme-examples/prism`}>
          <a>Prism</a>
        </Link>
      </li>
      {themes.map((theme) => (
        <li key={theme}>
          <Link href={`/prism-default-theme-examples/${theme.toLowerCase()}`}>
            <a>{theme}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
