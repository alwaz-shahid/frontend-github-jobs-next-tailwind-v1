import Head from 'next/head'
import Home from '../components/layouts/Home'

export default function HomePage() {
  return (
    <div className="page">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </div>
  )
}
