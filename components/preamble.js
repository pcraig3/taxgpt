import Link from 'next/link'

import { Back } from './icons'

function Preamble() {
  return (
    <div className="preamble">
      <div className="preamble--index">
        <p>
          TaxGPT is a friendly AI advisor who helps Canadians understand their options for free tax
          filing.
        </p>
        <p>
          <strong>TaxGPT gives advice</strong>. It doesn’t collect personal data or file your taxes
          for you.
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
