import React from 'react'
import AnimatedWave from './AnimatedWave';


const svgString = `
<svg id="visual" viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
  <rect x="0" y="0" width="900" height="200" fill="#232d3f"></rect>
  <path
    d="M0 101L12.5 103.5C25 106 50 111 75 109.7C100 108.3 125 100.7 150 101.2C175 101.7 200 110.3 225 109.5C250 108.7 275 98.3 300 98.3C325 98.3 350 108.7 375 112.2C400 115.7 425 112.3 450 107.8C475 103.3 500 97.7 525 99.5C550 101.3 575 110.7 600 113.7C625 116.7 650 113.3 675 111.2C700 109 725 108 750 108.2C775 108.3 800 109.7 825 107.8C850 106 875 101 887.5 98.5L900 96L900 0L887.5 0C875 0 850 0 825 0C800 0 775 0 750 0C725 0 700 0 675 0C650 0 625 0 600 0C575 0 550 0 525 0C500 0 475 0 450 0C425 0 400 0 375 0C350 0 325 0 300 0C275 0 250 0 225 0C200 0 175 0 150 0C125 0 100 0 75 0C50 0 25 0 12.5 0L0 0Z"
    fill="#f7770f"
    finalpath="M0 106L12.5 104.5C25 103 50 100 75 100.8C100 101.7 125 106.3 150 108.3C175 110.3 200 109.7 225 110.5C250 111.3 275 113.7 300 114.7C325 115.7 350 115.3 375 117.5C400 119.7 425 124.3 450 121.5C475 118.7 500 108.3 525 107.5C550 106.7 575 115.3 600 120.7C625 126 650 128 675 127.3C700 126.7 725 123.3 750 116.3C775 109.3 800 98.7 825 99.3C850 100 875 112 887.5 118L900 124L900 0L887.5 0C875 0 850 0 825 0C800 0 775 0 750 0C725 0 700 0 675 0C650 0 625 0 600 0C575 0 550 0 525 0C500 0 475 0 450 0C425 0 400 0 375 0C350 0 325 0 300 0C275 0 250 0 225 0C200 0 175 0 150 0C125 0 100 0 75 0C50 0 25 0 12.5 0L0 0Z"></path>
  <path
    d="M0 109L12.5 107.2C25 105.3 50 101.7 75 100C100 98.3 125 98.7 150 99.2C175 99.7 200 100.3 225 95.8C250 91.3 275 81.7 300 76.5C325 71.3 350 70.7 375 73.3C400 76 425 82 450 85.5C475 89 500 90 525 93.7C550 97.3 575 103.7 600 104.7C625 105.7 650 101.3 675 95.5C700 89.7 725 82.3 750 77.7C775 73 800 71 825 72.8C850 74.7 875 80.3 887.5 83.2L900 86L900 0L887.5 0C875 0 850 0 825 0C800 0 775 0 750 0C725 0 700 0 675 0C650 0 625 0 600 0C575 0 550 0 525 0C500 0 475 0 450 0C425 0 400 0 375 0C350 0 325 0 300 0C275 0 250 0 225 0C200 0 175 0 150 0C125 0 100 0 75 0C50 0 25 0 12.5 0L0 0Z"
    fill="#b85b17"
    finalpath="M0 77L12.5 80.5C25 84 50 91 75 93.2C100 95.3 125 92.7 150 93C175 93.3 200 96.7 225 98.7C250 100.7 275 101.3 300 99C325 96.7 350 91.3 375 91C400 90.7 425 95.3 450 98C475 100.7 500 101.3 525 98.7C550 96 575 90 600 90C625 90 650 96 675 96C700 96 725 90 750 91.5C775 93 800 102 825 104.8C850 107.7 875 104.3 887.5 102.7L900 101L900 0L887.5 0C875 0 850 0 825 0C800 0 775 0 750 0C725 0 700 0 675 0C650 0 625 0 600 0C575 0 550 0 525 0C500 0 475 0 450 0C425 0 400 0 375 0C350 0 325 0 300 0C275 0 250 0 225 0C200 0 175 0 150 0C125 0 100 0 75 0C50 0 25 0 12.5 0L0 0Z"></path>
  <path
    d="M0 52L12.5 54.5C25 57 50 62 75 66.2C100 70.3 125 73.7 150 75C175 76.3 200 75.7 225 76.8C250 78 275 81 300 78.5C325 76 350 68 375 68.5C400 69 425 78 450 77.3C475 76.7 500 66.3 525 60.7C550 55 575 54 600 57.7C625 61.3 650 69.7 675 69.2C700 68.7 725 59.3 750 56.5C775 53.7 800 57.3 825 61C850 64.7 875 68.3 887.5 70.2L900 72L900 0L887.5 0C875 0 850 0 825 0C800 0 775 0 750 0C725 0 700 0 675 0C650 0 625 0 600 0C575 0 550 0 525 0C500 0 475 0 450 0C425 0 400 0 375 0C350 0 325 0 300 0C275 0 250 0 225 0C200 0 175 0 150 0C125 0 100 0 75 0C50 0 25 0 12.5 0L0 0Z"
    fill="#7c4118"
    finalpath="M0 82L12.5 79.8C25 77.7 50 73.3 75 71.5C100 69.7 125 70.3 150 68.5C175 66.7 200 62.3 225 62.8C250 63.3 275 68.7 300 72.5C325 76.3 350 78.7 375 77.7C400 76.7 425 72.3 450 70.5C475 68.7 500 69.3 525 72.2C550 75 575 80 600 82.2C625 84.3 650 83.7 675 80.7C700 77.7 725 72.3 750 67.5C775 62.7 800 58.3 825 59.8C850 61.3 875 68.7 887.5 72.3L900 76L900 0L887.5 0C875 0 850 0 825 0C800 0 775 0 750 0C725 0 700 0 675 0C650 0 625 0 600 0C575 0 550 0 525 0C500 0 475 0 450 0C425 0 400 0 375 0C350 0 325 0 300 0C275 0 250 0 225 0C200 0 175 0 150 0C125 0 100 0 75 0C50 0 25 0 12.5 0L0 0Z"></path>
  <path
    d="M0 62L12.5 58C25 54 50 46 75 42.5C100 39 125 40 150 44.2C175 48.3 200 55.7 225 58.5C250 61.3 275 59.7 300 54.3C325 49 350 40 375 38.5C400 37 425 43 450 44.5C475 46 500 43 525 42.5C550 42 575 44 600 42.8C625 41.7 650 37.3 675 35.7C700 34 725 35 750 37.5C775 40 800 44 825 46C850 48 875 48 887.5 48L900 48L900 0L887.5 0C875 0 850 0 825 0C800 0 775 0 750 0C725 0 700 0 675 0C650 0 625 0 600 0C575 0 550 0 525 0C500 0 475 0 450 0C425 0 400 0 375 0C350 0 325 0 300 0C275 0 250 0 225 0C200 0 175 0 150 0C125 0 100 0 75 0C50 0 25 0 12.5 0L0 0Z"
    fill="#442816"
    finalpath="M0 59L12.5 57.7C25 56.3 50 53.7 75 50C100 46.3 125 41.7 150 41.8C175 42 200 47 225 46.3C250 45.7 275 39.3 300 37.3C325 35.3 350 37.7 375 39.3C400 41 425 42 450 43.3C475 44.7 500 46.3 525 49C550 51.7 575 55.3 600 53C625 50.7 650 42.3 675 41.7C700 41 725 48 750 50.3C775 52.7 800 50.3 825 48.7C850 47 875 46 887.5 45.5L900 45L900 0L887.5 0C875 0 850 0 825 0C800 0 775 0 750 0C725 0 700 0 675 0C650 0 625 0 600 0C575 0 550 0 525 0C500 0 475 0 450 0C425 0 400 0 375 0C350 0 325 0 300 0C275 0 250 0 225 0C200 0 175 0 150 0C125 0 100 0 75 0C50 0 25 0 12.5 0L0 0Z"></path>
  <path
    d="M0 21L12.5 19.8C25 18.7 50 16.3 75 17C100 17.7 125 21.3 150 24.5C175 27.7 200 30.3 225 32.3C250 34.3 275 35.7 300 32.3C325 29 350 21 375 20.3C400 19.7 425 26.3 450 29.3C475 32.3 500 31.7 525 28.8C550 26 575 21 600 19.5C625 18 650 20 675 20.5C700 21 725 20 750 21.7C775 23.3 800 27.7 825 27.5C850 27.3 875 22.7 887.5 20.3L900 18L900 0L887.5 0C875 0 850 0 825 0C800 0 775 0 750 0C725 0 700 0 675 0C650 0 625 0 600 0C575 0 550 0 525 0C500 0 475 0 450 0C425 0 400 0 375 0C350 0 325 0 300 0C275 0 250 0 225 0C200 0 175 0 150 0C125 0 100 0 75 0C50 0 25 0 12.5 0L0 0Z"
    fill="#0f0f0f"
    finalpath="M0 21L12.5 21.5C25 22 50 23 75 22.2C100 21.3 125 18.7 150 21.2C175 23.7 200 31.3 225 32.7C250 34 275 29 300 25.8C325 22.7 350 21.3 375 20.7C400 20 425 20 450 18.8C475 17.7 500 15.3 525 16C550 16.7 575 20.3 600 22.7C625 25 650 26 675 24.8C700 23.7 725 20.3 750 19C775 17.7 800 18.3 825 21.5C850 24.7 875 30.3 887.5 33.2L900 36L900 0L887.5 0C875 0 850 0 825 0C800 0 775 0 750 0C725 0 700 0 675 0C650 0 625 0 600 0C575 0 550 0 525 0C500 0 475 0 450 0C425 0 400 0 375 0C350 0 325 0 300 0C275 0 250 0 225 0C200 0 175 0 150 0C125 0 100 0 75 0C50 0 25 0 12.5 0L0 0Z"></path>
</svg>
`;

export default function Section4() {
  return (
    <>
      <section >
        <h1 className="text-4xl text-center"> Have a dream? Let's make it a reality! </h1>
        <p className="text-md font-light m-2 flex justify-center text-center"> It's more than just coding; it's about bringing your digital dreams to life and showcasing them to the world in their full glory.</p>

        <div className="flex flex-wrap justify-center my-8 mb-32">
          {/* First Pricing */}
          <div className="max-w-md bg-secondary rounded-xl shadow-md overflow-hidden md:max-w-xl m-4">
            <div className="md:flex">
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Essential <br />Website</div>
                  <a href="/#contact" className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">Perfect for startups and personal brands.</a>
                  <p className="mt-2 text-gray-300">Establish a strong, engaging digital footprint with our comprehensive starter package website.</p>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-white">£499*</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a href="/#contact" className="w-full flex items-center justify-center px-8 py-3 bg-indigo-600 hover:scale-105 hover:bg-indigo-500 transition ease-in-out duration-300 rounded-xl"> Get started </a>
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
                  <a href="/#contact" className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">Perfect for larger brands and portfolios.</a>
                  <p className="mt-2 text-gray-300">Establish a strong, engaging digital footprint with our all inclusive webapp package.</p>
                  <div className="mt-4">
                    <span className="text-xl font-bold text-white">Individual Pricing</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a href="/#contact" className="w-full flex items-center justify-center px-8 py-3 bg-indigo-600 hover:scale-105 hover:bg-indigo-500 transition ease-in-out duration-300 rounded-xl"> Get started </a>
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

      <AnimatedWave svgString={svgString} />
    </>
  )
}
