import React from "react";
import devrosIcon from "../assets/devros naranja.svg";

interface IconProps {
  size?: number;
  alt?: string;
}

const Icon: React.FC<IconProps> = ({ size = 24, alt = "icon" }) => (
  <img
    src={devrosIcon}
    width={size}
    height={size}
    alt={alt}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  />
);

export default Icon;
