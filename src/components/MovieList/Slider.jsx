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
    <section className="pb-6 mb-8">
      <Swiper
        navigation
        pagination={{ type: "fraction" }}
        modules={[Navigation]}
        className="w-full"
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
            <div className="mr-1">
              {movie.title ? (
                <Link href={`/movie/${movie.id}`} key={index} className="cursor-pointer" passHref>
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${movie.poster_path}`} width={600} height={350} alt="gamb" className="block  kw-full object-cover mr-2 " />
                </Link>
              ) : (
                <Link href={`/tv/${movie.id}`} key={index} className="cursor-pointer" passHref>
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${movie.poster_path}`} width={600} height={350} alt="gamb" className="block  w-full object-cover mr-2 " />
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
