"use client";
import React from "react";
import TestimonialCard from "./testimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Swiperright2 from "./swiperight2";
import Swipeleft2 from "./swipeleft2";

const reviews = [
  {
    id: 1,
    bg: "/card_bg.png",
    profile: "/profile.jpg",
    title: "Bang Upin",
    subTitle: "Pedagang Asongan",
    review:
      "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
    rating: 4,
  },
  {
    id: 2,
    bg: "/bg3.png",
    profile: "/profile.jpg",
    title: "Ibuk Sukijan",
    subTitle: "Ibu Rumah Tangga",
    review:
      "“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“",
    rating: 3.5,
  },
  {
    id: 3,
    bg: "/bg3.png",
    profile: "/profile.jpg",
    title: "Mpok Ina",
    subTitle: "Karyawan Swasta",
    review:
      "“Sangat terjangkau untuk kantong saya yang “",
    rating: 4,
  },
  {
    id: 4,
    bg: "/bg2.png",
    profile: "/profile.jpg",
    title: "Bang Upin",
    subTitle: "Pedagang Asongan",
    review:
      "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
    rating: 5,
  },
];
const testimonialsSections = () => {
  return (
    <div className="min-h-screen bg-white place-items-center place-content-center">
      <h1 className="text-orange-500 uppercase tracking-wide font-semibold lg:text-[14px] sm:text-[13px]">
        Testimonials
      </h1>
      <h1 className="font-bold lg:text-[42px]  md:text-[40px] sm:text-[30px] text-[25px] ">
        Our Client Reviews
      </h1>
      <div className="mt-5 slider-container w-full flex place-items-center place-content-center  max-w-screen xl:px-[100px] lg:px-[50px]  md:px-[10px] sm:px-[30px] px-[10px] ">
        <Swiperright2 number={reviews.length} />
        <Swiper
          className="w-full  "
          modules={[Navigation, Pagination]}
          centeredSlides={true}
          navigation={{
            prevEl: ".custom-swiper-button-prev",
            nextEl: ".custom-swiper-button-next",
          }}
          pagination={{ clickable: true, el: null }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2,spaceBetween: 20  },
            768: { slidesPerView: 2 ,spaceBetween:20},
            1024: { slidesPerView: 3 ,spaceBetween: 20 },
          }}
        >
          {reviews.map((review: any) => (
            <SwiperSlide key={review.id}>
              <TestimonialCard
                bg={review.bg}
                profile={review.profile}
                title={review.title}
                subTitle={review.subTitle}
                review={review.review}
                rating={review.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swipeleft2 number={reviews.length} />
      </div>
    </div>
  );
};

export default testimonialsSections;
