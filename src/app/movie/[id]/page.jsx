import { fetchMovies } from "@/libs/apiLibs";
import Image from "next/image";
import React from "react";

const Detail = async ({ params: { id } }) => {
  const movie = await fetchMovies(`movie/${id}`);
  console.log(movie);

  return (
    <div className="pt-4 px-4 mb-4">
      {/* <img src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${movie.poster_path}`} className="block h-full w-full object-cover mr-2" />
      <h1>{movie.title}</h1>
      <h1>{movie.release_date}</h1>
      <h1>{movie.vote_average}</h1> */}
      <h1 className="ml-5 text-3xl text-color-primary"></h1>
    </div>
  );
};

export default Detail;

// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Router } from "next/router";
// import axios from "axios";

// const MoviePage = () => {
//   const [movies, setMovies] = useState([]);
//   const router = useRouter();
//   const { id } = router.query;

//   const fetchData = () => {
//     axios
//       .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/${id}`, {
//         params: {
//           api_key: process.env.NEXT_PUBLIC_API_KEY,
//         },
//       })
//       .then((response) => {
//         setMovies(response.data.results);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Movie Details</h1>
//       <p>Movie ID: {movies.id}</p>
//       {/* Render komponen MovieDetails atau yang sesuai */}
//     </div>
//   );
// };

// export default MoviePage;
