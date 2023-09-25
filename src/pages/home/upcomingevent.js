import React from "react";
import Image from "next/image";
import Link from "next/link";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

const schedules = [
  {
    key: "1",
    title: "Join us for our shooting competition",
    description: "Show off Your Skills and Win Prizes!",
    date: "JULY 3TH-15TH",
    time: "09.00 AM - 05.00PM",
    buttonLink: "#",
  },
  {
    key: "2",
    title: "LADIES' NIGHT AT THE RANGE",
    description: "A Fun and Empowering Event for Women Shooters",
    date: "AUGUST 10TH-13TH",
    time: "09.00 AM - 05.00PM",
    buttonLink: "#",
  },
  {
    key: "3",
    title: "TACTICAL TRAINING WEEKEND",
    description: "Take Your Skills to the Next Level",
    date: "JUNE 14TH-17TH",
    time: "09.00 AM - 05.00PM",
    buttonLink: "#",
  },
  // More schedule...
];

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-customPrimary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="flex items-center mx-auto max-w-2xl lg:mx-0">
            <Image
              className="mr-1 h-24 lg:h-36"
              src="/icons/vertical-bar.svg"
              alt="vertical bar icon"
              width="10"
              height="143"
            />
            <h2 className="font-bold tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl uppercase">
              UPCOMING EVENT FROM
              <br />
              BULLSEYE.
            </h2>
          </div>
          <p className="mt-6 text-base leading-8 text-customColor1">
            Our upcoming event promises thrilling competitions, expert training
            sessions, and a chance to showcase your sharpshooting skills.
            Whether you&apos;re a seasoned shooter or a newcomer, this event is your
            opportunity to hit the target and have a blast. Stay locked and
            loaded for more details!
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:gap-8">
          {schedules.map((schedule) => (
            <div key={schedules.key} className="fadeElement border border-customSecondary bg-customPrimary px-4 py-3 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
              <dl className="flex-auto space-y-6 divide-y divide-customSecondary text-sm text-gray-600 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-4/5 lg:flex-none lg:gap-x-8">
                <div className="flex justify-between sm:block gap-12">
                  <dt className="text-customSecondary text-2xl font-bold uppercase">
                    {schedule.title}
                  </dt>
                  <dd className="sm:mt-1 text-customColor1 text-xl font-bold">
                    {schedule.description}
                  </dd>
                </div>

                <div className="flex justify-between pt-6 font-medium  sm:block sm:pt-0">
                  <dt className="text-customSecondary text-2xl font-bold">
                    {schedule.date}
                  </dt>
                  <dd className="sm:mt-1 text-customColor1 text-xl font-bold">
                    {schedule.time}
                  </dd>
                </div>
              </dl>
              <Link
                href={schedule.buttonLink}
                className="mt-6 flex w-full items-center justify-center  bg-customSecondary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-customColor1 focus:ring-offset-2 sm:mt-0 sm:w-auto duration-500"
              >
                REGISTER NOW
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <p className="mt-8 text-base leading-8 text-gray-400">
          We have more event,{" "}
          <span className="text-customSecondary">View more event now</span>
        </p>
      </div>
    </div>
  );
}
