import React from 'react'
import scrollToElement from '../utils/scrollToElement';

export default function Navbar() {

  function handleScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const id = href.substring(1); // Remove the leading '#' character
    scrollToElement(id, 150);
  };

  return (
    <header className="fixed top-0 z-40 w-full">
    <div className="flex justify-center mt-4">
      <nav className=" flex navbar w-8/12 max-sm:w-full mx-2 bg-neutral text-neutral-content border-[2px] border-black rounded-full backdrop-blur bg-black/40">
        <div className="flex-1">
          <a href="#start" onClick={handleScroll} className="btn btn-ghost normal-case text-xl font-semibold text-normal not-italic rounded-full">Sam Golpasand</a>
        </div> 
        <div className="flex-none space-x-2">
          <a href="#about" onClick={handleScroll} className="btn btn-ghost max-lg:hidden">About</a>
          <a href="#work" onClick={handleScroll} className="btn btn-ghost max-lg:hidden">Work</a>
          <a href="#service" onClick={handleScroll} className="btn btn-ghost max-lg:hidden">Services</a>
          <a href="#contact" onClick={handleScroll} className="max-sm:hidden btn rounded-full hover:scale-105 text-white font-bold hover:bg-indigo-700 transition ease-in-out duration-300">Hit me up</a>
        </div>
      </nav>
    </div>
  </header>
  )
}

