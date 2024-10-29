import Link from "next/link";
import React from "react";
import { FaFacebook ,FaInstagram,FaTwitter} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="w-full bg-[#F7F7F7] lg:px-[100px] md:px-[60px] px-[30px] py-[56px]">
      <div className="flex justify-between pb-[56px]">
        <div className="flex flex-col gap-3 ">
          <h1 className="font-bold text-[28px]  ">Panto</h1>
          <p className="sm:w-[300px] leading-7 text-[#1E1E1E] text-[15px]">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
        </div>
        <div className="md:flex md:flex-col gap-3 hidden">
          <h1 className="text-orange-500 tracking-wide font-medium">Services</h1>
          <Link href="#" className="text-[#1E1E1E] text-[15px]">Email Marketing</Link>
          <Link href="#" className="text-[#1E1E1E] text-[15px]">Campaigns</Link>
          <Link href="#" className="text-[#1E1E1E] text-[15px]">Branding</Link>
        </div>
        <div className="md:flex md:flex-col gap-3 hidden">
          <h1 className="text-orange-500 tracking-wide font-medium">Furniture</h1>
          <Link href="#" className="text-[#1E1E1E] text-[15px]">Beds</Link>
          <Link href="#" className="text-[#1E1E1E] text-[15px]">Chair</Link>
          <Link href="#" className="text-[#1E1E1E] text-[15px]">All</Link>
        </div>
        <div className="sm:flex flex-col gap-3  hidden">
          <h1 className="text-orange-500 tracking-wide font-medium">Follow Us</h1>
          <Link href="#">
            <div className="flex place-items-center gap-2">
              <FaFacebook />
              <p className="text-[#1E1E1E] text-[15px]">Facebook</p>
            </div>
          </Link>
          <Link href="#">
          <div className="flex place-items-center gap-2">
              <FaInstagram/>
              <p className="text-[#1E1E1E] text-[15px]">Instgram</p>
            </div></Link>
          <Link href="#">
          <div className="flex place-items-center gap-2">
              <FaTwitter />
              <p className="text-[#1E1E1E] text-[15px]">Twitter</p>
            </div>
            </Link>
        </div>
      </div>
      <div className="sm:hidden flex flex-col gap-3  justify-between pb-[20px] ">
          <h1 className="text-orange-500 tracking-wide font-medium">Follow Us</h1>
          <Link href="#">
            <div className="flex place-items-center gap-2">
              <FaFacebook />
              <p className="text-[#1E1E1E] text-[15px]">Facebook</p>
            </div>
          </Link>
          <Link href="#">
          <div className="flex place-items-center gap-2">
              <FaInstagram/>
              <p className="text-[#1E1E1E] text-[15px]">Instgram</p>
            </div></Link>
          <Link href="#">
          <div className="flex place-items-center gap-2">
              <FaTwitter />
              <p className="text-[#1E1E1E] text-[15px]">Twitter</p>
            </div>
            </Link>
        </div>
      <div className="sm:flex sm:flex-row flex flex-col gap-3 justify-between">
        <h1 className="text-[15px] text-[#1E2833] ">Copyright © 2021</h1>
        <div className="sm:flex sm:flex-row flex flex-col text-[15px]  text-[#1E1E1E] sm:gap-9 gap-3 ">
          <h1> Terms & Conditions</h1>
          <h1>Privacy Policy</h1>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
