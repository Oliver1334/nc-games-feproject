import React from "react";
import "../css/Loading.css";

export const Loading = () => {
  return (
    <div className="loading">
      <p>Loading...</p>
      <div className="spinner-div">
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};
