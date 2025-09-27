import React from "react";
import DiceLoader from "./icons/DiceLoader";

export const Loading = ({ fullScreen = true, label = "Loading..." }) => {
  return (
    <div
      className={
        fullScreen
          ? "min-h-screen flex flex-col items-center justify-center"
          : "min-h-[160px] flex flex-col items-center justify-center"
      }
      aria-busy="true"
      aria-live="polite"
    >
      <p className="text-gray-700 dark:text-gray-200 mb-4 text-lg font-medium">
        {label}
      </p>
      {/* Use brand color; adjust size as needed */}
      <DiceLoader size={56} className="text-brandPrimary" />
      {/* Reduced motion hint (optional): add a tiny caption or swap to a non-animated icon if you want */}
      <span className="sr-only">{label}</span>
    </div>
  );
};