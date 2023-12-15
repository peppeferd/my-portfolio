"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import homepic1 from "../../public/assets/home-main.svg";
import homepic2 from "../../public/assets/memesstesso.png";
import homepic3 from "../../public/assets/avatar.svg";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
export default function Home() {
  return (
    <div className="h-full bg-cover bg-center bg-tech">
      <h1 className="text-center text-yellow-100 text-5xl pt-20">
        Hi there! 👋🏻
      </h1>
      <h1 className="text-center text-yellow-300 text-5xl pt-5">
        I AM
        <strong> GIUSEPPE FERLAZZO</strong>
      </h1>
      <div className="flex flex-wrap justify-around mt-9 text-center">
        <div className="text-yellow-100 text-3xl">
          <Typewriter
            options={{
              strings: [
                "Developer",
                "Full Stack Developer",
                "Smart Contracts Developer",
                "Student in blockchain development",
                "Open Source Contributor",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
          <Image
            className="m-10"
            src={homepic1}
            width={300}
            height={300}
            alt="homepic"
          />
        </div>
        <div className="rounded-xl">
          <Image
            className="rounded-xl"
            src={homepic2}
            height={500}
            width={350}
            alt="mestesso"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center pt-20 pb-20">
        <div>
          <Image src={homepic3} alt="logo" />
        </div>
        <div className="ml-5">
          <h1 className=" text-yellow-100 text-5xl">
            LET ME INTRODUCE MY SELF
          </h1>
          <p className=" text-yellow-300 text-5xl">
            I fell in love with programming and I have at least learnt
            something, I guess… 🤷‍♂️
            <br />
            <br />I am fluent in JS frameworks like
            <i>
              <b className=" text-yellow-300 text-5xl">
                {" "}
                React, Next and Node.{" "}
              </b>
            </i>
          </p>
        </div>
      </div>
      <div className="text-center pt-10 pb-5 bg-gradient-to-r from-cyan-500 to-blue-500">
        <h3 className=" text-yellow-300 text-5xl">
          Feel free to connect with me trough:
        </h3>
        <div className="text-6xl flex flex-row justify-between mx-6">
          <a
            href="https://github.com/peppeferd"
            target="_blank"
            rel="noreferrer"
            className="mt-3"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/giuseppeferlazzo/"
            target="_blank"
            rel="noreferrer"
            className="mt-3"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/peppeferlazzo/"
            target="_blank"
            rel="noreferrer"
            className="mt-3"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
