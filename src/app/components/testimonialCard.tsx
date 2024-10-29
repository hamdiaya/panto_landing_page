import React from "react";
import Image from "next/image";
import { Rating } from "primereact/rating";

const TestimonialCard = ({
  bg,
  profile,
  title,
  subTitle,
  review,
  rating,
}: {
  bg: string;
  profile: string;
  title: string;
  subTitle: string;
  review: string;
  rating: number;
}) => {
  return (
    <div className="  relative place-content-center sm:w-fit ">
      <div>
        <Image
          src={bg}
          alt="product"
          width={370}
          height={476}
          className="xl:block hidden "
        />
        <Image
          src="/card_bg.png"
          alt="product"
          width={300}
          height={390}
          className="xl:hidden lg:block hidden "
        />
        <Image
          src="/card_bg.png"
          alt="product"
          width={290}
          height={320}
          className="lg:hidden md:block hidden "
        />
        <Image
          src="/card_bg.png"
          alt="product"
          width={250}
          height={260}
          className="lg:hidden md:hidden sm:block hidden"
        />
        <div className="sm:hidden block w-full h-[400px] relative  ">
          <Image src="/card_bg.png" alt="product" fill={true} />
        </div>
      </div>
      <div className="absolute w-full sm:bottom-5 bottom-2 sm:px-5 px-2 ">
        <div className=" relative bg-white w-full place-items-center px-[10px] sm:px-[10px] md:px-[20px] pb-5 rounded-[18.12px] ">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white pt-2 px-3 rounded-t-full">
            <div className="sm:w-[45px] sm:h-[45px] h-[50px] w-[50px] md:w-[50px] md:h-[50px] relative">
              <Image
                src={profile}
                alt="profile"
                fill={true}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="place-items-center pt-6">
            <h1 className="font-bold lg:text-[18px] md:text-[16px] text-[15px] lg:pt-2 pt-1">
              {title}
            </h1>
            <h1 className="lg:text-[12px] text-[11px]  text-[#1E1E1E]">
             {subTitle}
            </h1>
            <p className="min-h-[100px]  lg:text-[14px] md:text-[13px] text-[12px] text-[#1E1E1E] text-center lg:pt-4 lg:pb-3 pt-3 pb-2">
              {review}
            </p>
            <Rating
              value={rating}
              cancel={false}
              readOnly
              className="text-yellow-500 flex gap-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
