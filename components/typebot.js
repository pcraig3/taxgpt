import { Standard } from '@typebot.io/react'

const TypebotComponent = ({ height = '400px', chatVisit }) => {
  return process.env.TYPEBOT_ID ? (
    <Standard
      typebot={process.env.TYPEBOT_ID}
      style={{ width: '100%', height }}
      prefilledVariables={{
        returnVisitor: chatVisit,
      }}
    />
  ) : (
    <p>Oops, something went wrong with your Typebot ID</p>
  )
}

export default TypebotComponent
