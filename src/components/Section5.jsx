import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedWave from './AnimatedWave';
import { svgRed1 } from '../utils/svg';

export default function Section5() {
  const formRef = useRef(null);
  emailjs.init("_iF7_8NUGZWaBfOXy")

  const [form, setForm] = useState({
    name: localStorage.getItem('name') || '', 
    email: localStorage.getItem('email') || '', 
    message: localStorage.getItem('message') || ''
  })


  function handleChange(event) {
    setForm(prevForm => ({
      ...prevForm,
      [event.target.name]: event.target.value
    }))
  }

  useEffect(() => {
    localStorage.setItem('name', form.name);
    localStorage.setItem('email', form.email);
    localStorage.setItem('message', form.message);
  }, [form]);

  function notify(response) {
    if (response === true) {
    toast.success("Message sent successfully!", {
      theme: "dark",
      hideProgressBar: true,
      transition: Slide,
    })
  } else {
      toast.error("Message could not be sent. Please try again later.", {
        theme: "dark",
        hideProgressBar: true,
        transition: Slide,
      })
    }
}
  
  async function handleSubmit(event) {
    event.preventDefault();
    emailjs.sendForm('portfolio', 'template_x88kax7', formRef.current)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        notify(true)

        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("message")
        
        setForm({name: "", email: "", message: ""})

      }, (err) => {
        console.log('FAILED...', err);
        notify(false)
      });
  }

  return (
    <>
      <div className="relative flex items-top justify-center sm:items-center sm:pt-0 dark" id='contact'>
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Fill in the form to start a conversation. <br /> My average response time is about a <span className="text-white">day</span>
                </p>

                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Copenhagen, Denmark
                  </div>
                </div>


                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    sam.golpasand@solutionsharp.com
                  </div>
                </div>
                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    Or book a meeting <a href={"https://app.cal.com/solutionsharp/30min"} target="_blank" className="underline text-white hover:text-gray-300 transition duration-200">here</a>
                  </div>
                </div>
              </div>


              <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit} ref={formRef} >
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">Full Name</label>
                  <input type="text" name="name" id="name" placeholder="Full Name" required className="w-100 mt-2 py-3 px-3 transition duration-500 rounded-lg text-white bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 light:text-gray-800  font-semibold focus:border-indigo-600 focus:shadow-sm focus:shadow-indigo-600 focus:outline-none" value={form.name} onChange={handleChange} />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">Email</label>
                  <input type="email" name="email" id="email" placeholder="Email" required className="w-100 mt-2 py-3 px-3 transition duration-500 rounded-lg text-white bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 light:text-gray-800  font-semibold focus:border-indigo-600 focus:shadow-sm focus:shadow-indigo-600 focus:outline-none" value={form.email} onChange={handleChange} />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="message" className="hidden">Message</label>
                  <textarea name="message" id="message" rows="4" placeholder="Message" required className="w-100 mt-2 py-3 px-3 transition duration-500 rounded-lg text-white bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 light:text-gray-800 font-semibold focus:border-indigo-600 focus:shadow-sm focus:shadow-indigo-600 focus:outline-none" value={form.message} onChange={handleChange}> </textarea>
                </div>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={"http://samgolpasand.com/#contact"} style={{ scrollBehavior: "auto" }} />

                <button type="submit" className="md:w-32 mt-3 text-white font-bold py-3 px-6 rounded-lg  bg-indigo-600 hover:scale-105 hover:bg-indigo-500 transition ease-in-out duration-300">
                  Submit
                </button>
                <ToastContainer limit={3} stacked/>
              </form>
            </div>
          </div>
        </div>
      </div>

      <AnimatedWave svgString={svgRed1} />
    </>
  )
}
