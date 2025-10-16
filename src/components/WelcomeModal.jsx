// src/components/WelcomeModal.jsx
import { useState, useEffect, useRef, useCallback } from "react";

export const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");
    if (!hasSeenModal) {
      setIsOpen(true);
      setTimeout(() => setShowContent(true), 10);
    }
  }, []);

  const handleClose = useCallback(() => {
    setShowContent(false);
    setTimeout(() => {
      setIsOpen(false);
      localStorage.setItem("hasSeenModal", "true");
    }, 200);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };

    const onClickAway = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickAway);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickAway);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!showContent}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        className={`bg-brandLight dark:bg-brandSecondary rounded-lg shadow-lg max-w-lg w-full mx-4 p-6 relative transform transition-all duration-300 ${
          showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-brandText hover:text-brandHighlight text-xl cursor-pointer"
          aria-label="Close welcome modal"
        >
          ✕
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-3 text-center text-brandPrimary">
          Welcome to No Dice Games
        </h2>

        <p className="text-brandText mb-4 ">
          Feel free to log in using one of the demo accounts below to access
          their account page and comment on reviews. All use the
          password:{" "}
          <span className="font-mono bg-gray-100 dark:bg-brandSecondary px-1 rounded">
            password
          </span>
          .
        </p>

        <div className="mb-4">
          <h3 className="font-semibold mb-1 text-brandText">
            Available Demo Users:
          </h3>
          <ul className="list-disc list-inside text-brandText">
            <li><span className="font-mono">tickle122</span></li>
            <li><span className="font-mono">grumpy19</span></li>
            <li><span className="font-mono">happyamy2016</span></li>
            <li><span className="font-mono">cooljmessy</span></li>
            <li><span className="font-mono">weegembump</span></li>
            <li><span className="font-mono">jessjelly</span></li>
          </ul>
        </div>

        <p className="text-brandText mb-4">
          More information can be found in the "About" section of the website.
        </p>

        <button
          onClick={handleClose}
          className="mt-2 w-full bg-brandPrimary py-2 rounded-md transition text-brandDark shadow-sm hover:bg-brandPrimaryDarker transition-colors duration-250 cursor-pointer"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
