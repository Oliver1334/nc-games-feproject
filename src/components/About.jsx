import React from "react";
import aboutPhoto from "../assets/aboutPhoto.jpg"

export const About = () => {
    return (
      <section className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-3">
            About NDG
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover, interact, and share your thoughts on your favorite board
            games — all in one place.
          </p>
        </div>
  
        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="w-full">
            <img
              src={aboutPhoto}
              alt="NDG Screenshot"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
  
          {/* Right: Description */}
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              NDG is a board game review aggregation website built using{" "}
              <span className="font-semibold">React.js</span>. It lets users
              explore, sort, and interact with reviews in an intuitive way.
            </p>
  
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Homepage carousel of featured reviews</li>
              <li>View all reviews in a clean, sortable list</li>
              <li>View detailed pages for individual reviews</li>
              <li>Filter, sort, and order reviews using queries</li>
              <li>Sign in as a user to post comments</li>
              <li>Delete your own comments</li>
              <li>Upvote or downvote reviews</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };