'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface SiblingCardProps {
  icon: string;
  title: string;
  description: string;
}

const SiblingCard: React.FC<SiblingCardProps> = ({ icon, title, description }) => (
  <div className="flex items-center mb-8" data-aos="fade-up">
    <div
      className="w-16 h-16 mr-4 bg-contain bg-no-repeat bg-center rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
      style={{ backgroundImage: `url(${icon})` }}
    ></div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const OurSibling: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="bg-darkBlue text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-down">
          Our sibling
        </h2>
        <div className="max-w-2xl mx-auto">
          <SiblingCard
            icon="/img/144.png"
            title="Bull Moon Club"
            description="BullMoon's big brother is a community of investors. It is a ticket to a quality society. And there are many interesting benefits such as access to investment knowledge activities, Test Drive Supercar activities."
          />
          <SiblingCard
            icon="/img/84.png"
            title="Bull moon Flex"
            description="It's an NFT that has the advantage of being able to flex the left and right halves of BullMoon Flex as you like to create new characters."
          />
          <SiblingCard
            icon="/img/119.png"
            title="Bullmoon Junior"
            description="Experience a whole new way of NFT ownership! Unlock exclusive access and privileges to various courses and partnerships with BullMoon Junior, the NFT platform for learning."
          />
        </div>
      </div>
    </div>
  );
};

export default OurSibling;
