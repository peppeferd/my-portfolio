'use client'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import homepic1 from '../public/assets/app-development.png'
import homepic2 from '../public/assets/app-development(1).png'
import homepic3 from '../public/assets/avatar.svg'
import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
export default function Home() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient)
    return (
      <div>
        <Loader />
      </div>
    )
  else
    return (
      <main>
        <div className="flex flex-wrap justify-around gap-10 mt-36">
          <Image src={homepic1} width={350} height={350} alt="home1" />
          <div className="text-blue-600 text-2xl justify-center items-center my-auto">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'Web Developer',
                  'Mobile App Developer',
                  'Web 3 Marketing Specialist',
                  'Open Source Contributor',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          <Image src={homepic2} width={350} height={350} alt="home1" />
        </div>
        <div>
          <h1 className="text-center text-green-600 text-5xl pt-20">
            Hi there! 👋🏻
          </h1>
          <h1 className="text-center text-green-800 text-5xl pt-5">
            I AM
            <strong> GIUSEPPE FERLAZZO</strong>
          </h1>
        </div>
        <hr className="my-5 mx-5" />
        <div className="bg-white py-5">
          <h1 className=" text-blue-600 text-5xl mx-3">
            LET ME INTRODUCE MY SELF
          </h1>
          <p className=" text-green-600 text-5xl mx-3 py-6">
            I'm an ambitious and young guy living in Italy. I made this space on
            the web to let people feel free to connect to me trough one way you
            can find all over here. I'm 30 and since 2 years i fell in love with
            programming, and at least learnt something lol! I'm always looking
            for good opportunities to knock at my door, never stop growing and
            looking always for better!
            <br />
          </p>
        </div>
        <div>
          <div className="bg-blue-600 text-center text-3xl py-6">
            <h1>Feel free to connect to me trough one of these socials:</h1>
          </div>
          <div className="flex flex-wrap justify-around py-6 bg-green-600 text-blue-600 text-2xl">
            <a
              href="https://github.com/peppeferd"
              target="_blank"
              rel="noreferrer"
              className="mt-3 bg-white rounded-2xl p-6"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/giuseppeferlazzo/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 bg-white rounded-2xl p-6"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/peppeferlazzo/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 bg-white rounded-2xl p-6"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </main>
    )
}
