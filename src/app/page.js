"use client";
import { useEffect, useState } from "react";
import { fetchMovies } from "@/libs/apiLibs";
import MovieList from "@/components/MovieList";
import Slider from "@/components/MovieList/Slider";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcomning] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [rate, setTopRate] = useState([]);

  // const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const popularData = await fetchMovies("movie/popular");
        setPopular(popularData.slice(0, 5));

        const upcomingData = await fetchMovies("movie/upcoming");
        setUpcomning(upcomingData.slice(0, 5));

        const setPopularTVData = await fetchMovies("tv/popular");
        setPopularTV(setPopularTVData.slice(0, 5));

        const setTopRateData = await fetchMovies("tv/top_rated");
        setTopRate(setTopRateData.slice(0, 5));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="px-8 pt-20">
        {/* <h1>Now Playing Movies</h1>
   <MovieList movies={nowPlayingMovies} /> */}
        <h1 className="text-white text-2xl">Popular Movies</h1>
        <MovieList movies={popular} />

        <h1>Upcoming Movies</h1>
        <MovieList movies={upcoming} />

        <h1>Popular TV Series</h1>
        <MovieList movies={popularTV} />

        <h1>Top Rated TV Series</h1>
        <MovieList movies={rate} />

        {/* <Slider api={popularTV} />
   <Slider api={rate} /> */}
      </div>
    </div>
  );
}
