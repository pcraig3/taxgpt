import { useEffect } from 'react'
import Typebot from 'typebot-js'

const TypebotComponent = ({ height = '400px' }) => {
  useEffect(() => {
    Typebot.initContainer('typebot-container', {
      url: `https://viewer.typebot.io/${process.env.TYPEBOT_ID}`,
    })
  }, [])

  return process.env.TYPEBOT_ID ? (
    <div id="typebot-container" style={{ width: '100%', height }} />
  ) : (
    <p>Oops, something went wrong with your Typebot ID</p>
  )
}

export default TypebotComponent
