import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedWave from './AnimatedWave'
import { svgGreen1, svgGreen2 } from '../utils/svg';



export default function Section1() {
  return (
    <>
      <AnimatedWave svgString={svgGreen1} />
      <section className=" justify-center center text-center p-12 dark">
        <h1 className="text-6xl  font-bold text-transparent max-[660px]:text-4xl max-[800px]:text-5xl bg-clip-text bg-gradient-to-r h-20 from-green-400 to-blue-500 dark max-xl:h-32">
          Crafting Code, Engineering Elegance
        </h1>
        <p className="mt-6 text-2xl max-[660px]:text-lg max-[800px]:text-xl font-light text-gray-300 w-6/12  max-xl:w-11/12">
          Welcome to the crossroads where creativity meets technology. I’m Sam, a software artisan dedicated to building seamless digital experiences. Dive into my world of innovative solutions and collaborative triumphs.
        </p>
        <br />
        <br />
        <a href="#contact"> <button className="bg-indigo-600 hover:bg-blue-dark hover:scale-105 text-white font-bold py-3 px-6 rounded-full mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
          Wanna work together?
        </button></a>

        <span className="mb-20 max-[800px]:mb-0"></span>
      </section>

      <AnimatedWave svgString={svgGreen2} />
    </>
  )
}
