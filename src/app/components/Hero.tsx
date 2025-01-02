'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div
      className="h-[90vh] relative flex items-center justify-center pt-20 md:pt-0"
      style={{
        backgroundImage: "url('/img/image3.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>

      <div
        className="container mx-auto px-8 py-12 flex flex-col md:flex-row items-center md:space-x-8 relative z-10"
        data-aos="fade-up"
      >
        <div
          className="flex-1 max-w-lg text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
            Bullmoon Junior
          </h1>
          <p className="text-white text-lg mb-8 leading-relaxed">
            Experience a whole new way of NFT ownership! Unlock exclusive
            access and privileges to various courses and partnerships with
            BullMoon Junior, the NFT platform for learning.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-[0_10px_15px_-3px_rgba(96,165,250,0.5)] flex items-center">
            <span>Join Discord</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
        <div
          className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0"
          data-aos="fade-left"
        >
          <Image
            src="/img/mint.424c8acf.png"
            alt="Mint NFT"
            width={500} // ปรับขนาดตามต้องการ
            height={500} // ปรับขนาดตามต้องการ
            className="rounded-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
