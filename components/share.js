import { FB, Twitter, WhatsApp } from '../components/icons'

function Share() {
  return (
    <>
      <div>Share</div>
      <ul>
        <li>
          <a
            href="https://twitter.com/intent/tweet?text=Try%20out%20TaxGPT%2C%20Canada%E2%80%99s%20AI%20tax%20assistant!&url=https%3A%2F%2Ftaxgpt.ca&related=pcraig3%2C%20Creator%20of%20TaxGPT"
            className="button button--share"
            target="_blank"
            rel="noreferrer"
          >
            <span className="visually-hidden">Share on Twitter</span>
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftaxgpt.ca"
            className="button button--share"
            target="_blank"
            rel="noreferrer"
          >
            <span className="visually-hidden">Share on Facebook</span>
            <FB />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/?text=Try%20out%20TaxGPT%2C%20Canada%E2%80%99s%20AI%20tax%20assistant!%0ahttps%3A%2F%2Ftaxgpt.ca"
            className="button button--share"
            target="_blank"
            rel="noreferrer"
          >
            <span className="visually-hidden">Share on WhatsApp</span>
            <WhatsApp />
          </a>
        </li>
      </ul>
    </>
  )
}

export default Share
