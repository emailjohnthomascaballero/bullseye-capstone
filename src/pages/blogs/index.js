import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Banner from "src/pages/blogs/blogsbanner";
import Content from "src/pages/blogs/blogscontent";

const blogs = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
};

export default blogs;
