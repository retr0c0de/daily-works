import React from "react";
import NavLinks from "../Chunks/NavLinks";
import SearchBar from "../Chunks/SearchBar";

const navLinkList = [
  {
    name: "Job Provider",
    to: "/",
  },
  {
    name: "Job Seeker",
    to: "/",
  },
  {
    name: "About Us",
    to: "/about",
  },
];

const NavigationLayout = ({ toggleMobileNav, toggleHam, isHamShown }) => {
  return (
    <div
      className={`items-center justify-around w-8/12 h-full lg:flex
      ${toggleMobileNav} `}
    >
      <div className="absolute left-0 z-10 flex flex-col-reverse items-center justify-end w-full h-full my-10 sm:flex-col sm:justify-around sm:space-x-10 bg-gray-50 top-14 sm:top-0 lg:flex lg:flex-row lg:justify-between lg:items-center lg:relative lg:bg-transparent">
        <NavLinks navLinkList={navLinkList} />
        <SearchBar text="Search" />
      </div>
    </div>
  );
};

export default NavigationLayout;
