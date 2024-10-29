import React from "react";

const SearchBar = () => {
  return (
    <div className="flex place-content-center mt-5">
      <div className=" flex place-content-center lg:w-[700px] sm:w-[500px] w-full px-10 sm:px-0 ">
        <input
          type="text"
          placeholder="Search furniture"
          className="w-full p-3 pl-5 rounded-full bg-white/50  placeholder:text-black/60  placeholder:font-medium focus:outline-none focus:ring-4 focus:ring-transparent focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default SearchBar;
