import React from 'react'
import { Oswald } from "next/font/google";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";

const oswald = Oswald({ subsets: ["latin"] });

const contact = () => {
  return (
    <div className={`${oswald.className}`}>
      <Navbar />
        <h1>contact</h1>
      <Footer />
    </div>
  )
}

export default contact