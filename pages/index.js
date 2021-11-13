import Head from 'next/head'

import Home from '../components/layouts/Home'
import fetcher from '../utils/fetcher'



export default function HomePage(props) {
  return (
    <div className="page">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   

    </div>
  )
}
export async function getStaticProps() {
  return { props: (await getTaxiData()) , revalidate: 10 }

  // `getStaticProps` is executed on the server side.
  // const article = await getArticleFromAPI()
  // return {
  //   props: {
  //     fallback: {
  //       '/api/article': article
  //     }
  //   }
  // }
}