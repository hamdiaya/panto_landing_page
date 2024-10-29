import Image from "next/image";
import React from "react";
import { Rating } from "primereact/rating";
import { IoIosAddCircle } from "react-icons/io";
const ProductCard = ({
  img,
  category,
  title,
  rating,
  price,
}: {
  img: string;
  category: string;
  title: string;
  rating: number;
  price: number;
}) => {
  return (
    <div className=" w-full   sm:px-0 h-full  ">
      <div className="bg-[#FAFAFA] rounded-t-[20px] flex  place-content-center place-items-center h-[300px]">
       <div>
       <Image src={img} alt="product" width={217} height={255} className="lg:block hidden pt-2" />
        <Image src={img} alt="product" width={190} height={220} className="lg:hidden md:block hidden pt-2" />
        <Image src={img} alt="product" width={160} height={200} className="lg:hidden md:hidden block pt-3" />
       </div>
      </div>
      <div className=" relative bg-white md:px-[21px] px-[17px] pt-3 rounded-b-lg h-[170px] ">
        <div >
          <div className="text-gray-500 font-medium text-[17px]">
            {category}
          </div>
          <div className="font-bold md:text-[21px] text-[19px] ">{title}</div>
          <Rating
            value={rating}
            cancel={false}
            readOnly
            className="text-yellow-500 flex gap-1"
          />
        </div>
       <div className="absolute bottom-0 right-0 w-full md:px-[21px] px-[17px]">
       <div className="flex items-center justify-between text-[21px] font-bold pb-3 ">
          <div>{price}$</div>
          <button className="text-4xl">
            {" "}
            <IoIosAddCircle />
          </button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default ProductCard;
