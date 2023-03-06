import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'
import Preamble from '../components/preamble'
import { About, Doc, Mail, Robot, Talk } from '../components/icons'

export default function Index() {
  return (
    <Layout mainClass="index" header={false}>
      <Head>
        <title>TaxGPT — your Canadian AI tax assistant</title>
        <meta
          name="description"
          content="TaxGPT is a friendly AI assistant who helps Canadians find free tax-filing options."
        />
        <link rel="canonical" href="https://taxgpt.ca"></link>

        <meta property="og:type" content="website" />
        <meta property="og:title" content="TaxGPT" />
        <meta property="og:url" content="https://taxgpt.ca" />
      </Head>
      <div className="index--left">
        <div className="site-title">
          <Link href="/">
            <Robot className="logo logo--index" />
            <h1 className="heading">TaxGPT</h1>
          </Link>
        </div>
        <Preamble />
      </div>
      <div className="index--right">
        <div className="chat-container">
          <ul>
            <li>
              <Link href="/chat" className="button">
                <span>Let’s chat!</span>
                <Talk width="32" />
              </Link>
            </li>
            <li>
              <Link href="/pages/about" className="button">
                <span>About TaxGPT</span>
                <About height="30" />
              </Link>
            </li>
            <li>
              <Link href="/pages/resources" className="button">
                <span>Resources</span>
                <Doc width="32" />
              </Link>
            </li>
            <li>
              <a href="mailto:paul@pcraig3.ca?subject=TaxGPT question" className="button">
                <span>Get in touch</span>
                <Mail width="28" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
