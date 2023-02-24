import Image from 'next/image'
import Link from 'next/link'

import logo from '../public/robot.svg'

import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function Layout({ children, mainClass = '', header = true }) {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          {header && (
            <header className={openSans.className}>
              <div className="site-title heading">
                <Link href="/">
                  <Image src={logo} alt="Logo" width={55} height={55} />
                  <span>TaxGPT</span>
                </Link>
              </div>
              <nav>
                <ul>
                  <li>
                    <Link href="/pages/about">About</Link>
                  </li>
                  <li>
                    <Link href="/pages/resources">Resources</Link>
                  </li>
                </ul>
              </nav>
            </header>
          )}
          <main className={`${mainClass} ${openSans.className}`}>{children}</main>
        </div>
      </div>
    </>
  )
}
