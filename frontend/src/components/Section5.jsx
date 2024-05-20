import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedWave from './AnimatedWave';

const svgString = `<svg id="visual" viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
<rect x="0" y="0" width="900" height="200" fill="#232d3f"></rect>
<path d="M0 92L12.5 93.5C25 95 50 98 75 97.2C100 96.3 125 91.7 150 89.7C175 87.7 200 88.3 225 87.5C250 86.7 275 84.3 300 83.3C325 82.3 350 82.7 375 80.5C400 78.3 425 73.7 450 76.5C475 79.3 500 89.7 525 90.5C550 91.3 575 82.7 600 77.3C625 72 650 70 675 70.7C700 71.3 725 74.7 750 81.7C775 88.7 800 99.3 825 98.7C850 98 875 86 887.5 80L900 74L900 201L887.5 201C875 201 850 201 825 201C800 201 775 201 750 201C725 201 700 201 675 201C650 201 625 201 600 201C575 201 550 201 525 201C500 201 475 201 450 201C425 201 400 201 375 201C350 201 325 201 300 201C275 201 250 201 225 201C200 201 175 201 150 201C125 201 100 201 75 201C50 201 25 201 12.5 201L0 201Z" fill="#e20000" finalpath="M0 110L12.5 110.2C25 110.3 50 110.7 75 103.7C100 96.7 125 82.3 150 75.3C175 68.3 200 68.7 225 75.7C250 82.7 275 96.3 300 99C325 101.7 350 93.3 375 86.3C400 79.3 425 73.7 450 77.2C475 80.7 500 93.3 525 99.5C550 105.7 575 105.3 600 100C625 94.7 650 84.3 675 85.2C700 86 725 98 750 97C775 96 800 82 825 77.5C850 73 875 78 887.5 80.5L900 83L900 201L887.5 201C875 201 850 201 825 201C800 201 775 201 750 201C725 201 700 201 675 201C650 201 625 201 600 201C575 201 550 201 525 201C500 201 475 201 450 201C425 201 400 201 375 201C350 201 325 201 300 201C275 201 250 201 225 201C200 201 175 201 150 201C125 201 100 201 75 201C50 201 25 201 12.5 201L0 201Z"></path>
<path d="M0 121L12.5 117.5C25 114 50 107 75 104.8C100 102.7 125 105.3 150 105C175 104.7 200 101.3 225 99.3C250 97.3 275 96.7 300 99C325 101.3 350 106.7 375 107C400 107.3 425 102.7 450 100C475 97.3 500 96.7 525 99.3C550 102 575 108 600 108C625 108 650 102 675 102C700 102 725 108 750 106.5C775 105 800 96 825 93.2C850 90.3 875 93.7 887.5 95.3L900 97L900 201L887.5 201C875 201 850 201 825 201C800 201 775 201 750 201C725 201 700 201 675 201C650 201 625 201 600 201C575 201 550 201 525 201C500 201 475 201 450 201C425 201 400 201 375 201C350 201 325 201 300 201C275 201 250 201 225 201C200 201 175 201 150 201C125 201 100 201 75 201C50 201 25 201 12.5 201L0 201Z" fill="#a91a0a" finalpath="M0 115L12.5 110.5C25 106 50 97 75 94.7C100 92.3 125 96.7 150 99.8C175 103 200 105 225 106.7C250 108.3 275 109.7 300 108.2C325 106.7 350 102.3 375 104C400 105.7 425 113.3 450 118.5C475 123.7 500 126.3 525 120.8C550 115.3 575 101.7 600 101.7C625 101.7 650 115.3 675 122.2C700 129 725 129 750 123C775 117 800 105 825 101.8C850 98.7 875 104.3 887.5 107.2L900 110L900 201L887.5 201C875 201 850 201 825 201C800 201 775 201 750 201C725 201 700 201 675 201C650 201 625 201 600 201C575 201 550 201 525 201C500 201 475 201 450 201C425 201 400 201 375 201C350 201 325 201 300 201C275 201 250 201 225 201C200 201 175 201 150 201C125 201 100 201 75 201C50 201 25 201 12.5 201L0 201Z"></path>
<path d="M0 116L12.5 118.2C25 120.3 50 124.7 75 126.5C100 128.3 125 127.7 150 129.5C175 131.3 200 135.7 225 135.2C250 134.7 275 129.3 300 125.5C325 121.7 350 119.3 375 120.3C400 121.3 425 125.7 450 127.5C475 129.3 500 128.7 525 125.8C550 123 575 118 600 115.8C625 113.7 650 114.3 675 117.3C700 120.3 725 125.7 750 130.5C775 135.3 800 139.7 825 138.2C850 136.7 875 129.3 887.5 125.7L900 122L900 201L887.5 201C875 201 850 201 825 201C800 201 775 201 750 201C725 201 700 201 675 201C650 201 625 201 600 201C575 201 550 201 525 201C500 201 475 201 450 201C425 201 400 201 375 201C350 201 325 201 300 201C275 201 250 201 225 201C200 201 175 201 150 201C125 201 100 201 75 201C50 201 25 201 12.5 201L0 201Z" fill="#741e0f" finalpath="M0 115L12.5 116.7C25 118.3 50 121.7 75 124.8C100 128 125 131 150 132.8C175 134.7 200 135.3 225 135.7C250 136 275 136 300 137.3C325 138.7 350 141.3 375 137.7C400 134 425 124 450 119.7C475 115.3 500 116.7 525 119.2C550 121.7 575 125.3 600 129.3C625 133.3 650 137.7 675 134.7C700 131.7 725 121.3 750 117.3C775 113.3 800 115.7 825 116.3C850 117 875 116 887.5 115.5L900 115L900 201L887.5 201C875 201 850 201 825 201C800 201 775 201 750 201C725 201 700 201 675 201C650 201 625 201 600 201C575 201 550 201 525 201C500 201 475 201 450 201C425 201 400 201 375 201C350 201 325 201 300 201C275 201 250 201 225 201C200 201 175 201 150 201C125 201 100 201 75 201C50 201 25 201 12.5 201L0 201Z"></path>
<path d="M0 139L12.5 140.3C25 141.7 50 144.3 75 148C100 151.7 125 156.3 150 156.2C175 156 200 151 225 151.7C250 152.3 275 158.7 300 160.7C325 162.7 350 160.3 375 158.7C400 157 425 156 450 154.7C475 153.3 500 151.7 525 149C550 146.3 575 142.7 600 145C625 147.3 650 155.7 675 156.3C700 157 725 150 750 147.7C775 145.3 800 147.7 825 149.3C850 151 875 152 887.5 152.5L900 153L900 201L887.5 201C875 201 850 201 825 201C800 201 775 201 750 201C725 201 700 201 675 201C650 201 625 201 600 201C575 201 550 201 525 201C500 201 475 201 450 201C425 201 400 201 375 201C350 201 325 201 300 201C275 201 250 201 225 201C200 201 175 201 150 201C125 201 100 201 75 201C50 201 25 201 12.5 201L0 201Z" fill="#421a10" finalpath="M0 144L12.5 144.3C25 144.7 50 145.3 75 146C100 146.7 125 147.3 150 148.3C175 149.3 200 150.7 225 153.8C250 157 275 162 300 160.8C325 159.7 350 152.3 375 150C400 147.7 425 150.3 450 151.8C475 153.3 500 153.7 525 155.2C550 156.7 575 159.3 600 160.5C625 161.7 650 161.3 675 158C700 154.7 725 148.3 750 144.5C775 140.7 800 139.3 825 138.8C850 138.3 875 138.7 887.5 138.8L900 139L900 201L887.5 201C875 201 850 201 825 201C800 201 775 201 750 201C725 201 700 201 675 201C650 201 625 201 600 201C575 201 550 201 525 201C500 201 475 201 450 201C425 201 400 201 375 201C350 201 325 201 300 201C275 201 250 201 225 201C200 201 175 201 150 201C125 201 100 201 75 201C50 201 25 201 12.5 201L0 201Z"></path>
<path d="M0 177L12.5 176.5C25 176 50 175 75 175.8C100 176.7 125 179.3 150 176.8C175 174.3 200 166.7 225 165.3C250 164 275 169 300 172.2C325 175.3 350 176.7 375 177.3C400 178 425 178 450 179.2C475 180.3 500 182.7 525 182C550 181.3 575 177.7 600 175.3C625 173 650 172 675 173.2C700 174.3 725 177.7 750 179C775 180.3 800 179.7 825 176.5C850 173.3 875 167.7 887.5 164.8L900 162L900 201L887.5 201C875 201 850 201 825 201C800 201 775 201 750 201C725 201 700 201 675 201C650 201 625 201 600 201C575 201 550 201 525 201C500 201 475 201 450 201C425 201 400 201 375 201C350 201 325 201 300 201C275 201 250 201 225 201C200 201 175 201 150 201C125 201 100 201 75 201C50 201 25 201 12.5 201L0 201Z" fill="#0f0f0f" finalpath="M0 166L12.5 167.3C25 168.7 50 171.3 75 173.3C100 175.3 125 176.7 150 176.7C175 176.7 200 175.3 225 176C250 176.7 275 179.3 300 181C325 182.7 350 183.3 375 181.3C400 179.3 425 174.7 450 172.5C475 170.3 500 170.7 525 170.3C550 170 575 169 600 168.8C625 168.7 650 169.3 675 168.2C700 167 725 164 750 165.8C775 167.7 800 174.3 825 176.8C850 179.3 875 177.7 887.5 176.8L900 176L900 201L887.5 201C875 201 850 201 825 201C800 201 775 201 750 201C725 201 700 201 675 201C650 201 625 201 600 201C575 201 550 201 525 201C500 201 475 201 450 201C425 201 400 201 375 201C350 201 325 201 300 201C275 201 250 201 225 201C200 201 175 201 150 201C125 201 100 201 75 201C50 201 25 201 12.5 201L0 201Z"></path>
</svg>
`;

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
      <div className="relative flex items-top justify-center sm:items-center sm:pt-0 dark">
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

      <AnimatedWave svgString={svgString} />
    </>
  )
}
