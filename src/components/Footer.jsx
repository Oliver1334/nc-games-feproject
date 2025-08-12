import { Link } from "react-router-dom";
import NDGLogoDice from "./icons/LogoDice";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";
import GithubIcon from "./icons/GithubIcon";

const Footer = () => {
  return (
    <footer className="bg-brandLight dark:bg-brandDark">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-12 sm:px-6 lg:space-y-16 lg:px-8 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 sm:grid-cols-2">
          <div>
            <div className="text-brandText dark:text-brandText">
              <NDGLogoDice className="w-15 h-32" />
            </div>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Facebook</span>
                  <FacebookIcon />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Twitter</span>
                  <TwitterIcon />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">GitHub</span>
                  <GithubIcon />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-end flex-row items-end">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:col-span-2 lg:col-span-2 lg:grid-cols-2  ">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Company
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Advertise
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Support NDG
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Policies
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Community Guidelines
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Privacy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Terms
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Manage Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2025. Oliver Taylor.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
