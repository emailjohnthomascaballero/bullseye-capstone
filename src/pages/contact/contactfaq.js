/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from "react";

const questions = [
  {
    name: "Do I need any prior experience to visit the shooting range?",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
  },
  {
    name: "What Equipment Do I need to bring?",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
  },
  {
    name: "Do you offer shooting courses or training?",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
  },
];

const frequentlyAskedQuestions = {
  title: "FREQUENTLY ASKED QUESTION",
  imageSrc: "/photos/contact-us-faq.jpg",
  imageAlt: "contact us photo",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const contactfaq = () => {
  return (
    <div className="bg-customPrimary">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4 flex items-center">
            <img src="/icons/vertical-bar.svg" className="mr-1 h-16 lg:h-10" />
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {frequentlyAskedQuestions.title}
            </h1>
          </div>

          {questions.map((question) => (
            <section aria-labelledby="information-heading" className="mt-4">
              <div className="flex items-center font-bold">
                <p className="text-lg sm:text-xl border-b border-customSecondary">
                  {question.name}
                </p>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-customColor1">
                  {question.description}
                </p>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <img
              src={frequentlyAskedQuestions.imageSrc}
              alt={frequentlyAskedQuestions.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactfaq;
