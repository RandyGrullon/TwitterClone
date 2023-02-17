import React from 'react';

interface ThreeDotsIconProps{
    width?: number;
    height?: number;
    color?: string;
    onClick?: () => void;
}
const ThreeDotsIcon = ({width, height, color, onClick}: ThreeDotsIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 256 256" width={width} height={height}>
      <circle fill={color} fillOpacity="1.000" cx="47.99" cy="127.99" r="23.92"/>
      <circle fill={color} fillOpacity="1.000" cx="127.99" cy="127.99" r="23.92"/>
      <circle fill={color} fillOpacity="1.000" cx="207.99" cy="127.99" r="23.92"/>
    </svg>
  );
};

export default ThreeDotsIcon;
