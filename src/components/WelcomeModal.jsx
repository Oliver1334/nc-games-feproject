// src/components/WelcomeModal.jsx
import { useState, useEffect, useRef, useCallback } from "react";

export const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false); // for fade-in timing
  const modalRef = useRef(null);

  // Show modal on first visit (localStorage flag)
  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");
    if (!hasSeenModal) {
      setIsOpen(true);
      // Delay to allow transition to trigger cleanly
      setTimeout(() => setShowContent(true), 10);
    }
  }, []);

  // Keep the same close logic you had (animation -> unmount -> set localStorage)
  const handleClose = useCallback(() => {
    setShowContent(false);
    setTimeout(() => {
      setIsOpen(false);
      localStorage.setItem("hasSeenModal", "true");
    }, 200); // match transition duration
  }, []);

  // Click outside & Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };

    const onClickAway = (e) => {
      // If click is outside the modal content, close
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
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg w-full mx-4 p-6 relative transform transition-all duration-300 ${
          showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 text-xl"
          aria-label="Close welcome modal"
        >
          ✕
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
          Welcome 👋
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This is a demo board game reviews site built for my portfolio. You can
          browse reviews, post comments, and interact like a real app.
          <br />
          Feel free to log in using one of the demo accounts below. All use the
          password:{" "}
          <span className="font-mono bg-gray-100 dark:bg-gray-700 px-1 rounded">
            password
          </span>
          .
        </p>

        <div className="mb-4">
          <h3 className="font-semibold mb-1 text-gray-800 dark:text-gray-200">
            Demo Users:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              <span className="font-mono">cooluser</span>
            </li>
            <li>
              <span className="font-mono">boardgamer</span>
            </li>
            <li>
              <span className="font-mono">testuser</span>
            </li>
          </ul>
        </div>

        <button
          onClick={handleClose}
          className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
