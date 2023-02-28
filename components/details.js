function Details({ children, summary = 'Menu' }) {
  return (
    <details>
      <summary>
        <span>{summary}</span>
      </summary>
      {children}
    </details>
  )
}

export default Details
