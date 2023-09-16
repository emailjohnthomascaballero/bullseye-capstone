import React from "react";

const blogsBanner = () => {
  return (
    <div className="pt-28 lg:pt-14 xl:pt-24">
      <div className="relative isolate overflow-hidden bg-customColor2 py-24 sm:py-32">
        <img
          src="/photos/blogs-banner.jpg"
          alt="blogs banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover bg-customColor2 opacity-20"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center mx-auto max-w-2xl lg:mx-0">
              <img
                src="/icons/vertical-bar.svg"
                className="mr-1 h-16 lg:h-20"
              />
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl uppercase">
                News & Articles
              </h2>
            </div>
            <p className="mt-6 text-lg leading-8 text-customColor1 max-w-sm sm:max-w-sm md:max-w-md xl:max-w-lg">
              Explore the latest updates, insightful articles, and expert advice
              on everything related to shooting sports and firearm enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogsBanner;
