import React from "react";
import { Link } from "react-router-dom";

const AppLogo = () => {
  return (
    <Link to="/">
      <div className="w-20 p-1 bg-indigo-500 rounded-sm cursor-pointer h-14 text-gray-50 hover:bg-indigo-800">
        <p className="">Daily Works</p>
      </div>
    </Link>
  );
};

export default AppLogo;
