import { GoogleAnalytics } from 'nextjs-google-analytics'

import '@/styles/main.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics trackPageViews gaMeasurementId={process.env.ANALYTICS_ID} />
      )}
      <Component {...pageProps} />
    </>
  )
}
