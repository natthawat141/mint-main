'use client';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Privileges from "./components/Privileges";
import OurStory from "./components/OurStory";
import OurTeam from "./components/OurTeam";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import OurSibling from "./components/OurSibling";
import BullmoonService from "./components/BullmoonService";
import MintNFT from "./components/MintNFT";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="MintNFT" className="relative bg-darkSpace text-starlight">
        <MintNFT />
      </section>

      {/* Privileges Section */}
      <section id="privileges" className="bg-darkSpace text-starlight py-16">
        <Privileges />
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="bg-darkSpace text-starlight py-16">
        <OurStory />
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="bg-darkSpace text-starlight py-16">
        <OurTeam />
      </section>

    
      {/* Our Team Section */}
      <section id="OurSibling" className="bg-darkSpace text-starlight py-16">
        <OurSibling />
      </section>

   
    <section id="BullmoonService" className="">
    {/* <BullmoonService/> */}
      </section>

      {/* Footer Section */}
      <footer id="footer" className="bg-darkSpace text-starlight py-8">
        <Footer />
      </footer>
    </>
  );
}
