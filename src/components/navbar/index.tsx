"use client";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Link from "next/link";
import BtnThemeNavbar from "../partials/BtnThemeNavbar";
import WebLogoMain from "../icons/logo";
import { useState } from "react";
import { strings } from "@/src/data/strings";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const socials = [
    {
      name: "Instagram",
      href: strings.instagram,
      icon: IconBrandInstagram,
    },
    {
      name: "Twitter",
      href: strings.twitter,
      icon: IconBrandTwitter,
    },
    {
      name: "Github",
      href: strings.github,
      icon: IconBrandGithub,
    },
  ];
  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white border-gray-200 px-6 lg:px-12 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <WebLogoMain className="mr-3 h-6 sm:h-9" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Lmoisz
            </span>
          </Link>
          <div className="flex items-center lg:order-2 ">
            <div className="hidden sm:flex items-center">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  className=" rounded-lg hover:bg-gray-100 p-2 dark:hover:bg-gray-800"
                  href={social.href}
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon
                    className="h-6 w-6 dark:text-gray-300 text-gray-700"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
            <BtnThemeNavbar />
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul
              className={
                "flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
              }
            >
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent hover:text-blue-400 dark:hover:text-blue-600  lg:text-primary-700 lg:p-0 dark:text-gray-300"
                    aria-current="page"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
