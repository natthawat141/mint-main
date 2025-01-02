'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BullmoonService: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-darkBlue text-white">
      {/* Background Section */}
      <div
        className="py-32 flex items-center justify-center"
        style={{
          backgroundImage: "url('/img/image3.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <h2
          className="text-5xl font-extrabold text-center text-white transition duration-500 ease-in-out transform hover:scale-110"
          data-aos="zoom-in"
        >
          Bullmoon Service
        </h2>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 py-20 max-w-screen-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen">
          <div data-aos="fade-right">
            <img
              src="/img/mint.424c8acf.png"
              alt="Bullmoon Service"
              className="rounded-lg w-full max-w-md shadow-2xl transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div data-aos="fade-left" className="space-y-10">
            <div>
              <h3 className="text-3xl font-semibold mb-4">Bullmoon Learn</h3>
              <p className="text-gray-300 mb-6">
                Erat netus est hendrerit, nullam et quis ad cras porttitor
                iaculis. Bibendum vulputate cras aenean.
              </p>
              <button className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-md">
                Learn More
              </button>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-4">Bullmoon NFT</h3>
              <p className="text-gray-300 mb-6">
                Erat netus est hendrerit, nullam et quis ad cras porttitor
                iaculis. Bibendum vulputate cras aenean.
              </p>
              <button className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BullmoonService;
