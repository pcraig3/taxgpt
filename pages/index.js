import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'
import Preamble from '../components/preamble'
import Share from '../components/share'
import { About, Doc, FB, Robot, Talk } from '../components/icons'

export default function Index() {
  return (
    <Layout mainClass="index" header={false}>
      <Head>
        <title>TaxGPT — Canada’s AI tax chatbot</title>
        <meta
          name="description"
          content="TaxGPT is a friendly AI chatbot who helps Canadians find free tax-filing options."
        />
        <link rel="canonical" href="https://taxgpt.ca"></link>

        <meta property="og:type" content="website" />
        <meta property="og:title" content="TaxGPT" />
        <meta property="og:url" content="https://taxgpt.ca" />
      </Head>
      <div className="index--left">
        <FB width="0" height="0" aria-hidden="true" />

        <div className="site-title">
          <Link href="/">
            <Robot className="logo logo--index" />
            <h1 className="wordmark">TaxGPT</h1>
          </Link>
        </div>
        <Preamble />
      </div>
      <div className="index--right">
        <div className="chat-container">
          <ul className="buttons--index">
            <li>
              <Link href="/chat" className="button">
                <span>Let’s chat!</span>
                <Talk />
              </Link>
            </li>
            <li>
              <Link href="/pages/about" className="button">
                <span>About TaxGPT</span>
                <About />
              </Link>
            </li>
            <li>
              <Link href="/pages/resources" className="button">
                <span>Resources</span>
                <Doc />
              </Link>
            </li>
            <li>
              <div className="share--buttons">
                <Share />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
