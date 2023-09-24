import React from "react";
import Image from "next/image";
import Link from "next/link";

const trainings = [
  {
    name: "MARKSMANSHIP BASIC",
    description:
      "Certified instructors lead you through key techniques for successful firearms handling.",
    imageUrl: "/icons/marksmanship-basic.svg",
    alt: "marksmanship icon",
  },
  {
    name: "CONCEALED CARRY TRAINING",
    description:
      "Gain proficiency in firearm handling, situational awareness, and legal considerations.",
    imageUrl: "/icons/concealed-carry-training.svg",
    alt: "concealed carry training icon",
  },
  {
    name: "LONG-RANGE SHOOTING",
    description:
      "Elevate your ability to engage targets accurately over long ranges in tactical shooting training.",
    imageUrl: "/icons/long-range-shooting.svg",
    alt: "long range shooting icon",
  },
  {
    name: "VIRTUAL REALITY TRAINING",
    description:
      "Elevate your training to a new level with the realism and versatility of virtual reality technology.",
    imageUrl: "/icons/virtual-reality-training.svg",
    alt: "virtual reality training icon",
  },
];

const tacticalshootingtraining = () => {
  return (
    <div className="bg-customPrimary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-left lg:px-8">
        <div className="flex items-center mx-auto max-w-2xl lg:mx-0">
          <Image
            className="mr-1 h-24 lg:h-36"
            src="/icons/vertical-bar.svg"
            alt="vertical bar icon"
            width="10"
            height="143"
          />
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl uppercase">
            Tactical Shooting
            <br />
            Training
          </h2>
        </div>

        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4 lg:gap-8"
        >
          {trainings.map((training) => (
            <li
              key={training.name}
              className="fadeInTacticalElement px-8 py-10 border border-white flex-col items-center"
            >
              <Image
                className=" h-12 w-12 md:h-14 md:w-14"
                src={training.imageUrl}
                alt={training.alt}
                width="55"
                height="55"
              />
              <h3 className="mt-6 text-2xl font-semibold leading-7 tracking-tight text-white">
                {training.name}
              </h3>
              <p className="mt-6 text-base leading-6 text-gray-400">
                {training.description}
              </p>
              <ul role="list" className="mt-6 flex  gap-x-6">
                <Link
                  href="#"
                  className="inline-flex text-base uppercase font-bold leading-6 text-customSecondary hover:text-gray-300 transition duration-500"
                >
                  Join Program{" "}
                  <Image
                    src="/icons/chevron-right.svg"
                    className="ml-2"
                    alt="cheveron point right"
                    width="16"
                    height="23"
                  />
                </Link>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default tacticalshootingtraining;
