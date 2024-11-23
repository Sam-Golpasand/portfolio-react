"use client"

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import AnimatedWave from './AnimatedWave'
import { svgOrange1 } from '../utils/svg'

const projects = [
  {
    id: 1,
    title: "Solution Sharp",
    type: "Website",
    date: "October 2023",
    description: "A comprehensive website solution for businesses, featuring modern design and robust functionality.",
    link: "https://solutionsharp.com/",
    image: "/SolutionSharp.png"
  },
  {
    id: 2,
    title: "Elite Elektro",
    type: "WebApp",
    date: "September 2024",
    description: "An electrician company based in Denmark",
    link: "https://eliteelektro.dk",
    image: "/EliteElektro.png"
  },
  {
    id: 3,
    title: "GoGo-Car",
    type: "WebApp",
    date: "August 2024",
    description: "A childrens car rental service for malls and shopping centers.",
    link: "https://gogocar.dk",
    image: "/GoGoCar.png"
  }
]

export default function Component() {
  const [expandedId, setExpandedId] = useState(null)
  const scrollContainerRef = useRef(null)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  useEffect(() => {
    if (expandedId && scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const expandedElement = container.querySelector(`[data-id="${expandedId}"]`)
      if (expandedElement) {
        const containerWidth = container.offsetWidth
        const elementWidth = expandedElement.clientWidth
        const elementLeft = (expandedElement).offsetLeft
        const scrollLeft = elementLeft - (containerWidth - elementWidth) / 2
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
      }
    }
  }, [expandedId])

  return (
    <>
    <section className="py-16 px-4 bg-[#232d3f] overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">My Work</h2>
        <p className="text-muted-foreground text-center mb-12">Explore my latest projects</p>
        <div 
          ref={scrollContainerRef}
          className="flex justify-center items-center overflow-x-auto pb-4 gap-4 min-h-[450px]"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              data-id={project.id}
              onClick={() => toggleExpand(project.id)}
              className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out ${
                expandedId === project.id ? 'w-[600px] bg-primary/10' : 'w-[300px] hover:shadow-xl'
              }`}
              style={{ height: '400px' }}
            >
              <div className="h-full w-full relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                  expandedId === project.id ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                }`}>
                  <div className="p-6 h-full flex flex-col justify-between text-white">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm mb-4">{project.type} • {project.date}</p>
                    </div>
                    {expandedId === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="mb-4">{project.description}</p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-foreground hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <AnimatedWave svgString={svgOrange1} />
    </>
  )
}