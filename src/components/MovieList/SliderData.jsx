"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function SliderData({ api }) {
  return (
    <section className="pb-12">
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation]}
          className="h-96 w-full"
          slidesPerView={5}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },

            480: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 3,
            },

            800: {
              slidesPerView: 4,
            },

            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {api?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col h-full w-full items-center justify-center p-1">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${item.profile_path || item.file_path}`} width={600} height={350} alt="gamb" className="block h-full w-full object-cover mr-1" />
                <h1 className="text-white text-lg">{item?.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
