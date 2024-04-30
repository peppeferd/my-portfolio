'use client'
import React, { useEffect, useState } from 'react'
import { TbBrandReactNative, TbBrandNextjs } from 'react-icons/tb'
import {
  SiMongodb,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudio,
  SiAndroidstudio,
  SiPostman,
} from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'
import {
  FaGitAlt,
  FaReact,
  FaDownload,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from 'react-icons/fa'
import Link from 'next/link'
const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-green-600 min-h-screen text-3xl pt-36">
      <h1 className="mx-auto text-center p-4 bg-blue-600 text-white max-w-fit mb-9 rounded-full">
        Some info about my work and skills
      </h1>
      <div>
        <h1 className="bg-blue-600 w-fit mx-2 rounded-md p-3 text-center">
          Some of the technologies and tools i use are:
        </h1>
        <div className="flex flex-wrap justify-around text-green-800  mx-2 text-9xl mt-10 gap-10 ">
          <FaHtml5 className="hover:text-black" />
          <FaCss3Alt className="hover:text-black" />
          <IoLogoJavascript className="hover:text-black" />
          <SiTypescript className="hover:text-black" />
          <FaReact className="hover:text-black" />
          <FaNodeJs className="hover:text-black" />
          <SiTailwindcss className="hover:text-black" />
          <TbBrandNextjs className="hover:text-black" />
          <TbBrandReactNative className="hover:text-black" />
          <SiMongodb className="hover:text-black" />
          <SiSolidity className="hover:text-black" />
          <FaGitAlt className="hover:text-black" />
          <SiVisualstudio className="hover:text-black" />
          <SiPostman className="hover:text-black" />
          <SiAndroidstudio className="hover:text-black" />
        </div>
      </div>
      <div className="flex flex-col mx-2">
        <h1 className="bg-blue-600 w-fit my-10 rounded-md p-3 ">
          Download resume
        </h1>
        <div className="flex flex-row gap-5 mb-10">
          <h1> Download resume in english 🇬🇧</h1>
          <Link
            target="_blank"
            href="/assets/GiuseppesCVenglish.pdf"
            download={true}
          >
            <FaDownload className="text-gray-800" />
          </Link>
        </div>
        <div className="flex flex-row gap-5 pb-10">
          <h1> Download resume in italian 🇮🇹</h1>
          <Link
            target="_blank"
            href="/assets/GiuseppesCVitaliano.pdf"
            download={true}
          >
            <FaDownload className="text-gray-800" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
