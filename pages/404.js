import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout mainClass={`page page--404`}>
      <Head>
        <title>{`Page not found — TaxGPT`}</title>

        <meta name="description" content="Sorry, looks like a missing page." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Not found — TaxGPT`} />
      </Head>
      <article>
        <h1>Page not found</h1>
        <p>
          My dude, you are in the wrong place. Maybe you need Tax<em>GPS</em>?
        </p>
        <p>
          <Link href="/">Head back to the home page</Link> and start over.
        </p>
      </article>
    </Layout>
  )
}
