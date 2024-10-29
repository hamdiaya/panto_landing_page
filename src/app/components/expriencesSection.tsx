import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

const ExpriencesSection = () => {
  return (
    <div className="h-screen flex place-items-center ">
      {/* Main Container */}
      <div className="sm:grid sm:grid-cols-3 xl:pr-[90px] lg:pr-[70px] md:pr-[50px] sm:pr-[50px] px-0 ">
        {/* Image Section */}
        <div className="mb-6 sm:mb-0 rounded-r-3xl sm:col-span-2 relative xl:w-[629px] xl:h-[445px] lg:w-[529px] lg:h-[345px] md:w-[429px]  sm:w-[370px]  w-full h-[290px] ">
          <Image
            src="/img5.png"
            alt="Experience Image"
            fill={true} // This will make the image take the size of the parent div
            className="pr-4 sm:pr-0"
            objectFit="cover" // Optional: this ensures the image covers the area without distortion
          />
        </div>

        {/* Text Section */}
        <div className="px-4 place-content-center">
          <h1 className="text-orange-500 uppercase tracking-wide font-semibold lg:text-[14px] sm:text-[13px]">
            Experiences
          </h1>
          <h1 className="font-bold xl:text-[42px] lg:text-[30px] md:text-[20px] sm:text-[17px] text-[20px]">
            We provide you the best experience
          </h1>
          <p className="text-gray-500 md:text-[13px] lg:text-[14px] text-[12px] pb-3 text-justify">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and luxurious style and with premium quality
            materials.
          </p>
          <Link
            href="#"
            className="flex place-items-center gap-3 lg:text-[14px] sm:text-[13px] text-orange-500 font-semibold"
          >
            <h1>More Info</h1>
            <HiArrowLongRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpriencesSection;
