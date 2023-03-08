import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'
import Preamble from '../components/preamble'
import { About, Doc, FB, Robot, Talk, Twitter, WhatsApp } from '../components/icons'

export default function Index() {
  return (
    <Layout mainClass="index" header={false}>
      <Head>
        <title>TaxGPT — Canada’s AI tax assistant</title>
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
            <h1 className="wordmark">TaxGPT</h1>
          </Link>
        </div>
        <FB width="0" height="0" aria-hidden="true" />

        <Preamble />
      </div>
      <div className="index--right">
        <div className="chat-container">
          <ul className="buttons--index">
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
              <div className="index--share">
                <div>Share</div>
                <ul>
                  <li>
                    <a
                      href="https://twitter.com/intent/tweet?text=Try%20out%20TaxGPT%2C%20Canada%E2%80%99s%20AI%20tax%20assistant!&url=https%3A%2F%2Ftaxgpt.ca&related=pcraig3%2C%20Creator%20of%20TaxGPT"
                      className="button button--share"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="visually-hidden">Share on Twitter</span>
                      <Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftaxgpt.ca"
                      className="button button--share"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="visually-hidden">Share on Facebook</span>
                      <FB />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/?text=Try%20out%20TaxGPT%2C%20Canada%E2%80%99s%20AI%20tax%20assistant!%0ahttps%3A%2F%2Ftaxgpt.ca"
                      className="button button--share"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="visually-hidden">Share on WhatsApp</span>
                      <WhatsApp />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
