"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function Slider({ api }) {
  return (
    <section className="pb-12">
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation]}
          onSwiper={(swiper) => console.log(swiper)}
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
          {api?.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center p-1">
                <Link href={`/movie/${movie.id}`} key={index} className="cursor-pointer" passHref>
                  <img src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${movie.poster_path}`} className="block h-full w-full object-cover mr-2 " />
                  <h1>{movie.title}</h1>
                  <h1>{movie.release_date}</h1>
                  <h1>{movie.vote_average}</h1>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
