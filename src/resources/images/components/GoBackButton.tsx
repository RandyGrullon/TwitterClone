import React from 'react';

interface GobackProps {
  width?: number;
  height?: number;
  color?: string;
  onClick?: () => void;
}

const Goback = ({ width, height, color , onClick }:GobackProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M15.5 18.5L8 12L15.5 5.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Goback;
