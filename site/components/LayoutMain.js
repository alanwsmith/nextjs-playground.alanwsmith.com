import Link from 'next/link'

export default function LayoutMain({ children }) {
  return (
    <>
      <nav className="mt-4 mx-auto pt-2 max-w-3xl">
        <div className="border-b border-gray-700">
          <Link href="/">
            <a className="text-gray-500">Home</a>
          </Link>
        </div>
      </nav>
      <main className="pb-16 mx-auto container pt-3 px-6 max-w-3xl">
        {children}
      </main>
    </>
  )
}
