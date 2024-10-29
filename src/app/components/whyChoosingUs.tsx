import React from 'react'
import WhyChoosingUsCard from './whyChoosingUsCard'

const whyChoosingUs = () => {
  return (
    <div>
        <div className='mt-5 mb-5 font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl md:px-[70px] px-[30px] '>Why Choosing Us ?</div>
    <div className=' sm:flex-row flex flex-col gap-7 lg:px-[80px] md:px-[60px] sm:px-[40px] px-[50px]'>
    <WhyChoosingUsCard title="Luxury facilities" description="The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."/>
    <WhyChoosingUsCard title="Affordable Price" description="You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."/>
    <WhyChoosingUsCard title="Many Choices" description="We provide many unique work space choices so that you can choose the workspace to your liking."/>
    </div>

    </div>
  )
}

export default whyChoosingUs