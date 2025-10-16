/* eslint-disable jsx-a11y/no-redundant-roles */
import {
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
} from "@heroicons/react/solid";
import myPhoto from "../../../assets/img/photo-rounded.png";

const schools = [
  {
    id: 2,
    content: "Informatics - Bachelor Degree",
    target: "Universitas Singaperbangsa Karawang",
    href: "#",
    date: "2017 - 2021",
    datetime: "",
    icon: AcademicCapIcon,
    iconBackground: "bg-indigo-600",
  },
  {
    id: 3,
    content: "IPA - Senior High School",
    target: "SMAN 1 Cilamaya",
    href: "#",
    date: "2014 - 2017",
    datetime: "",
    icon: AcademicCapIcon,
    iconBackground: "bg-indigo-600",
  },
  {
    id: 4,
    content: "Junior High School",
    target: "SMPN 1 Cilamaya Wetan",
    href: "#",
    date: "2011 - 2014",
    datetime: "",
    icon: AcademicCapIcon,
    iconBackground: "bg-indigo-600",
  },
  {
    id: 5,
    content: "Elementary School",
    target: "SDN Tegalwaru 2",
    href: "#",
    date: "2005 - 2011",
    datetime: "",
    icon: AcademicCapIcon,
    iconBackground: "bg-indigo-600",
  },
];

const sertification = [
  {
    id: 1,
    subject: "National Agency of Profession Certification",
    sender: "Programming",
    time: "2019",
    href: "",
    preview: "view sertificate",
  },
  // More sertification...
];

const experiences = [
  {
    id: 1,
    content: "Works Experience",
    target: "",
    href: "#",
    date: "",
    datetime: "",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "Freelance Fullstack Developer",
    target: "",
    href: "#",
    date: "January 2025 - Present",
    datetime: "",
    icon: BriefcaseIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 2,
    content: "Project Team Leader",
    target: "PT. Gria Raya Inovasi Teknologi",
    href: "#",
    date: "Feb 2024 - Des 2024",
    datetime: "",
    icon: BriefcaseIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Front-end Developer",
    target: "PT. Gria Raya Inovasi Teknologi",
    href: "#",
    date: "Jun 2022 - Des 2024",
    datetime: "",
    icon: BriefcaseIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 4,
    content: "Jr Front-end Developer",
    target: "PT. Karya Indonesia Cerdas",
    href: "#",
    date: "Nov 2021 - Apr 2022",
    datetime: "",
    icon: BriefcaseIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 5,
    content: "Web Developer Intern",
    target: "Edutama School",
    href: "#",
    date: "Jan 2020 - Mar 2020",
    datetime: "",
    icon: BriefcaseIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 5,
    content: "Part-time English Teacher",
    target: "LKP Edutama School",
    href: "#",
    date: "Nov 2018 - Jun 2019",
    datetime: "",
    icon: BriefcaseIcon,
    iconBackground: "bg-blue-500",
  },
];

const stats = [
  { name: "Education", stat: school() },
  { name: "", stat: other() },
  { name: "Experience", stat: experience() },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function About() {
  return (
    <div>
      {aboutMe()}
      <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-2xl mb-4 font-bold text-gray-900">
              {item.name}
            </dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {item.stat}
                {/* <span className="ml-2 text-sm font-medium text-gray-500">from {item.previousStat}</span> */}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function aboutMe() {
  return (
    <div className="bg-white pt-10 lg:py-24">
      <div className="pb-10 bg-indigo-700 lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="aspect-w-10 aspect-h-6 rounded-xl hidden lg:flex shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src={myPhoto}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-2xl font-medium text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    urna nulla vitae laoreet augue. Amet feugiat est integer
                    dolor auctor adipiscing nunc urna, sit.
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">
                    Ato Sugiharto
                  </p>
                  <p className="text-base font-medium text-indigo-100">
                    Fullstack Developer
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function school() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {schools.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== schools.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">{event.content}</p>
                    <a
                      href={event.href}
                      className="text-sm font-medium text-gray-900"
                    >
                      {event.target}
                    </a>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function other() {
  return (
    <div>
      <h3 className="text-2xl mb-4 font-bold text-gray-900">Certification</h3>
      <ul role="list" className="divide-y divide-gray-200">
        {sertification.map((message) => (
          <li
            key={message.id}
            className="relative bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
          >
            <div className="flex justify-between space-x-3">
              <div className="min-w-0 flex-1">
                <div className="block focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {message.sender}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {message.subject}
                  </p>
                </div>
              </div>
              <time className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                {message.time}
              </time>
            </div>
            {/* <div className="mt-2">
            <a href={message.href} className="line-clamp-2 text-sm text-gray-100 py-2 px-4 text-center bg-indigo-700">{message.preview}</a>
          </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

function experience() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {experiences.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== experiences.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">{event.content}</p>
                    <a
                      href={event.href}
                      className="text-sm font-medium text-gray-900"
                    >
                      {event.target}
                    </a>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
