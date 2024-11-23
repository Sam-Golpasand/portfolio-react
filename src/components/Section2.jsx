import React from 'react'
import avatar from "../imgs/avatar3.jpg"
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
              Hi, I’m Sam, a Full Stack Developer based in Copenhagen Denmark.
              <br /><br />
              I’m a passionate programmer who discovered the joy of coding at a young age and now runs a Web Solutions Agency. I am always eager to learn new things and believe that the best way to improve is by diving into new subjects and learning through experience. I approach problems with excitement, viewing them as opportunities to grow both professionally and personally.
              <br /><br />

            </p>
          </div>
        </div>
      </section>

      <AnimatedWave svgString={svgYellow1} />
    </>
  )
}
