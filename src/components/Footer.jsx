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
                  className="text-brandLightText transition hover:text-brandHighlight dark:text-brandText dark:hover:text-brandHighlight"
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
                  className="text-brandLightText transition hover:text-brandHighlight dark:text-brandText dark:hover:text-brandHighlight"
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
                  className="text-brandLightText transition hover:text-brandHighlight dark:text-brandText dark:hover:text-brandHighlight"
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
                  className="text-brandLightText transition hover:text-brandHighlight dark:text-brandText dark:hover:text-brandHighlight"
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
                <p className="font-medium text-brandLightText dark:text-brandText">
                  Company
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-brandLightText transition hover:text-brandHighlight dark:text-brandText dark:hover:text-brandHighlight"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-brandLightText transition hover:text-brandHighlight dark:text-brandText dark:hover:text-brandHighlight"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-brandLightText transition hover:text-brandHighlight dark:text-brandText dark:hover:text-brandHighlight"
                    >
                      Advertise
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-brandLightText transition hover:text-brandHighlight dark:text-brandText dark:hover:text-brandHighlight"
                    >
                      Support NDG
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-brandLightText dark:text-brandText">
                  Policies
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-brandLightText transition hover:text-brandHighlight dark:text-brandText dark:hover:text-brandHighlight"
                    >
                      Community Guidelines
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-brandLightText transition hover:text-brandHighlight dark:text-brandText dark:hover:text-brandHighlight"
                    >
                      Privacy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-brandLightText transition hover:text-brandHighlight dark:text-brandText dark:hover:text-brandHighlight"
                    >
                      Terms
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-brandLightText transition hover:text-brandHighlight dark:text-brandText dark:hover:text-brandHighlight"
                    >
                      Manage Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-brandHighlight dark:text-brandHighlight">
          &copy; 2025. Oliver Taylor.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
