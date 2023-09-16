import React from "react";

const heroSection = () => {
  return (
    <div className="pt-28 lg:pt-14 xl:pt-24">
      <div className="relative bg-customColor2">
        <div className="relative h-80 overflow-hidden bg-customColor2 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="/photos/hero-banner.png"
            alt="hero banner"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-14 sm:py-32 lg:px-8 lg:py-52">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <div className="flex items-center">
              <img
                src="/icons/vertical-bar.svg"
                className="mr-1 h-24 md:h-52 lg:h-80"
              />
              <h2 className="text-5xl md:text-8xl font-bold text-white order-2">
                FROM NOVICE
                <br />
                TO EXPERT.
              </h2>
            </div>

            <p className="mt-6 text-lg leading-7 text-gray-300">
              Welcome to Bullseye, the premier shooting range and gun club in
              Philippines. Whether you’re a seasoned marksman or a beginner
              looking to improve your skills, we have something for everyone.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex bg-customSecondary px-3.5 py-2.5 text-sm font-semibold text-white uppercase shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white duration-500"
              >
                Explore More{" "}
                <img src="/icons/arrow-right-white.svg" className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default heroSection;
