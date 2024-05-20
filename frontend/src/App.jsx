import React, { useState, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
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
          color="#00BFFF"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='infinity-loading-spinner'
          secondaryColor="#00BFFF"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        <p className="text-white mt-4">Loading...</p>
      </div>
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </div>
  );
}
