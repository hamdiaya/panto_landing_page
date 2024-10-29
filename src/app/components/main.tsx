import React from "react";
import Image from "next/image";
import NavBar from "./navBar";
import SearchBar from "./searchBar";
const main = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10 ">
        <Image
          src="/bg.png"
          alt="bg"
          fill={true}
          className="md:object-fill object-cover"
        />
      </div>
      <div className="relative z-10">
        <NavBar />
        <h1 className="text-white pt-2 font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center xl:px-80 lg:px-[200px] md:px-40 sm:px-[120px] px-9 lg:leading-[70px] md:leading-[55px] sm:leading-[45px]  leading-[30px]">
          {" "}
          Make your interior more minimalistic & modern{" "}
        </h1>
        <p className="text-gray-400 mt-2 text-center xl:px-[480px] lg:px-[300px] md:px-44 sm:px-[120px] px-10">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default main;
