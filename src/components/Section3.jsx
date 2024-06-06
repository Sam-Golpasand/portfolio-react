import React from 'react'
import Card from './Card'
import AnimatedWave from './AnimatedWave';
import { svgOrange1 } from '../utils/svg';


export default function Section3() {
  return (
    <>
      <section className="dark" id='work'>
        <h1 className="text-6xl text-center">My Work!</h1>
        <h1 className="text-sm text-slate-700 mb-10">going deeper...</h1>
        <div className="flex flex-wrap justify-center ">
          <Card Link="https://solutionsharp.com/" Picture="solutionsharp" date="October 2023" title="Solution Sharp" type="Website" />
          <Card Link="https://github.com/Sam-Golpasand/SamTheBot" Picture="samthebot" date="August 2020" title="SamTheBot" type="Discord bot" />
          <Card Link="https://github.com/Sam-Golpasand/Sneaker76" Picture="sneaker76" date="November 2023" title="Sneaker76" type="E Commerce Store" />
        </div>
      </section>

      <AnimatedWave svgString={svgOrange1} />
    </>
  )
}
