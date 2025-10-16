import React, { useState, useEffect } from "react";
import aboutPhoto from "../assets/aboutPhoto.jpg";

export const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 50); // small delay for smooth fade
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="bg-brandLight dark:bg-brandDark ">

    <section className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      {/* Fade wrapper for content only */}
      <div
        className={`transition-opacity duration-700 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Header */}
        <div className="text-center space-y-4 ">
          <h1 className="text-4xl font-extrabold text-brandLightText dark:text-brandPrimary">
            About NDG
          </h1>
          <p className="text-lg text-brandLightText dark:text-brandText  max-w-2xl mx-auto">
            Discover, interact, and share your thoughts on your favorite board games.
          </p>
        </div>

        {/* Full-width Image (smaller height) */}
        <div className="pt-3 pb-8">
          <img
            src={aboutPhoto}
            alt="NDG Screenshot"
            className="rounded-lg shadow-lg w-full max-h-96 object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          {/* Introduction */}
          <p className="text-brandLightText dark:text-brandText  leading-relaxed">
            Welcome to <span className="font-semibold">No Dice Games</span> (NDG),
            a board game review aggregation website built using{" "}
            <span className="font-semibold">React.js</span>.
          </p>

          {/* Key Features */}
          <div className="pb-6">
            <h2 className="text-xl font-semibold text-brandLightText dark:text-brandPrimary mb-2">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-1 text-brandLightText dark:text-brandText ">
              <li>View all reviews and a single review</li>
              <li>Filter, sort and/or order reviews</li>
              <li>View, post & delete review comments</li>
              <li>Upvote a review</li>
              <li>Login as an NDG user with an account page</li>
              <li>Optimised for both mobile and desktop responsiveness</li>
            </ul>
          </div>

          {/* Demo Login */}
          <div>
            <p className="text-brandLightText dark:text-brandText  mb-2">
              Feel free to log in using one of the demo accounts below to access their account page and comment on reviews. All use the password:{" "}
              <span className="font-mono bg-brandPrimary/40 dark:bg-brandPrimary/40 px-1 rounded">
                password
              </span>.
            </p>
            <h3 className="font-semibold mb-1 text-brandLightText dark:text-brandPrimary">
              Available Demo Users:
            </h3>
            <ul className="list-disc list-inside text-brandLightText dark:text-brandText ">
              <li><span className="font-mono">tickle122</span></li>
              <li><span className="font-mono">grumpy19</span></li>
              <li><span className="font-mono">happyamy2016</span></li>
              <li><span className="font-mono">cooljmessy</span></li>
              <li><span className="font-mono">weegembump</span></li>
              <li><span className="font-mono">jessjelly</span></li>
            </ul>
          </div>

          {/* Backend Note */}
          <p className="text-brandLightText dark:text-brandText ">
            Please note that the backend is hosted on Render's free-tier, so it may take a few seconds to load reviews!
          </p>

          {/* Other Projects */}
          <p className="text-brandLightText dark:text-brandText ">
            Explore my other projects at{" "}
            <a
              href="https://olivertaylor-dev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brandPrimary hover:underline"
            >
              olivertaylor-dev
            </a>.
          </p>
        </div>
      </div>
    </section>
    </main>
  );
};
