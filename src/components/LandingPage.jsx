import React from "react";
import NDGLogoDice from "./icons/LogoDice";
import { Loading } from "./Loading";

const LandingPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-brandLight dark:bg-brandDark text-brandLightText dark:text-brandText">
      {/* <h1>Landing Page</h1> */}
      <Loading />
    </div>
  );
};

export default LandingPage;
