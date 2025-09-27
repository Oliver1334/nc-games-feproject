import React from "react";
import DiceLoader from "./icons/DiceLoader";

export const Loading = ({ fullScreen = true, label = "Loading..." }) => {
  return (
    <div
      className=
      "h-screen flex flex-col justify-center items-center bg-brandLight dark:bg-brandDark text-brandLightText dark:text-brandText"
    >
      <DiceLoader size={56} className="text-brandPrimary mb-5" />
      <p className="text-brandLightText dark:text-brandText mb-4 text-lg font-medium">
        {label}
      </p>
      <span className="sr-only">{label}</span>
    </div>
  );
};