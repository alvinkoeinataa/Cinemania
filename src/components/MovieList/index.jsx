// components/MovieList.js
import Link from "next/link";
import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-5 p-4 ">
      {movies.map((movie, index) => (
        <div key={index}>
          <Link href={`/movie/${movie.id}`}>
            <div className="">
              <img src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${movie.poster_path}`} className="block h-full w-full object-cover mr-2" />
              <h1>{movie.title}</h1>
              <h1>{movie.release_date}</h1>
              <h1>{movie.vote_average}</h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

{
  /* <div className="grid grid-cols-5 p-4 ">
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
</div>; */
}
