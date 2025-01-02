'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role }) => (
  <div
    className="text-center transform transition-transform duration-300 hover:scale-105"
    data-aos="fade-up"
  >
    <Image
      src={image}
      alt={name}
      width={128}
      height={128}
      className="rounded-full w-32 h-32 mx-auto mb-4 object-cover shadow-lg"
    />
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="text-gray-300">{role}</p>
  </div>
);

const OurTeam: React.FC = () => {
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
        <h2
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <TeamMember image="/img/84.png" name="Monstopia" role="CEO co-Founder" />
          <TeamMember image="/img/119.png" name="Monstopia" role="CTO co-Founder" />
          <TeamMember image="/img/144.png" name="Monstopia" role="CFO co-Founder" />
          <TeamMember image="/img/159.png" name="Monstopia" role="CMO co-Founder" />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
