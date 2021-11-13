import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Layout from '../components/layouts/layout'
import { ReactQueryCacheProvider, QueryCache } from 'react-query'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>)
}


export default MyApp
