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
  console.log(api);
  return (
    <section className="pb-8">
      <Swiper navigation pagination={{ type: "fraction" }} modules={[Navigation]} className="w-full" slidesPerView={1}>
        {api?.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              {item.key ? (
                <VideoPlayer youtubeId={item.key} />
              ) : item.backdrop_path ? (
                <Link href={`/movie/${item.id}`} key={index} className="cursor-pointer" passHref>
                  <div className="lala">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${item.backdrop_path}`} width={600} height={400} className="block h-[20em] sm:h-[35em] w-full object-cover vid" alt="gamb" />
                    {/* <div className="">
                      <h1 className="text-5xl ">{item.title}</h1>
                      <h1 className="text-5xl ">{item.vote_average}</h1>
                    </div> */}
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
