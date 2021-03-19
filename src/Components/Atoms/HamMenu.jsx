import { CgClose } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";
import React from "react";

const HamMenu = ({ toggleHam, isHamShown }) => {
  return (
    <div className="text-4xl text-indigo-500 cursor-pointer lg:hidden">
      <HiMenu
        onClick={toggleHam}
        className={isHamShown ? "visible" : "hidden"}
      />
      <CgClose
        onClick={toggleHam}
        className={isHamShown ? "hidden" : "visible"}
      />
    </div>
  );
};

export default HamMenu;
