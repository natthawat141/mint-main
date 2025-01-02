'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules'; // เปลี่ยนการ import ตรงนี้
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';

interface Partner {
  src: string;
  alt: string;
}

const Partners: React.FC = () => {
  const partners: Partner[] = [
    { src: "https://uat-bullmoon.web.app/_next/static/media/monstopia.b0af6ca5.jpg", alt: "Bullmoon" },
    // ...other partners
  ];

  return (
    <div
      className="bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/img/image3.webp')" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12 tracking-wide uppercase">
          Empowering Partners
        </h2>
        <Swiper
          modules={[Autoplay, Navigation]} // ใช้ modules ตรงนี้
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 2500 }}
          navigation
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-32 p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={200}
                  height={100}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/img/placeholder.png';
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;