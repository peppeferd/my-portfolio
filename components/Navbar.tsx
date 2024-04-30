'use client'
import React, { useState } from 'react'
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { FaLaptopCode } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  let Links = [
    { name: 'HOME', link: '/' },
    { name: 'PROJECTS', link: '/projects' },
    { name: 'ABOUT', link: '/about' },
    { name: 'CONTACT', link: '/contact' },
  ]
  let [open, setOpen] = useState(false)
  const router = useRouter()
  return (
    <div className="shadow-2xl w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-3">
          <FaLaptopCode
            className="w-7 h-7 text-blue-600"
            onClick={() => router.push('/')}
          />
          <span className="text-blue-600" onClick={() => router.push('/')}>
            Giuseppe Ferlazzo
          </span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-5 top-5 cursor-pointer md:hidden w-7 h-7 text-blue-600"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static shadow-2xl bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-12' : 'hidden'
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                key={link.link}
                className=" text-blue-600 hover:text-blue-400 duration-500 "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* button */}
      </div>
    </div>
  )
}

export default Navbar
