import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDark, setIsDark] = useState(false);

  
  return (
    <header className="bg-white dark:bg-brandDark">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-300" href="/">
              <span className="sr-only">Home</span>
              <p>LogoHere</p>
            </a>
          </div>

          {/* Navbar text buttons */}
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </nav>

            {/* Navbar box buttons */}
            <div className="flex items-center gap-4">

              {/*Darkmode button*/}
              <div className="gap-4">
                <button className=" bg-brandPrimary rounded-md px-2 py-2.5 text-sm cursor-pointer"
                onClick={() => {
                  setIsDark(!isDark);
                }}>
                  {isDark ? (
                    <RiSunLine className="w-4 h-4" />
                  ) : (
                    <RiMoonClearLine className="w-4 h-4" />
                  
                  )}
                </button>
              </div>




              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-brandPrimary px-5 py-2.5 text-sm font-medium text-brandDark shadow-sm dark:hover:bg-brandSecondary"
                  href="#"
                >
                  Login
                </a>
              </div>

              {/* Hamburger */}
              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
