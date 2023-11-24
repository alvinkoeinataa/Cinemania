"use client";
import { useEffect, useState } from "react";
import { fetchMovies } from "@/libs/apiLibs";
import Slider from "@/components/MovieList/Slider";
import Navbar from "@/components/Navbar";
import SliderTube from "@/components/MovieList/SliderTube";

export default function Home() {
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcomning] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [rate, setTopRate] = useState([]);
  const [discover, setDiscover] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const popularData = await fetchMovies("movie/popular");
        setPopular(popularData.slice(0, 20));

        const upcomingData = await fetchMovies("movie/upcoming");
        setUpcomning(upcomingData.slice(0, 20));

        const setPopularTVData = await fetchMovies("tv/popular");
        setPopularTV(setPopularTVData.slice(0, 25));

        const setTopRateData = await fetchMovies("tv/top_rated");
        setTopRate(setTopRateData.slice(0, 25));

        const discoverData = await fetchMovies("discover/movie");
        setDiscover(discoverData.slice(0, 20));

        const nowData = await fetchMovies("movie/now_playing");
        setNowPlaying(nowData.slice(0, 20));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <SliderTube api={discover} />
        <h1 className="text-white text-2xl">Popular Movies</h1>
        <Slider api={popular} />

        <h1 className="text-white text-2xl">Upcoming Movies</h1>
        <Slider api={upcoming} />

        <h1 className="text-white text-2xl">Popular TV Series</h1>
        <Slider api={popularTV} />

        <h1 className="text-white text-2xl">Top Rated TV Series</h1>
        <Slider api={rate} />

        <h1 className="text-white text-2xl">Now Playing Movie</h1>
        <Slider api={nowPlaying} />
      </div>
    </>
  );
}
