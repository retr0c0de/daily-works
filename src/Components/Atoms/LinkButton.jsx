import React from "react";

const LinkButton = ({ router, routerName, isPrimary, bgColor }) => {
  return (
    <a
      className={`py-2 px-4 text-sm font-semibold tracking-tight transition  rounded-md cursor-pointer hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-opacity-75 ${
        isPrimary
          ? `bg-${bgColor}-700 text-gray-50`
          : `bg-transparent text-indigo-500`
      } focus:ring-2 focus:ring-offset-indigo-500 text-center`}
      href={router}
    >
      {routerName}
    </a>
  );
};

export default LinkButton;
