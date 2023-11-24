"use client";

import { useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Search = () => {
  const [popularMovies, setPopularMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const PopularMoviesList = () => {
    return popularMovies.map((movie, index) => (
      <div key={index}>
        <Link href={`/movie/${movie.id}`} key={index} className="cursor-pointer" passHref>
          <img src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${movie.poster_path}`} alt="gamb"></img>
        </Link>
      </div>
    ));
  };

  console.log(popularMovies);

  const searchMovie = async (q) => {
    const search = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/search/movie?query=${q}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
    return search.data;
  };

  const search = async (q) => {
    if (q.length > 0) {
      const query = await searchMovie(q);
      setPopularMovie(query.results);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    search(searchQuery);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center my-6">
        {/* <h1 className="text-2xl text-white mr-3">Search Movies</h1> */}

        <input placeholder="Cari Film" className="p-2 rounded-md mr-2" value={searchQuery} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        <button className="text-white bg-red-500 rounded-md px-4" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4 mb-8">
        <PopularMoviesList />
      </div>
    </div>
  );
};

export default Search;
