import React from 'react';
import { Oswald } from "next/font/google";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Banner from "./contactbanner";
import Faq from "./contactfaq";
import Map from "./contactmap";
import FloatAnimation from "@/components/FloatAnimation";

const oswald = Oswald({ subsets: ["latin"] });

const contact = () => {
  return (
    <div className={`${oswald.className}`}>
      <FloatAnimation />
      <Navbar />
      <Banner />
      <Faq />
      <Map />
      <Footer />
    </div>
  )
}

export default contact