import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import LeafletMap from "src/components/Map";
import Image from "next/image";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ContactMap = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-customPrimary">
      <section aria-labelledby="features-heading" className="relative">
        <div className="h-[500px] aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16 -z-0">
          <LeafletMap />
          {/* <Image
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            src="/photos/contact-us-map.jpg"
            alt="exact map location of this company"
            width="993"
            height="983"
          /> */}
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <div className="mt-4 flex items-center">
              <Image
                className="mr-1 h-16 lg:h-24 2xl:h-16"
                src="/icons/vertical-bar.svg"
                alt="vertical bar icon"
                width="4"
                height="63"
              />
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                GET IN TOUCH WITH OUR FRIENDLY TEAM
              </h1>
            </div>

            <form
              action="#"
              method="POST"
              className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-base leading-6 "
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 bg-white/5 py-2  shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-customColor1 focus:ring-2 focus:ring-inset focus:ring-customSecondary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-base leading-6 "
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 bg-white/5 py-2  shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-customColor1 focus:ring-2 focus:ring-inset focus:ring-customSecondary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-base leading-6 "
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-customColor1 focus:ring-2 focus:ring-inset focus:ring-customSecondary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-base leading-6 text-white"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-customColor1 focus:ring-2 focus:ring-inset focus:ring-customSecondary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-base leading-6 "
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-customColor1 focus:ring-2 focus:ring-inset focus:ring-customSecondary sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className={classNames(
                        agreed ? "bg-customSecondary" : "bg-customColor1",
                        "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customSecondary"
                      )}
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          agreed ? "translate-x-3.5" : "translate-x-0",
                          "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </div>
                  <Switch.Label className="text-sm leading-6 text-gray-600">
                    By selecting this, you agree to our{" "}
                    <a href="#" className="font-semibold text-customSecondary">
                      privacy&nbsp;policy
                    </a>
                    .
                  </Switch.Label>
                </Switch.Group>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full bg-customSecondary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-customColor1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customSecondary duration-500 uppercase"
                >
                  Ask Us Anything
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMap;
