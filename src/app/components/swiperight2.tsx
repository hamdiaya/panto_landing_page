import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";

const Swiperight2 = ({ number }: { number: number }) => {
  return (
    <div>
      <div className="hidden lg:block ">
        {number >3 ? (
          <div className="custom-swiper-button custom-swiper-button-prev font-bold text-[24px] bg-black text-white p-3 rounded-full mr-3">
            <HiArrowLongLeft />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className=" lg:hidden md:block hidden">
      {number >2? (
          <div className="custom-swiper-button custom-swiper-button-prev font-bold text-[24px] bg-black text-white p-3 rounded-full mr-3">
            <HiArrowLongLeft />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="md:hidden hidden sm:block ">
      {number >2? (
          <div className="custom-swiper-button custom-swiper-button-prev font-bold text-[24px] bg-black text-white p-3 rounded-full mr-3">
            <HiArrowLongLeft />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="block sm:hidden ">
      {number >1 ? (
          <div className="custom-swiper-button custom-swiper-button-prev font-bold text-[12px]  bg-black text-white p-2 rounded-full mr-2">
            <HiArrowLongLeft />
          </div>
        ) : (
          <div></div>
        )}
      </div>

    </div>
  );
};

export default Swiperight2;
