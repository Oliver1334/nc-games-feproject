import React from "react";

const DiceLoader = ({ size = 48, className = "" }) => (
  <svg
    role="img"
    aria-label="Loading"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Use currentColor for the dice squares so you can style via Tailwind (e.g., text-brandPrimary) */}
    <g fill="currentColor">
      {/* Top-left / Top-right moving square */}
      <rect x="1" y="1" rx="1" width="10" height="10">
        <animate id="spinner_FFyM" begin="0;spinner_HDCY.end" attributeName="x" dur="0.2s" values="1;13" fill="freeze"/>
        <animate id="spinner_AIvE" begin="spinner_1FwE.end" attributeName="y" dur="0.2s" values="1;13" fill="freeze"/>
        <animate id="spinner_wWCL" begin="spinner_gH4o.end" attributeName="x" dur="0.2s" values="13;1" fill="freeze"/>
        <animate id="spinner_S3Gg" begin="spinner_Q0bx.end" attributeName="y" dur="0.2s" values="13;1" fill="freeze"/>
      </rect>

      {/* Pip for the first square (centered). Circle radius ~1.6 fits nicely in a 10px square */}
      <circle cx="6" cy="6" r="1.6" fill="black">
        {/* match rect x/y animations: centers are +5 from rect positions (1→6, 13→18) */}
        <animate begin="0;spinner_HDCY.end" attributeName="cx" dur="0.2s" values="6;18" fill="freeze"/>
        <animate begin="spinner_1FwE.end" attributeName="cy" dur="0.2s" values="6;18" fill="freeze"/>
        <animate begin="spinner_gH4o.end" attributeName="cx" dur="0.2s" values="18;6" fill="freeze"/>
        <animate begin="spinner_Q0bx.end" attributeName="cy" dur="0.2s" values="18;6" fill="freeze"/>
      </circle>

      {/* Bottom-left / Bottom-right moving square */}
      <rect x="1" y="13" rx="1" width="10" height="10">
        <animate id="spinner_1FwE" begin="spinner_FFyM.end" attributeName="y" dur="0.2s" values="13;1" fill="freeze"/>
        <animate id="spinner_gH4o" begin="spinner_AIvE.end" attributeName="x" dur="0.2s" values="1;13" fill="freeze"/>
        <animate id="spinner_Q0bx" begin="spinner_wWCL.end" attributeName="y" dur="0.2s" values="1;13" fill="freeze"/>
        <animate id="spinner_HDCY" begin="spinner_S3Gg.end" attributeName="x" dur="0.2s" values="13;1" fill="freeze"/>
      </rect>

      {/* Pip for the second square */}
      <circle cx="6" cy="18" r="1.6" fill="black">
        <animate begin="spinner_FFyM.end" attributeName="cy" dur="0.2s" values="18;6" fill="freeze"/>
        <animate begin="spinner_AIvE.end" attributeName="cx" dur="0.2s" values="6;18" fill="freeze"/>
        <animate begin="spinner_wWCL.end" attributeName="cy" dur="0.2s" values="6;18" fill="freeze"/>
        <animate begin="spinner_S3Gg.end" attributeName="cx" dur="0.2s" values="18;6" fill="freeze"/>
      </circle>
    </g>
  </svg>
);

export default DiceLoader;