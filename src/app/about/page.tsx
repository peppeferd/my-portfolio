"use client";
import React from "react";
import { ImPointRight } from "react-icons/im";
import aboutpic1 from "../../../public/assets/about.png";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import Typewriter from "typewriter-effect";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiNpm,
  DiBootstrap,
  DiGit,
} from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTypescript,
  SiTailwindcss,
  SiSolidity,
  SiSemanticuireact,
  SiExpress,
  SiCodepen,
  SiAndroidstudio,
  SiVisualstudiocode,
  SiPostman,
  SiAdobephotoshop,
} from "react-icons/si";
export default function page() {
  return (
    <div className="h-full bg-cover bg-center bg-tech2 p-5">
      <div>
        <div className="flex flex-row items-center justify-center">
          <div>
            <h1 className="text-5xl w-fit p-3 h-fit bg-indigo-500 rounded-lg">
              Know who i am
            </h1>
          </div>
          <div>
            <Image src={aboutpic1} alt="aboutpic" />
          </div>
        </div>
        <div className="bg-indigo-300 w-fit rounded-lg mt-5 text-2xl px-3">
          <p>
            Hi everyone, I am Giuseppe Ferlazzo from Furci Siculo, Italy. I am a
            development passionate that has decided to looking for a dev roule
            in tech world. I introduce my self as a good-to-code guy with such a
            talent to cultivate these skills. Apart from coding, some other
            activities that i love to do are:
          </p>
          <ul>
            <li className="flex flex-row">
              <ImPointRight /> Playing Games
            </li>
            <li className="flex flex-row">
              <ImPointRight /> Workout
            </li>
            <li className="flex flex-row">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <div className="text-gray-500">
            <Typewriter
              options={{
                strings: ['"Defeat is a state of mind"'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>{" "}
          <h5> - Bruce Lee</h5>
        </div>
        <div className="mt-6">
          <h1 className="bg-gray-600 text-white p-3 rounded-lg w-fit">
            Professional <strong>Skillset </strong> and tools i use:
          </h1>

          <div className="flex flex-wrap max-w-screen text-9xl bg-indigo-300 py-6 my-5 rounded-lg items-center justify-center space-x-2 space-y-6">
            <SiSolidity />

            <SiTypescript />

            <TbBrandNextjs />
            <DiJavascript1 />
            <DiBootstrap />
            <SiExpress />
            <DiMongodb />
            <SiAdobephotoshop />
            <SiSemanticuireact />
            <DiNodejs />
            <SiAndroidstudio />
            <DiGit />
            <DiNpm />
            <DiReact />
            <SiTailwindcss />
            <SiCodepen />
            <SiVisualstudiocode />
            <SiPostman />
          </div>

          <h1 className="bg-gray-600 rounded-lg text-white w-fit p-3">
            Days i code
          </h1>
          <div className="flex flex-initial items-center justify-center bg-indigo-300 rounded-lg max-w-screen py-6 my-5">
            <GitHubCalendar
              username="peppeferd"
              blockSize={15}
               blockMargin={5} 
              colorScheme="light"
              fontSize={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
