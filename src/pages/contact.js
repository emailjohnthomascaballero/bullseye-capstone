import React from 'react'
import { Oswald } from "next/font/google";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import Banner from "./contact/contactbanner";
import Faq from "./contact/contactfaq";

const oswald = Oswald({ subsets: ["latin"] });

const contact = () => {
  return (
    <div className={`${oswald.className}`}>
      <Navbar />
      <Banner />
      <Faq />
      <Footer />
    </div>
  )
}

export default contact