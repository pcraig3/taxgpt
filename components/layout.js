import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Nav from './nav'
import logo from '../public/robot.svg'

export default function Layout({ children, mainClass = '', header = true }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />

        {process.env.GITHUB_SHA ? (
          <meta name="GITHUB_SHA" content={process.env.GITHUB_SHA} />
        ) : null}

        {/* FAVICON */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b60a0a" />
        <meta name="msapplication-TileColor" content="#b60a0a" />
        <meta name="theme-color" content="#ffffff" />
        {/* OG TAGS */}
        <meta property="og:image" content="https://taxgpt.ca/robot-og.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@pcraig3" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://taxgpt.ca/robot-og.png" />
      </Head>
      <div className="wrapper" id="top">
        <div className="container">
          <header className={!header ? 'header--hidden' : null}>
            <div className="site-title">
              <Link href="/">
                <Image src={logo} className="logo logo--page" alt="Logo" />
                <span className="wordmark">TaxGPT</span>
              </Link>
            </div>
            <Nav />
          </header>
          <main className={mainClass}>{children}</main>
        </div>
      </div>
    </>
  )
}
