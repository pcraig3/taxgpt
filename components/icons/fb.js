import * as React from 'react'

function FB(props) {
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
        <path d="M15 .015c-8.284 0-15 6.717-15 15 0 7.52 5.54 13.73 12.758 14.815V18.99H9.046v-3.942h3.712v-2.624c0-4.344 2.116-6.25 5.726-6.25 1.728 0 2.643.129 3.076.186v3.442h-2.462c-1.533 0-2.068 1.453-2.068 3.09v2.156h4.491l-.608 3.942H17.03v10.872C24.351 28.869 30 22.609 30 15.015c0-8.283-6.716-15-15-15Z" />
      </g>
    </svg>
  )
}

export default FB
