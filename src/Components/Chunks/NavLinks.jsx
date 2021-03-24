import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ navLinkList }) => {
  return (
    <nav className="w-5/6 bg-transparent">
      <ul className="flex flex-col items-center justify-between h-40 md:justify-evenly md:h-auto md:flex-row">
        {navLinkList.map((navLink) => (
          <Link to={navLink.to}>
            <li
              className={`text-base font-semibold tracking-wide cursor-pointer p-2
            md:hover:bg-indigo-500 md:hover:shadow-xl md:rounded-lg md:hover:text-gray-50 uppercase transition`}
            >
              {navLink.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
