import React from "react";

function MoreInfoHideButton({ onSelect }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={onSelect}
    >
      <mask
        id="mask0_354_154"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect
          width="24"
          height="24"
          transform="matrix(-1 0 0 1 24 0)"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_354_154)">
        <path
          d="M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

export default MoreInfoHideButton;
