import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { VscBell } from "react-icons/vsc";

const iconClasses = `text-2xl text-gray-900 cursor-pointer sm:text-4xl hover:text-indigo-500 animate-none`;

const LoggedIcons = () => {
  return (
    <div className="flex items-center w-full h-full justify-evenly sm:justify-end sm:space-x-4 sm:w-1/6">
      <AiOutlineMessage className={iconClasses} />

      <VscBell className={iconClasses} />

      <CgProfile className={iconClasses} />
    </div>
  );
};

export default LoggedIcons;
