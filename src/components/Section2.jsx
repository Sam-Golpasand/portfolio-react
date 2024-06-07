import React from 'react'
import avatar from "../imgs/avatar2.jpg"
import AnimatedWave from './AnimatedWave'
import { svgYellow1 } from '../utils/svg';

export default function Section2() {

  return (
    <>
      <section id="about">
        <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-4">
          <div className="flex justify-center">
            <img src={avatar} className="max-h-50 rounded-xl transition delay-500 duration-1000 hover:scale-105 hover:shadow-2xl" alt="Sam Golpasand" />
          </div>
          <div className="flex flex-col justify-center p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl w-32 mb-4 relative inline-block font-medium text-white transition-all duration-300 hover:text-indigo-400 hover:after:w-full">
              Sam G.
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300"></span>
            </h1>
            <p className="font-normal text-sm md:text-base lg:text-lg">
              My journey in programming is an odyssey across a digital cosmos. I started with fundamental concepts, the constellations that mapped out the basics. Diving deeper, I navigated through the nebulae of data structures and the event horizons of complex algorithms.
              <br /><br />
              Frameworks and libraries became my vessels, enabling swift passage through new realms of code. Challenges arose, like cryptic bugs, but each was a lesson that expanded my knowledge galaxy.
              <br /><br />
              Collaboration with fellow coders brought shared victories and insights. Every problem solved and project launched was a star ignited in my expanding universe of experience, a continuous adventure in the ever-evolving expanse of technology.
            </p>
          </div>
        </div>
      </section>

      <AnimatedWave svgString={svgYellow1} />
    </>
  )
}
