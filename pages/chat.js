import React, { useState, useEffect, useRef } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'
import TypebotComponent from '../components/typebot'
import { Robot } from '../components/icons'

export default function Chat() {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

  return (
    <Layout mainClass="index" header={false}>
      <Head>
        <title>Chat with TaxGPT — your Canadian AI tax assistant</title>
        <meta
          name="description"
          content="Chat with TaxGPT: a friendly AI assistant who helps Canadians find free tax-filing options."
        />
        <link rel="canonical" href="https://taxgpt.ca/chat"></link>

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Chat with TaxGPT" />
        <meta property="og:url" content="https://taxgpt.ca/chat" />
      </Head>
      <div className="index--left">
        <div className="site-title">
          <Link href="/">
            <Robot className="logo logo--index" />
            <h1 className="heading">TaxGPT</h1>
          </Link>
        </div>
        <div className="preamble">
          <p>ChatGPT recommends the relevant free tax-filing resources for your situation.</p>
          <p>ChatGPT is not sponsored by anyone. More about TaxGPT.</p>
          <p>
            <Link href="/" className="button">
              👈 <span>Back</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="index--right">
        <div ref={ref} className="chat-container chat-container--open">
          <TypebotComponent height={`${height}px`} />
        </div>
      </div>
    </Layout>
  )
}
