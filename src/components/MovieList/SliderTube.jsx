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
    <section className="pb-12">
      <div className="container">
        <Swiper navigation pagination={{ type: "fraction" }} modules={[Navigation]} className="h-120 w-full" slidesPerView={1}>
          {api?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center ">
                {item.key ? (
                  <VideoPlayer youtubeId={item.key} />
                ) : item.backdrop_path ? (
                  <Link href={`/movie/${item.id}`} key={index} className="cursor-pointer" passHref>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${item.backdrop_path}`} width={600} height={400} alt="gamb" className="block h-[40em] w-full object-cover opacity-90" />
                  </Link>
                ) : (
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${item.file_path}`} width={600} height={400} alt="gamb" className="block h-[40em] w-full object-cover opacity-90" />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
