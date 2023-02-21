import { useEffect } from 'react'
import Typebot from 'typebot-js'

const Chat = ({ height = '400px' }) => {
  useEffect(() => {
    Typebot.initContainer('typebot-container', {
      url: 'https://viewer.typebot.io/tax-gpt-kn6savv',
    })
  }, [])

  return <div id="typebot-container" style={{ width: '100%', height }} />
}

export default Chat
