import React from "react";
import Link from "next/link";
import { GiShoppingBag } from "react-icons/gi";
import MobileBurgerMenu from "./mobileBurgerMenu";
const navBar = () => {
  return (
    <div className="text-white flex justify-between md:pt-[40px] md:px-[80px] pt-[20px] px-[40px] ">
      <h1 className="font-bold lg:text-3xl text-2xl">Panto</h1>
      <div className="sm:flex md:gap-16 gap-6 place-items-center text-lg font-medium hidden ">
        <select className="bg-transparent text-white  rounded-md p-2  focus:outline-none  focus:ring-transparent">
          <option className="bg-gray-800 text-white " value="Furniture">
            Furniture
          </option>
          <option className="bg-gray-800 text-white" value="Decor">
            Decor
          </option>
          <option className="bg-gray-800 text-white" value="Lighting">
            Lighting
          </option>
        </select>

        <Link href="#">Shop</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Contact</Link>
      </div>

      <div className="text-2xl flex gap-3 place-items-center">
        <MobileBurgerMenu />
        <div className="relative">
          <GiShoppingBag />
          <div className="bg-orange-500 text-[15px] w-fit h-fit rounded-full px-1 absolute top-[-15px] right-[-5px] ">
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default navBar;
