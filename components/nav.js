import React from 'react'
import Link from 'next/link'

import Details from './details'

import { useRouter } from 'next/router'

const NavLinks = () => {
  const router = useRouter()

  return (
    <ul>
      <li>
        <Link href="/" aria-current={router.asPath === '/' ? true : null}>
          Home
        </Link>
      </li>
      <li>
        <Link
          className="nav--highlight"
          href="/chat"
          aria-current={router.asPath === '/chat' ? true : null}
        >
          Chat
        </Link>
      </li>
      <li>
        <Link href="/pages/about" aria-current={router.asPath === '/pages/about' ? true : null}>
          About
        </Link>
      </li>
      <li>
        <Link
          href="/pages/resources"
          aria-current={router.asPath === '/pages/resources' ? true : null}
        >
          Resources
        </Link>
      </li>
    </ul>
  )
}

function Nav() {
  return (
    <nav>
      <div className="nav--sm">
        <Details>
          <NavLinks />
        </Details>
      </div>
      <div className="nav--lg">
        <NavLinks />
      </div>
    </nav>
  )
}

export default Nav
