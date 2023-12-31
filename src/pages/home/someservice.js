import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "RANGE RENTAL",
    role: "Whether you're a seasoned shooter or a beginner, our top-of-the-line firearms are available for rent, ensuring a safe and thrilling shooting experience.",
    imageUrl: "/icons/range-rental.svg",
    alt: "camp icon",
  },
  {
    name: "TRAINING & INSTRUCTION",
    role: "Whether you're looking to hone your accuracy, learn safety techniques, or explore competitive shooting, our expert guidance will help you excel.",
    imageUrl: "/icons/training-instruction.svg",
    alt: "target icon",
  },
  {
    name: "FIREARM RENTAL",
    role: " Choose from our diverse selection of top-quality firearms, from pistols to rifles, all meticulously maintained for your safety and enjoyment. ",
    imageUrl: "/icons/firearm-rental.svg",
    alt: "medic camp icon",
  },
  // More people...
];

const someservice = () => {
  return (
    <div className="bg-customPrimary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl uppercase">
            SOME SERVICE FROM BULLSEYE.
          </h2>
          <p className="text-left mt-4 text-base leading-8 text-customColor1">
            From firearm rentals and expert training to exciting events and
            competitions, our dedicated team ensures an unparalleled shooting
            experience.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {services.map((service) => (
            <li
              key={service.name}
              className="fadeInSomeServiceElement border border-customSecondary px-8 py-10"
            >
              <Image
                className="mx-auto h-12 w-12 md:h-14 md:w-14"
                src={service.imageUrl}
                alt={service.alt}
                width="55"
                height="55"
              />
              <h3 className="mt-6 text-2xl font-bold leading-7 tracking-tight text-white uppercase">
                {service.name}
              </h3>
              <p className="mt-6 text-base leading-6 text-customColor1">
                {service.role}
              </p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <Link
                    href="#"
                    className="inline-flex text-base uppercase font-bold leading-6 text-customSecondary hover:text-gray-300 transition duration-500"
                  >
                    Read More{" "}
                    <Image
                      className="ml-2"
                      src="/icons/chevron-right.svg"
                      alt="chevron point right icon"
                      width="16"
                      height="23"
                    />
                  </Link>
                </li>
              </ul>
            </li>
          ))}
        </ul>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-4 text-base leading-8 text-gray-400">
            Experience the Thrill of Shooting,{" "}
            <span className="text-customSecondary">More Service</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default someservice;
