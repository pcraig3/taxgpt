import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GoogleAnalytics } from 'nextjs-google-analytics'

import '@/styles/main.scss'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [chatVisit, setChatVisit] = useState(0)

  const incrementChatVisit = () => {
    setChatVisit(chatVisit + 1)
  }

  useEffect(() => {
    if (router.asPath === '/chat') {
      incrementChatVisit()
    }
  }, [router])

  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics trackPageViews gaMeasurementId={process.env.ANALYTICS_ID} />
      )}
      <Component {...pageProps} chatVisit={chatVisit} />
    </>
  )
}
