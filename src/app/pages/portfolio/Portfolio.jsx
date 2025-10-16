import quranWebApp from '../../../assets/img/portfolio/quran-web-app.png'
import portfolioWebApp from '../../../assets/img/portfolio/personal-portfolio.png'
import myphoto from '../../../assets/img/photo-rounded.png'
import weedingInv from "../../../assets/img/portfolio/wedding-inv.PNG";
import jobBoarding from "../../../assets/img/portfolio/job-boarding.PNG";
import eo from "../../../assets/img/portfolio/eo.PNG";

const posts = [
  {
    title: "Event Organizer",
    href: "https://event-organizer-five.vercel.app/dashboard",
    category: { name: "Web Design", href: "#" },
    description: "Event Organizer.",
    date: "2023",
    datetime: "2023",
    imageUrl: eo,
    readingTime: "4 min",
    author: {
      name: "Ato Sugiharto",
      href: "#",
      imageUrl: myphoto,
    },
  },
  {
    title: "Job Boarding App",
    href: "https://job-boarding-app.vercel.app/",
    category: { name: "Web Design", href: "#" },
    description: "Job Boarding App.",
    date: "2023",
    datetime: "2023",
    imageUrl: jobBoarding,
    readingTime: "4 min",
    author: {
      name: "Ato Sugiharto",
      href: "#",
      imageUrl: myphoto,
    },
  },
  {
    title: "Digital Wedding Invitation",
    href: "https://wedding-invitation-devi-ato.vercel.app/",
    category: { name: "Invitation", href: "#" },
    description: "Digital Wedding Invitation.",
    date: "2023",
    datetime: "2023",
    imageUrl: weedingInv,
    readingTime: "4 min",
    author: {
      name: "Ato Sugiharto",
      href: "#",
      imageUrl: myphoto,
    },
  },
  {
    title: "Personal Portfolio Website",
    href: "/",
    category: { name: "Personal", href: "#" },
    description: "This is my portfolio website.",
    date: "2022",
    datetime: "2022",
    imageUrl: portfolioWebApp,
    readingTime: "4 min",
    author: {
      name: "Ato Sugiharto",
      href: "#",
      imageUrl: myphoto,
    },
  },
  {
    title: "Qur'an Web App",
    href: "https://quran-web-app-omega.vercel.app/",
    category: { name: "Scripture", href: "#" },
    description: "This is Qur'an web application with Indonesian subtitles.",
    date: "2021",
    datetime: "2021",
    imageUrl: quranWebApp,
    readingTime: "6 min",
    author: {
      name: "Ato Sugiharto",
      href: "#",
      imageUrl: myphoto,
    },
  },
];

export default function Portfolio() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Hi, welcome
          </h2>
          <p className="lowercase mt-3 max-w-2xl mx-auto text-xl font-medium text-gray-500 sm:mt-4">
            Hope you enjoy see my portfolios.
          </p>
        </div>

        {/* <h2 className="mt-2 text-2xl tracking-tight font-bold text-gray-800">
          Portfolio you can access
        </h2> */}
        <div className="mt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <p className="">{post.category.name}</p>
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={post.href}
                    className="block mt-2"
                  >
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      {/* <span aria-hidden="true">&middot;</span> */}
                      {/* <span>{post.readingTime} read</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  