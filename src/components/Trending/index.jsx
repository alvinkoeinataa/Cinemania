"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
// import { apiLibs } from "@/libs/apiLibs";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [now, setNow] = useState([]);

  const Trend = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results.slice(0, 5));
      });
  };

  const NowPlaying = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/now_playing`, {
        params: {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setNow(response.data.results.slice(0, 5));
      });
  };

  useEffect(() => {
    Trend();
    NowPlaying();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-5 p-4 ">
        {movies.map((result, index) => (
          <Link href={`/movie/${result.id}`} key={index}>
            <div className="">
              <img src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${result.poster_path}`} className="w-[200px] h-[300px] " />
              <h1>{result.title}</h1>
              <h1>{result.release_date}</h1>
              <h1>{result.vote_average}</h1>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-5 p-4 ">
        {now.map((result, index) => (
          <Link href={`/movie/${result.id}`} key={index}>
            <div className="">
              <img src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${result.poster_path}`} className="w-[200px] h-[300px] " />
              <h1>{result.title}</h1>
              <h1>{result.release_date}</h1>
              <h1>{result.vote_average}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
