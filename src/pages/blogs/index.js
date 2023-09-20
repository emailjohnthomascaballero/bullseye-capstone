import { Oswald } from "next/font/google";
import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Banner from "src/pages/blogs/blogsbanner";
import Content from "src/pages/blogs/blogscontent";
import FadeInAnimation from "src/components/FadeInAnimation";

const oswald = Oswald({ subsets: ["latin"] });

const blogs = () => {
  return (
    <div className={`${oswald.className}`}>
      <FadeInAnimation />
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
};

export default blogs;
