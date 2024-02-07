'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../app/favicon.ico'
import NavItem from './NavItem'

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'My projects', href: '/projects' },
  { text: 'Leave a comment', href: '/comments' },
  { text: 'About', href: '/about' },
  { text: 'Contacts', href: '/contacts' },
]
const Navbar = () => {
  const [navActive, setNavActive] = useState<any>(null)
  const [activeIdx, setActiveIdx] = useState(-1)

  return (
    <header>
      <nav className={`nav bg-gradient-to-r from-sky-500 to-indigo-500`}>
        <Link href={'/'}>
          <div className="flex flex-row justify-between">
            <Image src={Logo} width={30} height={30} alt="logo" />
            <h1 id="maintitlenav" className="text-2xl">
              Giuseppe Ferlazzo
            </h1>
          </div>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={`${
            navActive ? 'active' : ''
          } nav__menu-list bg-gradient-to-r from-sky-500 to-indigo-500`}
        >
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx)
                setNavActive(false)
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
