import { Oswald } from "next/font/google";
import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Banner from "src/pages/blogs/blogsbanner";
import Content from "src/pages/blogs/blogscontent";

const oswald = Oswald({ subsets: ["latin"] });

const blogs = () => {
  return (
    <div className={`${oswald.className}`}>
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
};

export default blogs;
