import React, { useState } from "react";
import { HiOutlineArrowCircleUp } from "react-icons/hi";

const Arrow = ({ toggleList }) => {
  const [isRotate, setIsRotate] = useState(false);

  const rotateArrow = () => {
    setIsRotate(!isRotate);
    toggleList();
  };

  return (
    <HiOutlineArrowCircleUp
      onClick={rotateArrow}
      className={`w-full h-full text-gray-900 transition transform cursor-pointer ${
        isRotate ? "rotate-180" : "rotate-0"
      }`}
    />
  );
};

export default Arrow;
