"use client";
import Header from "@/components/MovieList/Header";
import SliderData from "@/components/MovieList/SliderData";
import SliderTube from "@/components/MovieList/SliderTube";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

const Detail = ({ params: { id } }) => {
  const [film, setFilm] = useState([]);
  const [gen, setGen] = useState([]);
  const [castData, setCastData] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [videoData, setVideoData] = useState([]);

  const fetchData = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
    const casting = `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
    const images = `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/${id}/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
    const videos = `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      const response2 = await fetch(casting);
      const data2 = await response2.json();

      const response3 = await fetch(images);
      const data3 = await response3.json();

      const response4 = await fetch(videos);
      const data4 = await response4.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch data");
      }

      setFilm(data);
      setGen(data.genres.slice(0, 2));
      setCastData(data2.cast.slice(0, 15));
      setImgData(data3.backdrops.slice(0, 10));
      setVideoData(data4.results.slice(0, 3));
      // console.log(data3);
      // console.log(data4.results[0]);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="">
        <div className="">
          <img src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${film.backdrop_path}`} className="absolute w-full h-[65em] z-[-1] object-cover opacity-50" />
        </div>
        <header className="grid md:grid-cols-2 gap-2 grid-cols-1 mb-12">
          <div className="flex justify-center mt-8">
            <img src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${film.poster_path}`} className="block h-[28em] sm:h-[36em] w-[30em]  object-cover px-5 mb-6" />
          </div>
          <div className="px-4 mt-8">
            <h1 className="md:text-4xl sm:text-2xl text-2xl text-white font-bold">
              {film.title} ({film.release_date ? film.release_date.slice(0, 4) : ""})
            </h1>

            <div className="flex flex-row my-6">
              <button className="bg-black mr-6 text-lg rounded-full border text-color-primary border-color-primary p-3 bg-color-secondary">
                <h1 className="text-xl text-white ">{film.vote_average} </h1>
              </button>

              {gen.map((genre, index) => (
                <button key={index} className="mr-2 text-lg rounded-lg border text-white border-color-primary p-0 sm:p-2 bg-blue-900">
                  <h1 className="text-white text-md sm:text-xl">{genre.name}</h1>
                </button>
              ))}
            </div>

            <h1 className="py-5 text-xl text-white">{film.runtime} minutes</h1>

            <h1 className="sm:text-xl text-md text-white">{film.overview}</h1>
          </div>
        </header>

        <Header title="Cast" />
        <SliderData api={castData} className="relative" />

        <Header title="Posters" />
        <SliderTube api={imgData} />

        <Header title="Videos" />
        <SliderTube api={videoData} />
        {/* <VideoPlayer youtubeId={videoData.key} /> */}
      </div>
    </>
  );
};

export default Detail;
