import Link from 'next/link'

import { Back } from './icons'

function Preamble() {
  return (
    <div className="preamble">
      <div className="preamble--index">
        <p>
          TaxGPT is a friendly AI chatbot who helps Canadians understand their options for free tax
          filing, and answers general tax questions.
        </p>
        <p>
          <strong>TaxGPT gives information</strong>. It can’t calculate your taxes or file your
          taxes for you.
        </p>
      </div>
      <div className="preamble--chat">
        <p>Chat with TaxGPT for free tax-filing recommendations relevant to you.</p>
        <p>
          <strong>TaxGPT is not sponsored by anyone</strong>.
        </p>
        <div className="preamble--buttons">
          <Link href="/" className="button button--back">
            <Back width="25" />
            <span>Back</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Preamble
