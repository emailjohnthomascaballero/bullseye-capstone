import React from "react";

const contactbanner = () => {
  return (
    <div className="pt-28 lg:pt-14 xl:pt-24">
      <div className="relative isolate overflow-hidden bg-customColor2 py-24 sm:py-32">
        <img
          src="/photos/contact-us-banner.jpg"
          alt=""
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
                Contact Us
              </h2>
            </div>
            <p className="mt-6 text-lg leading-8 text-customColor1">
              Whether you have questions, need assistance, or want to connect
              with our team, we're here for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactbanner;
