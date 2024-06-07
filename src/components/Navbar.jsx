import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed top-0 z-40 w-full">
    <div className="flex justify-center mt-4">
      <nav className=" flex navbar w-8/12 max-sm:w-full mx-2 bg-neutral text-neutral-content border-[2px] border-black rounded-full backdrop-blur bg-black/40">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl font-semibold text-normal not-italic rounded-full">Sam Golpasand</a>
        </div> 
        <div className="flex-none space-x-2">
          <a href="/#about" className="btn btn-ghost max-lg:hidden">About</a>
          <a href="/#work" className="btn btn-ghost max-lg:hidden">Work</a>
          <a href="/#service" className="btn btn-ghost max-lg:hidden">Services</a>
          <a href="/#contact" className="max-sm:hidden btn rounded-full hover:scale-105 text-white font-bold hover:bg-indigo-700 transition ease-in-out duration-300">Hit me up</a>
        </div>
      </nav>
    </div>
  </header>
  )
}

