import Image from "next/image";
import React from "react";

const exprienceSectionImage = () => {
  return (
    <div className="relative ">
      <div className=" relative w-fit ">
        <div className="  bg-[#F7F7F7]  xl:w-[495px] xl:h-[422px] lg:w-[395px] lg:h-[322px] md:w-[295px] md:h-[222px] sm:w-[250px] sm:h-[100px] rounded-3xl hidden sm:block "></div>
        <div className=" bg-[#F7F7F7] xl:w-[495px] xl:h-[301px] lg:w-[300px] lg:h-[220px] md:w-[200px] md:h-[170px] sm:w-[100px] sm:h-[130px]  absolute rounded-3xl  lg:right-[-190px] xl:right-[-200px] md:right-[-180px] top-[150px] sm:top-[90px] sm:right-[-130px]  hidden sm:block"></div>
      </div>

      <div className="absolute top-[50px]">
        <div className="xl:w-[629px] xl:h-[445px] lg:w-[529px] lg:h-[345px] md:w-[429px] md:h-[245px] sm:w-[329px] sm:h-[190px] w-screen h-[290px]">
          <Image src="/img5.png" alt="" fill={true} className="pr-9 sm:pr-0" />
        </div>
      </div>
    </div>
  );
};

export default exprienceSectionImage;
