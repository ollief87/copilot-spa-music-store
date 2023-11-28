import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="w-full p-4 bg-blue-500 text-white flex justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold ml-2">Copilot NextJS Music Store</h1>
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/store" className="text-white">
            Store
          </Link>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  )
}