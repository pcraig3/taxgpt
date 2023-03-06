import * as React from 'react'

function Back(props) {
  return (
    <svg
      strokeMiterlimit={10}
      style={{
        fillRule: 'nonzero',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
      viewBox="0 0 500 350"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <clipPath id="a">
        <path d="M0 0h500v350H0z" />
      </clipPath>
      <g clipPath="url(#a)">
        <path d="M482.772 159.091H58.869L201.848 27.155c6.731-6.211 6.731-16.282 0-22.497-6.731-6.21-17.646-6.21-24.381 0L5.048 163.75c-6.73 6.21-6.73 16.281 0 22.496l172.419 159.091c3.371 3.111 7.774 4.663 12.188 4.663 4.415 0 8.822-1.552 12.189-4.663 6.731-6.211 6.731-16.282 0-22.496L58.854 190.904h423.904c9.518 0 17.242-7.127 17.242-15.909s-7.724-15.909-17.242-15.909l.014.005Z" />
      </g>
    </svg>
  )
}

export default Back
