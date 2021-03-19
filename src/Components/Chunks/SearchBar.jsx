import React from "react";

const SearchBar = ({ text }) => {
  return (
    <input
      className="p-4 mx-auto placeholder-gray-900 bg-transparent border-2 border-black sm:px-4 sm:py-1 md:h-10 rounded-xl focus:outline-none focus:ring-offset-purple-800 focus:ring-4 focus:ring-offset-opacity-50"
      placeholder={text}
    />
  );
};

export default SearchBar;
