'use client';

import React, { useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const OurStory: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <ParallaxProvider>
      <div
        className="relative flex items-center bg-cover bg-center min-h-[80vh] sm:min-h-screen py-20"
        style={{ backgroundImage: "url('/img/image4.webp')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            {/* Parallax Text */}
            <Parallax speed={-10} className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
              <h2 className="text-4xl font-extrabold text-white mb-6 leading-snug">
                Our story BullMoon Junior is here!
              </h2>
              <p className="text-white text-lg leading-relaxed mb-8">
                After the BullMoon Club has come out to flaunt and provide
                special privileges to everyone for a long time, it's now time
                for the new blood, the fiery energy of the bull, to come out
                and showcase itself! Join as a new generation bull, with
                attitude and enthusiasm, ready to gain knowledge and special
                privileges together with BullMoon junior!
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:from-purple-600 hover:to-blue-500 focus:outline-none">
                Privilege
              </button>
            </Parallax>
            {/* Parallax Image */}
            <Parallax speed={5} className="md:w-1/2" data-aos="fade-left">
              <Image
                src="/img/bull_section_1.d8445d90.png"
                alt="Bull"
                width={400}
                height={400}
                className="rounded-lg w-full max-w-md transition-all duration-300 transform hover:scale-105"
              />
            </Parallax>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default OurStory;
