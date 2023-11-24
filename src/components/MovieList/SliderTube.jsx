"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import VideoPlayer from "../VideoPlayer";

export default function SliderTube({ api }) {
  return (
    <section className="pb-8">
      <Swiper navigation pagination={{ type: "fraction" }} modules={[Navigation]} className="w-full" slidesPerView={1}>
        {api?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="">
              {item.key ? (
                <VideoPlayer youtubeId={item.key} />
              ) : item.backdrop_path ? (
                <Link href={`/movie/${item.id}`} key={index} className="cursor-pointer" passHref>
                  <div className="">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${item.backdrop_path}`} width={600} height={400} className="opacity-50 absolute z-[-1] block h-[20em] sm:h-[35em] w-full object-cover vid" alt="gamb" />
                    <div className="w-full pl-12 pt-4 sm:pt-12 sm:w-1/2">
                      <h1 className="text-2xl sm:text-5xl pb-2 text-white font-bold ">{item.title}</h1>

                      <h1 className="py-6 pr-4 text-lg sm:text-xl text-white ">{item.overview.slice(0, 150)}...</h1>
                      <side className="flex flex-row">
                        <button className="mr-4 bg-red-600 text-lg rounded-xl border text-color-primary border-color-primary p-2 bg-color-secondary">
                          <h1 className="text-xl sm:text-3xl text-white">{item.release_date.slice(0, 4)}</h1>
                        </button>

                        <button className="bg-red-600 text-lg rounded-xl border text-color-primary border-color-primary p-2 bg-color-secondary">
                          <h1 className="text-2xl sm:text-3xl text-white">{item.vote_average}</h1>
                        </button>
                      </side>
                    </div>
                  </div>
                </Link>
              ) : (
                <Image src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${item.file_path}`} width={600} height={400} alt="gamb" className="block h-[20em] sm:h-[35em] w-full object-cover" />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
