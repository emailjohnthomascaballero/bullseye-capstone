import { Disclosure } from "@headlessui/react";
import { ArrowUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

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

const faqs = [
  {
    question: "Do I need any prior experience to visit the shooting range?",
    answer:
      "No, prior experience is not required to visit our shooting range. We welcome all skill levels, and our certified instructors can provide guidance for beginners.",
  },
  {
    question: "What Equipment Do I need to bring?",
    answer:
      "All you need to bring is a valid photo ID and a positive attitude! We provide all the necessary firearms, ammunition, safety gear, and targets. If you have personal safety equipment, such as ear protection or safety glasses, you're welcome to bring them, but it's not required.",
  },
  {
    question: "Do you offer shooting courses or training?",
    answer:
      "Yes, we offer a range of shooting courses and training programs for all experience levels. Our certified instructors provide comprehensive instruction in firearm safety and marksmanship.",
  },
  // More questions...
];

const content = {
  title: "FREQUENTLY ASKED QUESTION",
  imageSrc: "/photos/contact-us-faq.jpg",
  imageAlt: "shooter aiming a rifle",
};

const contactfaq = () => {
  return (
    <div className="bg-customPrimary">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:max-w-lg lg:self-end">
          <div className="my-4 flex items-center">
            <img src="/icons/vertical-bar.svg" className="mr-1 h-16 lg:h-24" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {content.title}
            </h1>
          </div>

          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-xl font-bold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <ArrowUpIcon class="h-7 w-7" />
                          ) : (
                            <ChevronDownIcon class="h-7 w-7" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-customColor1">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>

        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="floatElement aspect-h-1 aspect-w-1 overflow-hidden">
            <img
              src={content.imageSrc}
              alt={content.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactfaq;
