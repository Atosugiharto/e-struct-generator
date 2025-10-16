function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const social = [
  {
    href: 'https://www.fiverr.com/atosugiharto',
    name: 'Fiverr',
    handle: 'atosugiharto',
    imageUrl:
      'https://images.unsplash.com/photo-1638262052640-82e94d64664a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmRzaGFrZXxlbnwwfHwwfHw%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    href: 'https://www.linkedin.com/in/ato-sugiharto/',
    name: 'Linkedin',
    handle: 'Ato Sugiharto',
    imageUrl:
      'https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    href: 'https://facebook.com/ato.soegiharto/',
    name: 'Facebook',
    handle: 'Ato Soegiharto',
    imageUrl:
      'https://images.unsplash.com/photo-1662947852193-70b139587b96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGZhY2Vib29rJTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    href: 'https://www.instagram.com/a.soegiharto/',
    name: 'Instagram',
    handle: '@a.soegiharto',
    imageUrl:
      'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1haWwlMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-center uppercase text-3xl mb-4 font-bold text-gray-900">Contact</h1>
      <div>
      <div className="flow-root mt-6">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          <li className="py-4 mt-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1567473030492-533b30c5494c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFpbHxlbnwwfHwwfHw%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Email</p>
                <p className="text-sm text-gray-500 truncate">atosoegiharto@gmail.com</p>
              </div>
              <div>
              </div>
            </div>
          </li>
          {social.map((person) => (
            <li key={person.handle} className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8 rounded-full" src={person.imageUrl} alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                  <p className="text-sm text-gray-500 truncate">{ person.handle}</p>
                </div>
                <div>
                  <a target='_blank'
                    href={person.href}
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}
