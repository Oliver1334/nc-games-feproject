import React, { useState, useEffect } from "react";
import aboutPhoto from "../assets/aboutPhoto.jpg";

export const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 50); // small delay for smooth fade
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="bg-brandLight dark:bg-brandDark max-w-5xl mx-auto px-4 py-12 space-y-12">
      {/* Fade wrapper for content only */}
      <div
        className={`transition-opacity duration-700 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            About NDG
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover, interact, and share your thoughts on your favorite board
            games — all in one place.
          </p>
        </div>

        {/* Full-width Image (smaller height) */}
        <div>
          <img
            src={aboutPhoto}
            alt="NDG Screenshot"
            className="rounded-lg shadow-lg w-full max-h-96 object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          {/* Introduction */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Welcome to <span className="font-semibold">No Dice Games</span> (NDG),
            a board game review aggregation website built using{" "}
            <span className="font-semibold">React.js</span>.
          </p>

          {/* Key Features */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>🎲 View all articles, or view articles by topic</li>
              <li>🎲 Filter, sort and/or order reviews</li>
              <li>🎲 View, post & delete review comments</li>
              <li>🎲 Upvote a review</li>
              <li>🎲 Optimised for both mobile and desktop responsiveness</li>
            </ul>
          </div>

          {/* Demo Login */}
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Feel free to log in using one of the demo accounts below to access their account page and comment on reviews. All use the password:{" "}
              <span className="font-mono bg-gray-100 dark:bg-gray-700 px-1 rounded">
                password
              </span>.
            </p>
            <h3 className="font-semibold mb-1 text-gray-800 dark:text-gray-200">
              Available Demo Users:
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li><span className="font-mono">tickle122</span></li>
              <li><span className="font-mono">grumpy19</span></li>
              <li><span className="font-mono">happyamy2016</span></li>
              <li><span className="font-mono">cooljmessy</span></li>
              <li><span className="font-mono">weegembump</span></li>
              <li><span className="font-mono">jessjelly</span></li>
            </ul>
          </div>

          {/* Backend Note */}
          <p className="text-gray-700 dark:text-gray-300">
            Please note the backend is hosted on Render's free-tier, so it may take a few seconds to load!
          </p>

          {/* Other Projects */}
          <p className="text-gray-700 dark:text-gray-300">
            Explore my other projects at{" "}
            <a
              href="https://oliver.taylor-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              oliver.taylor-dev
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};
