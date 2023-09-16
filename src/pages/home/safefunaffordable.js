import React from "react";

const people = [
  {
    count: "1,200",
    role: "Safe Certified",
    imageUrl: "/icons/safe-certified.svg",
    alt: " ",
  },
  {
    count: "350",
    role: "Reliable Instructor",
    imageUrl: "/icons/reliable-instructor.svg",
    alt: " ",
  },
];



const safefunaffordable = () => {
  return (
    <div className="bg-customPrimary py-12 sm:py-16">
      <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-16  px-6 py-16 sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-32 xl:px-0 lg:px-0">
          {/* PHOTO */}
          <div className="lg:col-span-7 md:col-span-11 mx-auto lg:order-first md:w-8/12">
            <div className="relative ">
              <div className="flex">
                <div className="md:w-2/3 sm:w-2/3 w-10/12">
                  <img src="/photos/safe-banner-target.jpg" alt="" />
                </div>
              </div>
              <div className="flex gap-1">
                <div className="md:w-1/2 w-5/12">
                  <img
                    src="/photos/safe-banner-permit.svg"
                    alt=""
                    className="mt-1"
                  />
                </div>

                <div className="md:w-2/3 w-7/12">
                  <img
                    src="/photos/safe-banner-girl.jpg"
                    alt=""
                    className="mt-1"
                  />
                </div>
              </div>
              {/* temporary */}
              <img
                src=""
                alt=""
                className="absolute h-28 w-auto z-50 top-1 -right-4 md:-right-10"
                id="scale-left"
              />
              <img
                src=""
                alt=""
                className="absolute h-28 w-auto z-50 top-36 md:top-28 -right-4 md:-right-8"
                id="scale-up"
              />
              <img
                src=""
                alt=""
                className="absolute h-32 w-auto z-1 -bottom-2 sm:bottom-8 md:-bottom-2 left-2 sm:left-10 md:left-2"
                id="scale-up"
              />
            </div>
          </div>

          <div className="w-full flex-auto">
            <div className="flex items-center mx-auto max-w-2xl lg:mx-0">
              <img
                src="/icons/vertical-bar.svg"
                className="mr-1 h-20 lg:h-32"
              />
              <h2 className="font-bold tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl uppercase">
                SAFE, FUN, & AFFORDABLE
                <br />
                SHOOTING FOR EVERYONE.
              </h2>
            </div>

            <p className="mt-12 mb-16 text-base leading-8 text-customColor1">
              Whether you're a seasoned marksman or a first-time shooter, our
              facilities and services are designed to ensure your time with us
              is safe, enjoyable, and budget-friendly. Join us and be part of a
              community that values and promotes accessible shooting for all.
            </p>
            <ul
              role="list"
              className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
            >
              {people.map((person) => (
                <li
                  key={person.name}
                  className=" py-6 md:py-0 lg:py-0 flex-col items-center"
                >
                  <img
                    className="mb-3 h-12 w-12 md:h-14 md:w-14"
                    src={person.imageUrl}
                    alt={person.alt}
                  />

                  <h3 className="inline-flex mt-6 text-6xl font-bold leading-7 tracking-tight text-white h-[41] w-44">
                    {person.count}{" "}
                    <img src="/icons/plus-sign.svg" className="ml-2" />
                  </h3>

                  <p className="text-xl mt-3 font-bold leading-6 text-customColor1 uppercase">
                    {person.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default safefunaffordable;
