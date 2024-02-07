'use client'
import Image from 'next/image'
import { GiClick } from 'react-icons/gi'
import React from 'react'
import projectAiWriter from '../../public/assets/inthehome.jpg'
import myecommerce from '../../public/assets/ecommerce.jpg'
import projectDonate from '../../public/assets/pichome (7).png'
const page = () => {
  return (
    <div className="h-full bg-gradient-to-r from-green-500 to-indigo-500">
      <h1 className="text-5xl bg-indigo-100 p-3 rounded-lg text-center">
        Here are some of my deploy, many are in work in progress, others are
        private so they can not be shown, but the present ones will eventually
        enjoy you a lot 😀
      </h1>
      <div className="flex flex-wrap justify-around py-6">
        <div className="bg-indigo-300 rounded-lg p-3 mt-6 w-fit flex flex-col">
          <h1 className="bg-gray-500 text-white w-fit rounded-lg p-5 lg:text-2xl md:text-2xl sm:text-xl mb-3">
            AI Blog Post Writer
          </h1>
          <div className="relative lg:w-[430px]">
            <Image src={projectAiWriter} alt="ai" className="lg:w-[430px]" />
            <div>
              <a
                href="https://ai-blogposter-d98fd0419968.herokuapp.com/"
                target="_blank"
                className="lg:w-[430px] text-2xl text-indigo-800 absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center cursor-pointer"
              >
                <div className="bg-white flex flex-row rounded-lg p-2 hover:text-white hover:bg-indigo-400">
                  Visit <GiClick className="ml-2" />
                </div>
              </a>
            </div>
          </div>
          <p className="lg:w-[430px] mt-2">
            With this web app you can use AI to make it write your blog post;
            you can choose the tone (from sad to happy and others) the AI will
            write the post on which you will have to give a description to
            instruct the AI, and eventually a title for the post too.
          </p>
        </div>
        <div className="bg-indigo-300 rounded-lg p-3 mt-6 w-fit flex flex-col">
          <h1 className="bg-gray-500 text-white w-fit rounded-lg p-5 lg:text-2xl md:text-2xl sm:text-xl mb-3">
            E-commerce
          </h1>
          <div className="relative lg:w-[430px]">
            <Image src={myecommerce} alt="ecommerce" className="lg:w-[430px]" />
            <div>
              <a
                href="https://laboutiquescarpeaccessori.com/"
                target="_blank"
                className="lg:w-[430px] text-2xl text-indigo-800 absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center cursor-pointer"
              >
                <div className="bg-white flex flex-row rounded-lg p-2 hover:text-white hover:bg-indigo-400">
                  Visit <GiClick className="ml-2" />
                </div>
              </a>
            </div>
          </div>
          <p className="lg:w-[430px] mt-2">
            The best vintage and well-designed e-commerce for nice and elegant
            women! If you are from Italy, after you easily register and login,
            you will be able to choose between a lot of top brands for all your
            kind of clothes!
          </p>
        </div>
        <div className="bg-indigo-300 rounded-lg p-3 mt-6 w-fit flex flex-col">
          <h1 className="bg-gray-500 text-white w-fit rounded-lg p-5 lg:text-2xl md:text-2xl sm:text-xl mb-3">
            Donation Web App
          </h1>
          <div className="relative lg:w-[430px]">
            <Image src={projectDonate} alt="ai" className="lg:w-[430px]" />
            <div>
              <a
                href="https://isaiahorphanagecenter.com/"
                target="_blank"
                className="lg:w-[430px] text-2xl text-indigo-800 absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center cursor-pointer"
              >
                <div className="bg-white flex flex-row rounded-lg p-2 hover:text-white hover:bg-indigo-400">
                  Visit <GiClick className="ml-2" />
                </div>
              </a>
            </div>
          </div>
          <p className="lg:w-[430px] mt-2">
            This is one of my favourite project because it has been one of my
            first, now i updated it and both the motivation putted into it both
            the project itself make me very proud of myself.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
