/* eslint-disable react/jsx-no-target-blank */
import myphoto from "../../../assets/img/photo-rounded.png";
import htmlpic from "../../../assets/icons/html5.png";
import csspic from "../../../assets/icons/css3.png";
import jspic from "../../../assets/icons/js.png";
import reactpic from "../../../assets/icons/react.png";
import tailwindcsspic from "../../../assets/icons/tailwindcss.png";
import angularpic from "../../../assets/icons/angular.png";
import nodejspic from "../../../assets/icons/node-js.png";
import mysqlpic from "../../../assets/icons/mysql.png";
import wordpresspic from "../../../assets/icons/wordpress.png";
import gitpic from "../../../assets/icons/git.png";
import SocialMedia from "../../components/layout/SocialMedia";

const skills = [
  {
    id: 1,
    name: "HTML",
    href: "https://icons8.com/icon/20909/html-5",
    imageUrl: htmlpic,
  },
  {
    id: 2,
    name: "CSS",
    href: "https://icons8.com/icon/21278/css3",
    imageUrl: csspic,
  },
  {
    id: 3,
    name: "Javascript",
    href: "https://icons8.com/icon/108784/javascript",
    imageUrl: jspic,
  },
  {
    id: 4,
    name: "ReactJS",
    href: "https://icons8.com/icon/wPohyHO_qO1a/react",
    imageUrl: reactpic,
  },
  {
    id: 5,
    name: "Angular",
    href: "https://icons8.com/icon/71257/angularjs",
    imageUrl: angularpic,
  },
  {
    id: 6,
    name: "Tailwind CSS",
    href: "https://icons8.com/icon/CIAZz2CYc6Kc/tailwindcss",
    imageUrl: tailwindcsspic,
  },
  {
    id: 7,
    name: "Node JS",
    href: "https://icons8.com/icon/CIAZz2CYc6Kc/tailwindcss",
    imageUrl: nodejspic,
  },
  {
    id: 8,
    name: "MySQL",
    href: "https://icons8.com/icon/CIAZz2CYc6Kc/tailwindcss",
    imageUrl: mysqlpic,
  },
  {
    id: 9,
    name: "Wordpress",
    href: "https://icons8.com/icon/CIAZz2CYc6Kc/tailwindcss",
    imageUrl: wordpresspic,
  },
  {
    id: 10,
    name: "Git",
    href: "https://icons8.com/icon/CIAZz2CYc6Kc/tailwindcss",
    imageUrl: gitpic,
  },
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <section className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-11 relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
            <svg
              className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
              />
            </svg>

            <svg
              className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="56409614-3d62-4985-9a10-7ca758a8f4f0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
              />
            </svg>

            <div className="relative lg:flex lg:items-center">
              <div className="hidden lg:block lg:flex-shrink-0">
                <img
                  className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                  src={myphoto}
                  alt=""
                />
              </div>

              <div className="relative lg:ml-10">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 144 144"
                  aria-hidden="true"
                >
                  <path
                    strokeWidth={2}
                    d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                  />
                </svg>
                <blockquote className="relative">
                  <div className="relative bg-white">
                    <div className="mx-auto max-w-md px-4 text-start sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                      <div className="flex mb-2 lg:mb-0 lg:hidden">
                        <div className="flex-shrink-0 lg:hidden">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={myphoto}
                            alt=""
                          />
                        </div>
                        <div className="ml-4 flex items-center lg:ml-0">
                          <h2 className="text-2xl font-bold tracking-wider text-gray-600">
                            Hallo, I'm
                          </h2>
                        </div>
                      </div>
                      <h2 className="hidden lg:flex text-2xl font-bold tracking-wider text-gray-600">
                        Hallo, I'm
                      </h2>
                      <p className="uppercase text-3xl lg:text-5xl space-x-2 text-indigo-600 lg:text-indigo-500 font-extrabold tracking-tight sm:text-4xl">
                        Ato Sugiharto
                      </p>
                      <p className="mt-4 text-2xl font-bold tracking-wider text-gray-600">
                        Fulltime Freelance Fullstack Developer
                      </p>
                      <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500"></p>
                      <div className="">
                        <a
                          href="https://wa.me/6285782917289"
                          target="_blank"
                          className="mb-4 mt-2 inline-flex items-center gap-2 justify-center px-4 py-2 w-2/4 shadow-sm text-base font-medium text-white rounded-md bg-indigo-600 hover:bg-indigo-700"
                        >
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                          >
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.844.5 3.564 1.372 5.04L2 22l4.992-1.316A9.948 9.948 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm5.045 14.403c-.217.61-1.26 1.183-1.764 1.242-.453.053-1.037.077-1.676-.147a13.974 13.974 0 01-2.796-1.264 11.692 11.692 0 01-4.13-4.13c-.805-1.28-.89-2.352-.81-2.902.065-.469.63-1.474 1.234-1.687.26-.09.594-.044.94.242.354.295 1.174 1.147 1.325 1.385.14.22.14.399.103.574-.056.26-.246.865-.354 1.126-.092.224-.182.374-.368.603-.065.08-.14.18-.058.318.53.945 1.54 2.076 2.554 2.707.333.208.557.332.753.332.09 0 .2-.045.32-.065.26-.07.85-.402 1.1-.503.224-.092.398-.14.558-.092.175.053.804.37 1.09.523.322.175.51.262.58.404.091.192.091.926-.126 1.534z" />
                          </svg>
                          Contact me
                        </a>
                      </div>
                    </div>
                  </div>

                  <h2 className="my-6 text-xl uppercase text-center font-bold tracking-wider text-gray-600">
                    my skills
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {skills.map((skill) => (
                      <div
                        key={skill.id}
                        className="relative rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <a href={skill.href} target="_blank">
                          <div className="flex-shrink-0">
                            <img
                              className="h-6 w-6 rounded-full"
                              src={skill.imageUrl}
                              alt=""
                            />
                          </div>
                        </a>
                        <div className="flex-1 min-w-0">
                          <div className="focus:outline-none">
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            <p className="text-xs font-medium text-gray-900">
                              {skill.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <SocialMedia />
          </div>
        </div>
      </section>
    </div>
  );
}
