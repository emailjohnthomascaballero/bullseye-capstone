import React from "react";

const people = [
  {
    name: "MARKSMANSHIP BASIC",
    role: "Learn essential techniques for aiming, breath control, trigger squeeze, and sight alignment.",
    imageUrl: "/icons/marksmanship-basic.svg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "CONCEALED CARRY TRAINING",
    role: "Gain proficiency in firearm handling, situational awareness, and legal considerations.",
    imageUrl: "/icons/concealed-carry-training.svg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "LONG-RANGE SHOOTING",
    role: "Elevate your ability to engage targets accurately over long ranges in tactical shooting training.",
    imageUrl: "/icons/long-range-shooting.svg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "VIRTUAL REALITY TRAINING",
    role: "Elevate your training to a new level with the realism and versatility of virtual reality technology.",
    imageUrl: "/icons/virtual-reality-training.svg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

const tacticalshootingtraining = () => {
  return (
    <div className="bg-customPrimary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-left lg:px-8">
        <div className="flex items-center mx-auto max-w-2xl lg:mx-0">
          <img src="/icons/vertical-bar.svg" className="mr-1 h-24 lg:h-36" />
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
          {people.map((person) => (
            <li
              key={person.name}
              className="px-8 py-10 border border-white flex-col items-center"
            >
              <img
                className=" h-12 w-12 md:h-14 md:w-14"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-2xl font-semibold leading-7 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-base leading-6 text-gray-400">{person.role}</p>
              <ul role="list" className="mt-6 flex  gap-x-6">
                <a
                  href="#"
                  className="inline-flex text-base uppercase font-bold leading-6 text-customSecondary hover:text-gray-300 transition duration-500"
                >
                  Join Program{" "}
                  <img src="/icons/arrow-right-green.svg" className="ml-2" />
                </a>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default tacticalshootingtraining;
