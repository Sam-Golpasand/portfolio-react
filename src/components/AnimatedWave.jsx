import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedWave ({ svgString }){
  const svgContainerRef = useRef();

  useEffect(() => {
    const svgContainer = svgContainerRef.current;
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    const svgElement = doc.querySelector('svg');

    if (!svgElement) {
      console.error('SVG element not found');
      return;
    }

    const paths = svgElement.querySelectorAll('path');
    if (paths.length === 0) {
      console.error('No paths found');
      return;
    }

    console.log(`Found ${paths.length} paths`);

    paths.forEach((path, index) => {
      const finalPath = path.getAttribute('finalpath');
      if (!finalPath) {
        console.error(`No finalpath attribute found on path ${index}`);
        return;
      }

      gsap.fromTo(path, {
        attr: { d: path.getAttribute('d') }
      }, {
        attr: { d: finalPath },
        scrollTrigger: {
          trigger: svgElement, // Trigger on the whole SVG
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
          markers: false, 
        },
        duration: 2,
        ease: 'none',
      });

      console.log(`Animation created for path ${index}`);
    });

    svgContainer.innerHTML = '';
    svgContainer.appendChild(svgElement);

    ScrollTrigger.refresh(); // Refresh ScrollTrigger after the DOM is updated
  }, [svgString]);

  return (
    <div
      className='spacer'
      ref={svgContainerRef}
    />
  );
};