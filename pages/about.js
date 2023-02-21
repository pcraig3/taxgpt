import Head from 'next/head'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>TaxGPT — your AI tax advisor</title>
        <meta name="description" content="TODO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`container`}>
        <h1>About & FAQ</h1>
        <div>
          <p>
            The purpose of this HTML is to help determine what default settings are with CSS and to
            make sure that all possible HTML Elements are included in this HTML so as to not miss
            any possible Elements when designing a site.
          </p>
        </div>
      </main>
    </Layout>
  )
}
