'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PrivilegeCardProps {
  icon: string;
  title: string;
  description: string;
}

const PrivilegeCard: React.FC<PrivilegeCardProps> = ({ icon, title, description }) => (
  <motion.div
    className="backdrop-blur-2xl bg-cosmicBlue/20 text-starlight p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="w-16 h-16 mx-auto mb-4">
      <Image
        src={icon}
        alt={title}
        width={64}
        height={64}
        className="object-contain"
      />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-starlight/80">{description}</p>
  </motion.div>
);

const Privileges: React.FC = () => {
  return (
    <div className="relative bg-darkSpace text-starlight py-16 overflow-hidden">
      {/* พื้นหลังเบลอที่ชัดเจนขึ้น */}
      <motion.div
        className="absolute inset-0 bg-[url('/assets/space-bg.jpg')] bg-cover bg-center opacity-50 backdrop-blur-2xl"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      ></motion.div>

      <div className="relative container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Privileges
        </motion.h2>
        <motion.p
          className="text-center text-starlight/80 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Unlock exclusive benefits with our special courses.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          <PrivilegeCard
            icon="/img/course.2311a97c.png"
            title="Basic to Advance of Stock"
            description="Learn stock analysis, trading strategies, and more, from beginner to intermediate levels. No experience required – kickstart your journey to stock trading success today!"
          />
          <PrivilegeCard
            icon="/img/course.2311a97c.png"
            title="Crypto & Blockchain 101"
            description="Get a foundational understanding of cryptocurrency and blockchain technology in our Crypto & Blockchain 101 course."
          />
        </div>
      </div>
    </div>
  );
};

export default Privileges;
