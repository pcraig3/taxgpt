import React, { useState, useEffect, useRef } from 'react'

import Head from 'next/head'
import Layout from '../components/layout'
import Chat from '../components/Chat'

export default function Home() {
  const [height, setHeight] = useState(0)
  const [loadChat, setLoadChat] = useState(false)

  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

  return (
    <Layout mainClass="index">
      <Head>
        <title>TaxGPT — your AI tax advisor</title>
        <meta name="description" content="TODO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>TaxGPT</h1>
      <div ref={ref} className="chat-container">
        {loadChat ? (
          <Chat height={`${height}px`} />
        ) : (
          <>
            <p>Hi there, welcome to TaxGPT, your AI tax assistant. Click the button to start.</p>
            <button onClick={() => setLoadChat(() => true)}>Let’s chat!</button>
          </>
        )}
      </div>
      {/* <Chat height={'200px'} /> */}
    </Layout>
  )
}
