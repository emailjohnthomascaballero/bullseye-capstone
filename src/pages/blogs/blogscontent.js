import React from "react";

const posts = [
  {
    id: 1,
    title: "Expert Advice, How to Choose the Right Gun for Your…",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "/photos/blog-expert-advice.jpg",
    iconDateUrl: "/icons/date.svg",
    date: "May 15, 2023",
    datetime: "2020-03-16",
    iconCategoryUrl: "/icons/category.svg",
    // category: { title: "Tips & Tricks", href: "#" },
    category: "Tips & Tricks",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "5 Essential Tips for Taking Your Shooting Skills from Good…",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "/photos/blog-essential-tips.jpg",
    iconDateUrl: "/icons/date.svg",
    date: "May 15, 2023",
    datetime: "2020-03-16",
    iconCategoryUrl: "/icons/category.svg",
    // category: { title: "Tips & Tricks", href: "#" },
    category: "Tips & Tricks",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "The History of Shooting Sports, From Ancient Times to the…",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "/photos/blog-history-shooting.jpg",
    iconDateUrl: "/icons/date.svg",
    date: "May 15, 2023",
    datetime: "2020-03-16",
    iconCategoryUrl: "/icons/category.svg",
    // category: { title: "Tips & Tricks", href: "#" },
    category: "Tips & Tricks",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Guns, Gear, and Good Times, Behind the Scenes at Bullseye…",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "/photos/blog-guns-gear.jpg",
    iconDateUrl: "/icons/date.svg",
    date: "May 15, 2023",
    datetime: "2020-03-16",
    iconCategoryUrl: "/icons/category.svg",
    // category: { title: "Tips & Tricks", href: "#" },
    category: "Tips & Tricks",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "The Top 10 Reasons Why Shooting Sports Are Great for…",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "/photos/blog-top-10.jpg",
    iconDateUrl: "/icons/date.svg",
    date: "May 15, 2023",
    datetime: "2020-03-16",
    iconCategoryUrl: "/icons/category.svg",
    // category: { title: "Tips & Tricks", href: "#" },
    category: "Tips & Tricks",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "How Our Shooting Club Can Help You Take Your Skills…",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "/photos/blog-our-shooting.jpg",
    iconDateUrl: "/icons/date.svg",
    date: "May 15, 2023",
    datetime: "2020-03-16",
    iconCategoryUrl: "/icons/category.svg",
    // category: { title: "Tips & Tricks", href: "#" },
    category: "Tips & Tricks",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
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
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-base">
                  <img
                    className=" h-6 w-6 md:h-7 md:w-7"
                    src={post.iconDateUrl}
                    alt=""
                  />
                  <time dateTime={post.datetime} className="text-customColor1">
                    {post.date}
                  </time>

                  <img
                    className=" h-6 w-6 md:h-7 md:w-7"
                    src={post.iconCategoryUrl}
                    alt=""
                  />
                  <time dateTime={post.datetime} className="text-customColor1">
                    {post.category}
                  </time>
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
