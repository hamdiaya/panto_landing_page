import Link from 'next/link';
import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

const WhyChoosingUsCard = ({title,description}:{title:string,description:string}) => {
  return (
    <div className='relative flex flex-col ' >
        <div className='lg:text-[24px] sm:text-[20px] font-bold mb-[20px] ' >
      {title}
        </div>
        <p className=' text-justify lg:text-base sm:text-[15px] text-gray-400 mb-[25px]'>{description}</p>
     
       <div>
       <Link href="#" className='absolute  flex place-items-center gap-3  lg:text-[14px] sm:text-[13px] text-orange-500 font-medium bottom-0 ' >
        <h1>
        More Info
        </h1>
        <HiArrowLongRight />
        </Link>
       </div>
      
   
    </div>
  )
}

export default WhyChoosingUsCard