import React from "react";
import NumberIncrement from "src/components/NumberIncrement";
import Image from "next/image";

const people = [
  {
    count: "1200",
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
                  <Image
                    src="/photos/safe-banner-target.jpg"
                    alt="target shooting"
                    width="290"
                    height="435"
                  />
                </div>
              </div>
              <div className="flex gap-1">
                <div className="moveRightElement md:w-1/2 w-5/12 z-10">
                  <Image
                    src="/photos/safe-banner-permit.svg"
                    alt="permit certificate card"
                    className="mt-1"
                    width="184"
                    height="58"
                  />
                </div>

                <div className="floatElement md:w-2/3 w-7/12">
                  <Image
                    src="/photos/safe-banner-girl.jpg"
                    alt="girl aming a pistol to the right"
                    className="mt-1"
                    width="246"
                    height="164"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex-auto">
            <div className="flex items-center mx-auto max-w-2xl lg:mx-0">
              <Image
                src="/icons/vertical-bar.svg"
                className="mr-1 h-20 lg:h-32"
                alt="vertical bar icon"
                width="9"
                height="127"
              />
              <h2 className="font-bold tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl uppercase">
                SAFE, FUN, & AFFORDABLE
                <br />
                SHOOTING FOR EVERYONE.
              </h2>
            </div>

            <p className="mt-12 mb-16 text-base leading-8 text-customColor1">
              Whether you&apos;re a seasoned marksman or a first-time shooter, our
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
                  <Image
                    className="mb-3 h-12 w-12 md:h-14 md:w-14"
                    src={person.imageUrl}
                    alt={person.alt}
                    width="55"
                    height="55"
                  />

                  <h3 className="inline-flex mt-6 text-6xl font-bold leading-7 tracking-tight text-white h-[41] w-44">
                    <NumberIncrement
                      initialValue={0}
                      targetValue={person.count}
                      duration={1}
                    />{" "}
                    <Image
                      src="/icons/plus-sign.svg"
                      className="ml-2"
                      alt="plus icon"
                      width="27"
                      height="27"
                    />
                  </h3>

                  <p className="text-xl mt-3 font-bold leading-6 text-customColor1 uppercase">
                    <NumberIncrement
                      initialValue={0}
                      targetValue={person.role}
                      duration={1}
                    />
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
