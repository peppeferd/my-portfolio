'use client'
import Image from 'next/image'
import homepic1 from '../public/assets/app-development.png'
import homepic2 from '../public/assets/app-development(1).png'
import homepic3 from '../public/assets/avatar.svg'
import Typewriter from 'typewriter-effect'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
export default function Home() {
  return (
    <div className="h-full bg-gradient-to-r from-green-500 to-indigo-500">
      <div className="flex flex-wrap justify-around py-6 gap-10">
        <Image src={homepic1} width={350} height={350} alt="home1" />
        <div className="text-yellow-200 text-3xl justify-center items-center my-auto">
          <Typewriter
            options={{
              strings: [
                'Web Developer',
                'Blockchain Developer',
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
        <h1 className="text-center text-yellow-100 text-5xl pt-20">
          Hi there! 👋🏻
        </h1>
        <h1 className="text-center text-yellow-300 text-5xl pt-5">
          I AM
          <strong> GIUSEPPE FERLAZZO</strong>
        </h1>
      </div>
      <div className="items-center justify-center text-center mx-auto flex py-6">
        <Image src={homepic3} alt="home3" />
      </div>
      <div>
        <h1 className=" text-yellow-100 text-5xl mx-3">
          LET ME INTRODUCE MY SELF
        </h1>
        <p className=" text-yellow-300 text-5xl mx-3 py-6">
          I'm a ambitious and young guy living in Italy. I made this space on
          the web to let people feel free to connect to me trough one way you
          can find all voer here. I'm 30 and since 2 years i fell in love with
          programming, and at least learnt something maybe! I'm always looking
          for good opportunities to knock at my door, never stop growing and
          looking always for better!
          <br />
        </p>
      </div>
      <div>
        <div className="bg-yellow-500 text-center text-3xl py-6">
          <h1>Feel free to connect to me trough one of these social:</h1>
        </div>
        <div className="flex flex-wrap justify-around py-6 bg-indigo-200 text-2xl">
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
    </div>
  )
}
