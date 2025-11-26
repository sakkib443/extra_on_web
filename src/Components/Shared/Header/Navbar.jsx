"use client";

import Link from "next/link";

// Navigation Items
const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Website Template",
    href: "/websites",
    // dropdown: ["Html", "WordPress", "Mern", "React"],
  },
  {
    name: "Products",
    href: "/products",
    dropdown: ["Themes", "Templates", "Plugins"],
  },
  {
    name: "Tools",
    href: "/tools",
    dropdown: ["Editor", "Converter"],
  },
  { name: "Learn", href: "/learn" },
  { name: "Pricing", href: "/pricing" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50  bg-white border-b border-gray-100 shadow-sm font-outfit">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <svg
              className="w-8 h-8 mr-2 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5.405-6.696A7.95 7.95 0 0010 16a7.95 7.95 0 005.405-2.696L10 10.491 4.595 11.304zm1.536-2.583c-.015.01-.026.02-.036.031L10 7.994l3.896 1.838a.042.042 0 01-.036-.031c-.563-.563-1.127-1.127-1.69-1.69L10 6.64l-1.69 1.69c-.563.563-1.127 1.127-1.69 1.69zM10 3a1 1 0 00-1 1v2a1 1 0 102 0V4a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-2xl font-bold text-gray-800">ExtraWeb</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 ml-10">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    className="flex items-center text-gray-700 hover:text-primary font-medium py-2 transition duration-150"
                  >
                    {item.name}
                    <svg
                      className="ml-1 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 cursor-pointer hover:text-teal-600 font-medium py-2 transition duration-150"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Hover Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-44 rounded-sm shadow-md bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <div  className="py-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem}
                          href={`/${item.name.toLowerCase()}/${subItem
                            .toLowerCase()
                            .replace(" ", "-")}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Search Box */}
            <div className="relative hidden sm:block">
              <input
                type="search"
                placeholder="Search animations"
                className="pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 w-48 md:w-64"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            {/* Language Selector */}
            <div className="relative hidden md:block">
              <select className="appearance-none bg-white border border-gray-300 py-2 pl-3 pr-8 rounded-sm text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500">
                <option>EN</option>
                <option>BN</option>
                <option>ES</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Buttons */}
            <Link
              href="/login"
              className="px-4 py-2 text-sm border border-gray-300 rounded-sm font-medium text-gray-700 hover:text-teal-600 hidden sm:block"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 text-sm font-medium text-white bg-teal-500 rounded-sm hover:bg-teal-600"
            >
              Sign up
            </Link>

            {/* Mobile Menu */}
            <button className="lg:hidden p-2 text-gray-600 hover:text-teal-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
