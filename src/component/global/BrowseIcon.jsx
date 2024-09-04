import React from "react";
import { Tooltip } from "@nextui-org/react";

export const BrowseIcon = ({
  fill = 'none',
  size,
  height,
  width,
  stroke = 'currentColor',
  strokeWidth = 32,
  ...props
}) => {
  return (
    <Tooltip delay={1000} content="Browse Games">
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 512 512"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
        fill="none"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <path
        d="M338.29 338.29L448 448"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
    </svg>
    </Tooltip>
  );
};
