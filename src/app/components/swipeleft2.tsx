import React from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const Swipeleft2 = ({ number }: { number: number }) => {
  return (
    <div>
      <div className="hidden lg:block ">
        {number >3 ? (
           <div className="custom-swiper-button custom-swiper-button-next font-bold text-[24px] ml-3 bg-black text-white p-3 rounded-full">
           <HiArrowLongRight />
         </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className=" lg:hidden md:block hidden">
      {number >2? (
          <div className="custom-swiper-button custom-swiper-button-next font-bold text-[24px] ml-3 bg-black text-white p-3 rounded-full">
          <HiArrowLongRight />
        </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="md:hidden hidden sm:block ">
      {number >2? (
          <div className="custom-swiper-button custom-swiper-button-next font-bold text-[24px] ml-3 bg-black text-white p-3 rounded-full">
          <HiArrowLongRight />
        </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="block sm:hidden ">
      {number >1 ? (
          <div className="custom-swiper-button custom-swiper-button-next font-bold text-[12px]  bg-black text-white p-2 rounded-full ml-2">
          <HiArrowLongRight />
        </div>
        ) : (
          <div></div>
        )}
      </div>

    </div>
  );
};

export default Swipeleft2;
