import React, { useState, useEffect, useRef } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Open_Sans } from '@next/font/google'
const openSans = Open_Sans({ subsets: ['latin'] })

import Layout from '../components/layout'
import Chat from '../components/chat'
import logo from '../public/robot.svg'

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
        <title>Hello! — your AI tax advisor</title>
        <meta name="description" content="TODO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="left-side">
        <Image className="hello--logo" src={logo} alt="Logo" width={150} height={150} />
        <h1>TaxGPT</h1>
        <p>
          TaxGPT is a friendly AI assistant who helps Canadians better understand their options for
          free tax filing.
        </p>
        <p>TaxGPT is not a tax filing service, and doesn’t collect any personal data.</p>
      </div>
      <div className="right-side">
        <div ref={ref} className="chat-container">
          {loadChat ? (
            <Chat height={`${height}px`} />
          ) : (
            <ul>
              <li>
                <button className={openSans.className}>Chat with me!</button>
              </li>
              <li>
                <Link href="/pages/resources">Resources</Link>
              </li>
              <li>
                <Link href="/pages/about">About TaxGPT</Link>
              </li>
              <li>
                <a href="mailto:paul@pcraig3.ca">Get in touch</a>
              </li>
              {/* <button onClick={() => setLoadChat(() => true)}>Let’s chat!</button> */}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  )
}
