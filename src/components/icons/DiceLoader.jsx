// src/components/icons/DiceLoader.jsx
import React from "react";

/**
 * Squares take color from the parent (via text-*).
 * Pips are light in light mode and dark in dark mode.
 */
const DiceLoader = ({ size = 64, className = "" }) => (
  <svg
    role="img"
    aria-label="Loading"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* SQUARES use currentColor; color them with text-* on parent or on this <g> */}
    <g fill="currentColor" className="">
      {/* Square 1 */}
      <rect x="1" y="1" rx="1" width="10" height="10">
        <animate id="spinner_FFyM" begin="0;spinner_HDCY.end" attributeName="x" dur="0.2s" values="1;13" fill="freeze" />
        <animate id="spinner_AIvE" begin="spinner_1FwE.end" attributeName="y" dur="0.2s" values="1;13" fill="freeze" />
        <animate id="spinner_wWCL" begin="spinner_gH4o.end" attributeName="x" dur="0.2s" values="13;1" fill="freeze" />
        <animate id="spinner_S3Gg" begin="spinner_Q0bx.end" attributeName="y" dur="0.2s" values="13;1" fill="freeze" />
      </rect>

      {/* Square 2 */}
      <rect x="1" y="13" rx="1" width="10" height="10">
        <animate id="spinner_1FwE" begin="spinner_FFyM.end" attributeName="y" dur="0.2s" values="13;1" fill="freeze" />
        <animate id="spinner_gH4o" begin="spinner_AIvE.end" attributeName="x" dur="0.2s" values="1;13" fill="freeze" />
        <animate id="spinner_Q0bx" begin="spinner_wWCL.end" attributeName="y" dur="0.2s" values="1;13" fill="freeze" />
        <animate id="spinner_HDCY" begin="spinner_S3Gg.end" attributeName="x" dur="0.2s" values="13;1" fill="freeze" />
      </rect>
    </g>

    {/* PIPS use their own currentColor, which we control with text-brandLight / dark:text-brandDark */}
    <g fill="currentColor" className="text-brandLight dark:text-brandDark">
      {/* Pip for square 1 (center moves with square) */}
      <circle cx="6" cy="6" r="1.2">
        {/* centers: rect(1|13) + 5 = 6|18 */}
        <animate begin="0;spinner_HDCY.end" attributeName="cx" dur="0.2s" values="6;18" fill="freeze" />
        <animate begin="spinner_1FwE.end" attributeName="cy" dur="0.2s" values="6;18" fill="freeze" />
        <animate begin="spinner_gH4o.end" attributeName="cx" dur="0.2s" values="18;6" fill="freeze" />
        <animate begin="spinner_Q0bx.end" attributeName="cy" dur="0.2s" values="18;6" fill="freeze" />
      </circle>

      {/* Pip for square 2 */}
      <circle cx="6" cy="18" r="1.2">
        <animate begin="spinner_FFyM.end" attributeName="cy" dur="0.2s" values="18;6" fill="freeze" />
        <animate begin="spinner_AIvE.end" attributeName="cx" dur="0.2s" values="6;18" fill="freeze" />
        <animate begin="spinner_wWCL.end" attributeName="cy" dur="0.2s" values="6;18" fill="freeze" />
        <animate begin="spinner_S3Gg.end" attributeName="cx" dur="0.2s" values="18;6" fill="freeze" />
      </circle>
    </g>
  </svg>
);

export default DiceLoader;
