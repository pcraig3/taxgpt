import * as React from 'react'

function Twitter(props) {
  return (
    <svg
      strokeMiterlimit={10}
      style={{
        fillRule: 'nonzero',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
      viewBox="0 0 30 30"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <clipPath id="a">
        <path d="M0 0h30v30H0z" />
      </clipPath>
      <g clipPath="url(#a)">
        <path d="M30 5.697c-1.105.49-2.29.82-3.536.969a6.165 6.165 0 0 0 2.706-3.405 12.34 12.34 0 0 1-3.91 1.494 6.155 6.155 0 0 0-10.487 5.612c-5.114-.256-9.648-2.706-12.685-6.43a6.14 6.14 0 0 0-.832 3.095 6.15 6.15 0 0 0 2.737 5.121 6.142 6.142 0 0 1-2.788-.77v.078c0 2.983 2.12 5.47 4.937 6.035a6.155 6.155 0 0 1-2.78.106 6.162 6.162 0 0 0 5.75 4.275 12.344 12.344 0 0 1-7.644 2.635c-.496 0-.986-.029-1.468-.087a17.424 17.424 0 0 0 9.434 2.765c11.321 0 17.51-9.378 17.51-17.511 0-.267-.005-.532-.017-.797A12.525 12.525 0 0 0 30 5.697Z" />
      </g>
    </svg>
  )
}

export default Twitter
