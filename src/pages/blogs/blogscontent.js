import React from "react";

const posts = [
  {
    title: "Expert Advice, How to Choose the Right Gun for Your…",
    imageUrl: "/photos/blog-expert-advice.jpg",
    href: "#",
    alt: "shooter reload a rifle",
    date: "May 15, 2023",
    category: "Tips & Tricks",

    firstIconUrl: "/icons/date.svg",
    firstIconAlt: "date icon",
    secondIconUrl: "/icons/category.svg",
    secondIconAlt: "folders icon",
  },
  {
    title: "5 Essential Tips for Taking Your Shooting Skills from Good…",
    imageUrl: "/photos/blog-essential-tips.jpg",
    href: "#",
    alt: "man carrying a rifle",
    date: "May 15, 2023",
    category: "Tips & Tricks",

    firstIconUrl: "/icons/date.svg",
    firstIconAlt: "date icon",
    secondIconUrl: "/icons/category.svg",
    secondIconAlt: "folders icon",
  },
  {
    title: "The History of Shooting Sports, From Ancient Times to the…",
    imageUrl: "/photos/blog-history-shooting.jpg",
    href: "#",
    alt: "aiming using a pistol",
    date: "May 15, 2023",
    category: "Tips & Tricks",

    firstIconUrl: "/icons/date.svg",
    firstIconAlt: "date icon",
    secondIconUrl: "/icons/category.svg",
    secondIconAlt: "folders icon",
  },
  {
    title: "Guns, Gear, and Good Times, Behind the Scenes at Bullseye…",
    imageUrl: "/photos/blog-guns-gear.jpg",
    href: "#",
    alt: "shooter aiming a rifle",
    date: "May 15, 2023",
    category: "Tips & Tricks",

    firstIconUrl: "/icons/date.svg",
    firstIconAlt: "date icon",
    secondIconUrl: "/icons/category.svg",
    secondIconAlt: "folders icon",
  },
  {
    title: "The Top 10 Reasons Why Shooting Sports Are Great for…",
    imageUrl: "/photos/blog-top-10.jpg",
    href: "#",
    alt: "shooter aiming a rifle",
    date: "May 15, 2023",
    category: "Tips & Tricks",

    firstIconUrl: "/icons/date.svg",
    firstIconAlt: "date icon",
    secondIconUrl: "/icons/category.svg",
    secondIconAlt: "folders icon",
  },
  {
    title: "How Our Shooting Club Can Help You Take Your Skills…",
    imageUrl: "/photos/blog-our-shooting.jpg",
    href: "#",
    alt: "shooter aiming a rifle",
    date: "May 15, 2023",
    category: "Tips & Tricks",

    firstIconUrl: "/icons/date.svg",
    firstIconAlt: "date icon",
    secondIconUrl: "/icons/category.svg",
    secondIconAlt: "folders icon",
  },
  // More posts...
];

const blogscontent = () => {
  return (
    <div className="bg-customPrimary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="flex items-center mx-auto max-w-2xl lg:mx-0">
            <img src="/icons/vertical-bar.svg" className="mr-1 h-16 lg:h-20" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl uppercase">
              YOU NEED TO KNOW WITH <br /> OUR LATEST BLOG
            </h2>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt={post.alt}
                  className="aspect-[16/9] w-full bg-customColor1 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-base">
                  <img
                    className="h-6 w-6 md:h-7 md:w-7"
                    src={post.firstIconUrl}
                    alt={post.firstIconAlt}
                  />
                  <time className="text-customColor1">{post.date}</time>

                  <img
                    className="h-6 w-6 md:h-7 md:w-7"
                    src={post.secondIconUrl}
                    alt={post.secondIconAlt}
                  />
                  <time className="text-customColor1">{post.category}</time>
                </div>

                <div className="group relative">
                  <h3 className="mt-3 text-2xl font-bold leading-6 text-white hover:text-gray-400 duration-500">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default blogscontent;
