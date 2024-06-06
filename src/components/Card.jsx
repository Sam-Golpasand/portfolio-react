import React from 'react'

export default function Card(props) {
  return (
    <>
    {/* ... 1st Project ... */}
    <a href={props.Link} target="_blank">
      <div className={`h-96 w-80  object-cover m-2 rounded-lg transition duration-200 ease-in hover:scale-105 hover:shadow-2xl ${props.Picture} `}>
      <div className="h-96 w-80 opacity-0 hover:opacity-100 flex justify-center items-center transition duration-200 ease-in">
        <div className="text-center space-y-4">
          {/* Date text */}
          <p className="text-sm font-medium text-white  drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] text">{props.date}</p>
          {/*Main title text */}
          <h1 className="text-5xl font-bold text-white  drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">{props.title} </h1>
          {/* Subtitle text */}
          <p className="text-lg text-white drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">{props.type}</p>
        </div>
      </div>
    </div>
    </a>
    </>
  )
}
