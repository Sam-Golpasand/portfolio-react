import React, { useState, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      direction: 'vertical',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={`relative ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center bg-[#0f0f0f] transition-opacity duration-1000 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <InfinitySpin
          width={200}
          color="#FFF"
          visible={true}
          ariaLabel='infinity-loading-spinner'
        />
        <p className="text-white mt-4">L O A D I N G . . .</p>
      </div>
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
    </div>
  );
}
