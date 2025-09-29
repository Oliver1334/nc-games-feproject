import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedHero({ items = [] }) {
  if (!items.length) return null;

  const [primary, ...rest] = items;

  return (
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left: Main Feature */}
        <div className="md:col-span-7">
          <Link to={primary.href} className="block group">
            <div className="w-full aspect-[16/9] overflow-hidden rounded-lg relative">
              <img
                src={primary.image}
                alt={primary.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-md shadow text-sm font-semibold tracking-wide text-gray-800">
                Featured Reviews
              </div>
            </div>
            <h2 className="mt-4 text-2xl font-bold leading-tight group-hover:underline">
              {primary.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              by <span className="font-medium">Author Name</span> ·
              BoardGameGeek News
            </p>
          </Link>
        </div>

        {/* Right: List of secondary features */}
        <div className="md:col-span-5 flex flex-col gap-6">
          {rest.slice(0, 4).map((item) => (
            <Link
              key={item.id ?? item.href}
              to={item.href}
              className="flex gap-4 group items-center"
            >
              <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-md font-semibold leading-snug group-hover:underline">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  by <span className="font-medium">Author Name</span> ·
                  BoardGameGeek News
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
