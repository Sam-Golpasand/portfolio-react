import React from 'react'
import AnimatedWave from './AnimatedWave';
import { svgOrange2 } from '../utils/svg';



export default function Section4() {
  return (
    <>
      <section id='service'>
        <h1 className="text-4xl text-center"> Have a dream? Let's make it a reality! </h1>
        <p className="text-md m-2 flex justify-center text-center font-normal"> It's more than just coding; it's about bringing your digital dreams to life and showcasing them to the world in their full glory.</p>

        <div className="flex flex-wrap justify-center my-8 mb-32">
          {/* First Pricing */}
          <div className="max-w-md bg-secondary rounded-xl shadow-md overflow-hidden md:max-w-xl m-4">
            <div className="md:flex">
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Essential <br />Website</div>
                  <a href="/#contact" className="block mt-1 text-lg leading-tight font-medium text-white hover:text-indigo-300 transition duration-300">Perfect for startups and personal brands.</a>
                  <p className="mt-2 text-gray-300">Establish a strong, engaging digital footprint with our comprehensive starter package website.</p>
                  <div className="mt-4">
                    <span className="text-2xl font-semibold text-white">£499*</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a href="/#contact" className="w-full flex items-center justify-center px-8 py-3 bg-indigo-600 hover:scale-105 hover:bg-indigo-500 transition ease-in-out duration-300 rounded-xl"> Let's Start </a>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gray-800 md:flex-shrink-0 flex flex-col justify-between">
                <ul className="text-sm text-gray-200 list-disc list-inside">
                  <li>Modern Website Design</li>
                  <li>Mobile-Responsive Layout</li>
                  <li>Basic SEO Setup</li>
                  <li>Social Media Integration</li>
                  <li>Content Management System</li>
                  <li>Option For Secure Hosting Setup</li>
                </ul>
                <div className="text-xs text-gray-400 self-end mt-4">
                  *Starting price,<br /> may vary depending on the project scope
                </div>
              </div>
            </div>
          </div>
          {/* Second Pricing */}
          <div className="max-w-md bg-secondary rounded-xl shadow-md overflow-hidden md:max-w-xl m-4">
            <div className="md:flex">
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Professional <br /> WebApp</div>
                  <a href="/#contact" className="block mt-1 text-lg leading-tight font-medium text-white  hover:text-indigo-300 transition duration-300">Perfect for larger brands and portfolios.</a>
                  <p className="mt-2 text-gray-300">Establish a strong, engaging digital footprint with our all inclusive webapp package.</p>
                  <div className="mt-4">
                    <span className="text-xl font-semibold text-white">Individual Pricing</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a href="/#contact" className="w-full flex items-center justify-center px-8 py-3 bg-indigo-600 hover:scale-105 hover:bg-indigo-500 transition ease-in-out duration-300 rounded-xl"> Let's Start </a>
                  </div>
                </div>
              </div>
              <div className="p-8  bg-gray-800 md:flex-shrink-0 flex flex-col justify-between">
                <ul className="text-sm text-gray-200 list-disc list-inside">
                  <li>Advanced User Interface Design</li>
                  <li>Cross-Platform Compatibility</li>
                  <li>Database Integration</li>
                  <li>Automated Workflows</li>
                  <li>API Integration</li>
                  <li>Ongoing Support & Maintenance</li>
                  <li>Option For Secure Hosting Setup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>


      </section>

      <AnimatedWave svgString={svgOrange2} />
    </>
  )
}
