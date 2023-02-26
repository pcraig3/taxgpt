import React, { useState, useEffect, useRef } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import { Open_Sans, League_Spartan } from '@next/font/google'
const openSans = Open_Sans({ subsets: ['latin'] })
const headings = League_Spartan({ subsets: ['latin'] })

import Layout from '../components/layout'
import Chat from '../components/chat'

import { About, Doc, Mail, Robot, Talk } from '../components/icons'

export default function Hello() {
  const [height, setHeight] = useState(0)
  const [loadChat, setLoadChat] = useState(false)
  openSans
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

  return (
    <Layout mainClass="hello" header={false}>
      <Head>
        <title>TaxGPT — AI tax advisor for Canada</title>
        <meta name="description" content="TODO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hello--left">
        <Robot className="hello--logo" width={150} />
        <h1 className={headings.className}>TaxGPT</h1>
        <p>
          TaxGPT is a friendly AI assistant who helps Canadians better understand their options for
          free tax filing.
        </p>
        <p>
          TaxGPT gives you advice, it doesn’t collect personal data and it can’t file your taxes for
          you.
        </p>
      </div>
      <div className="hello--right">
        <div ref={ref} className={`chat-container ${loadChat && 'chat-container--open'}`}>
          {loadChat ? (
            <Chat height={`${height}px`} />
          ) : (
            <ul>
              <li>
                <button
                  onClick={() => setLoadChat(() => true)}
                  className={`${openSans.className} button`}
                >
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
                <a href="mailto:paul@pcraig3.ca" className="button">
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
