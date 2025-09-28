import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import NDGLogoSVG from "./icons/Logo.jsx";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [nav, setNav] = useState(false);
  const menuRef = useRef(null);   // wrapper for click-away close

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setNav(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click-away close
  useEffect(() => {
    if (!nav) return;
    const onClickAway = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setNav(false);
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, [nav]);

  const themeIcon = isDarkMode ? <RiMoonClearLine className="h-4 w-4" /> : <RiSunLine className="h-4 w-4" />;
  const themeLabel = isDarkMode ? "Switch to Light mode" : "Switch to Dark mode";

  return (
    <header className="bg-brandLight dark:bg-brandDark">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-brandLightText dark:text-brandText" href="/">
              <span className="sr-only">Home</span>
              <NDGLogoSVG className="w-60 h-32" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-6">
            {/* Desktop nav */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-brandLightText transition hover:text-brandHighlight dark:text-brandText dark:hover:text-brandHighlight"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <Link
                    className="text-brandLightText transition hover:text-brandHighlight dark:text-brandText dark:hover:text-brandHighlight"
                    to="/reviews"
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              {/* Dark mode — hidden < sm */}
              <button
                onClick={toggleDarkMode}
                className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-md bg-brandPrimary text-brandDark shadow-sm hover:bg-brandSecondary dark:hover:bg-brandSecondary"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                type="button"
              >
                {isDarkMode ? <RiMoonClearLine className="h-5 w-5" /> : <RiSunLine className="h-5 w-5" />}
              </button>

              {/* Login — hidden < sm */}
              <Link
                to="/signin"
                className="hidden sm:inline-flex h-10 items-center justify-center rounded-md bg-brandPrimary px-5 text-sm font-medium text-brandDark shadow-sm hover:bg-brandSecondary dark:hover:bg-brandSecondary"
              >
                Login
              </Link>

              {/* Mobile hamburger & dropdown */}
              <div ref={menuRef} className="relative block md:hidden">
                <button
                  type="button"
                  onClick={() => setNav((v) => !v)}
                  aria-expanded={nav}
                  aria-controls="mobile-menu"
                  aria-label="Open navigation menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brandPrimary text-brandDark shadow-sm hover:bg-brandSecondary dark:hover:bg-brandSecondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                </button>

                {/* Dropdown (fixed to avoid clipping) */}
                {nav && (
                  <div
                    id="mobile-menu"
                    className="fixed right-4 top-16 z-50 w-56 rounded-lg border border-black/5 bg-brandLight p-2 shadow-lg dark:border-white/10 dark:bg-brandDark"
                    role="menu"
                  >
                    <a
                      href="#"
                      onClick={() => setNav(false)}
                      className="block rounded-md px-3 py-2 text-sm text-brandLightText hover:bg-brandPrimary/10 dark:text-brandText dark:hover:bg-brandPrimary/20"
                      role="menuitem"
                    >
                      About
                    </a>
                    <Link
                      to="/reviews"
                      onClick={() => setNav(false)}
                      className="block rounded-md px-3 py-2 text-sm text-brandLightText hover:bg-brandPrimary/10 dark:text-brandText dark:hover:bg-brandPrimary/20"
                      role="menuitem"
                    >
                      Reviews
                    </Link>

                    <div className="my-1 h-px bg-black/5 dark:bg-white/10" />

                    {/* Theme toggle stays open; label updates immediately */}
                    <button
                      onClick={toggleDarkMode}
                      className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-brandLightText hover:bg-brandPrimary/10 dark:text-brandText dark:hover:bg-brandPrimary/20"
                      role="menuitem"
                      aria-label={themeLabel}
                    >
                      {themeIcon}
                      <span>{themeLabel}</span>
                    </button>

                    <Link
                      to="/signin"
                      onClick={() => setNav(false)}
                      className="mt-1 block rounded-md bg-brandPrimary px-3 py-2 text-center text-sm font-medium text-brandDark hover:bg-brandSecondary dark:hover:bg-brandSecondary"
                      role="menuitem"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
              {/* End mobile hamburger */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;