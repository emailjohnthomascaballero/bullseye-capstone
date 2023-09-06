import React from "react";

const heroSection = () => {
  return (
    <div className="relative bg-customPrimary">
      <div className="relative h-80 overflow-hidden bg-customPrimary md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="/photos/hero-banner.png"
          alt="hero banner"
        />
      </div>
      <div className="relative mx-auto max-w-7xl pb-24 pt-2 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-96 md:w-2/3 md:pl-16 lg:w-8/12 lg:pl-24 lg:pr-0 xl:pl-32">

          <div className="flex items-center">
            <img src="/icons/vertical-bar.svg" className="mr-1 h-24 sm:h-44" />
            <h2 className="text-5xl md:text-8xl font-bold text-white order-2">
              FROM NOVICE
              <br />
              TO EXPERT.
            </h2>
          </div>

          <p className="mt-6 text-base leading-7 text-gray-300 mr-4">
            Welcome to Bullseye, the premier shooting range and gun club in
            Indonesia. Whether you’re a seasoned marksman or a beginner looking
            to improve your skills, we have something for everyone.
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="inline-flex rounded-md bg-customSecondary px-3.5 py-2.5 text-sm font-semibold text-white uppercase shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore More <img src="/icons/arrow-right.svg" className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default heroSection;
