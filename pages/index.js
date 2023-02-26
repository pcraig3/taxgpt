import React, { useState, useEffect, useRef } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'
import Chat from '../components/chat'

import { About, Doc, Mail, Robot, Talk } from '../components/icons'

export default function Index() {
  const [height, setHeight] = useState(0)
  const [loadChat, setLoadChat] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

  return (
    <Layout mainClass="index" header={false}>
      <Head>
        <title>TaxGPT — AI tax advisor for Canada</title>
        <meta name="description" content="TODO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="index--left">
        <Robot className="index--logo" width={150} />
        <h1 className="heading">TaxGPT</h1>
        <p>
          TaxGPT is a friendly AI assistant who helps Canadians better understand their options for
          free tax filing.
        </p>
        <p>
          TaxGPT gives advice, it doesn’t collect personal data, and it can’t file your taxes for
          you.
        </p>
      </div>
      <div className="index--right">
        <div ref={ref} className={`chat-container ${loadChat && 'chat-container--open'}`}>
          {loadChat ? (
            <Chat height={`${height}px`} />
          ) : (
            <ul>
              <li>
                <button onClick={() => setLoadChat(() => true)} className="button">
                  <span>Let’s chat!</span>
                  <Talk width="32" />
                </button>
              </li>
              <li>
                <Link href="/pages/resources" className="button">
                  <span>Resources</span>
                  <Doc width="32" />
                </Link>
              </li>
              <li>
                <Link href="/pages/about" className="button">
                  <span>About TaxGPT</span>
                  <About height="30" />
                </Link>
              </li>
              <li>
                <a href="mailto:paul@pcraig3.ca?subject=TaxGPT question" className="button">
                  <span>Get in touch</span>
                  <Mail width="28" />
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </Layout>
  )
}
