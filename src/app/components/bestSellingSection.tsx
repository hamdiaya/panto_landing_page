"use client";
import React, { useState } from "react";
import ProductCard from "./productCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Swiperright from "./swiperright";
import Swipeleft from "./swipeleft";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
}

interface ProductsType {
  [key: string]: Product[];
}
const products: ProductsType = {
  Chair: [
    {
      id: 1,
      name: "Sakarias Armchair",
      price: 392,
      imageUrl: "/img1.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Baltsar Chair",
      price: 299,
      imageUrl: "/img2.png",
      rating: 4,
    },
    {
      id: 3,
      name: "Anjay Chair",
      price: 519,
      imageUrl: "/img3.png",
      rating: 5,
    },
    {
      id: 4,
      name: "Nyantuy Chair",
      price: 921,
      imageUrl: "/img4.png",
      rating: 4,
    },
    {
      id: 5,
      name: "Nyantuy Chair",
      price: 921,
      imageUrl: "/img4.png",
      rating: 4,
    },
    {
      id: 6,
      name: "Nyantuy Chair",
      price: 921,
      imageUrl: "/img4.png",
      rating: 4,
    },
  ],
  Beds: [
    {
      id: 1,
      name: "Comfort Bed",
      price: 899,
      imageUrl: "/img1.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Relax Bed",
      price: 1100,
      imageUrl: "/img2.png",
      rating: 4,
    },
    {
      id: 3,
      name: "Nyantuy Chair",
      price: 921,
      imageUrl: "/img4.png",
      rating: 4,
    },
  ],
  Sofa: [
    {
      id: 1,
      name: "Luxury Sofa",
      price: 1200,
      imageUrl: "/img1.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Simple Sofa",
      price: 800,
      imageUrl: "/img2.png",
      rating: 4,
    },
  ],
  Lamp: [
    {
      id: 1,
      name: "Modern Lamp",
      price: 150,
      imageUrl: "/img1.png",
      rating: 4,
    },
  ],
};

const bestSellingSection = () => {
  const [activeCategory, setActiveCategory] = useState("Chair");

  const categories = Object.keys(products);
  return (
    <div className=" bg-[#F7F7F7]  mt-5 mx-auto flex flex-col place-items-center  ">
      <div className="font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center pt-10">
        Best Selling Product
      </div>
      <div className=" bg-[#EEEEEE] text-black w-fit flex rounded-full mt-5 mb-5 ">
        <div className="p-[6px]  ">
          {categories.map((category) => (
            <button
              onClick={() => setActiveCategory(category)}
              className={`sm:px-[17px] sm:py-[7px] px-[10px] py-[5px]  text-[14px] md:text-base rounded-full ${
                activeCategory === category ? "bg-white" : "bg-[#EEEEEE]"
              } font-medium`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="slider-container  flex place-items-center  w-full max-w-screen xl:px-[100px] lg:px-[50px]  md:px-[10px] sm:px-[30px] px-[10px] pb-[60px]">
        <Swiperright number={products[activeCategory].length} />
        <Swiper
          className="w-full"
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          navigation={{
            prevEl: ".custom-swiper-button-prev",
            nextEl: ".custom-swiper-button-next",
          }}
          pagination={{ clickable: true, el: null }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {products[activeCategory].map((product: Product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                img={product.imageUrl}
                title={product.name}
                category={activeCategory}
                rating={product.rating}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swipeleft number={products[activeCategory].length} />
      </div>
    </div>
  );
};

export default bestSellingSection;
