"use client";
import Header from "@/components/MovieList/Header";
import SliderData from "@/components/MovieList/SliderData";
import SliderPerson from "@/components/MovieList/SliderPerson";
import SliderTube from "@/components/MovieList/SliderTube";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

const Person = ({ params: { id } }) => {
  const [film, setFilm] = useState([]);
  const [credit, setCredit] = useState([]);

  const fetchData = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/person/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
    const url2 = `${process.env.NEXT_PUBLIC_API_BASE_URL}/person/${id}/movie_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const response2 = await fetch(url2);
      const data2 = await response2.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch data");
      }

      setFilm(data);
      setCredit(data2.cast);
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
        <header className="grid md:grid-cols-2 gap-2 grid-cols-1 my-8">
          <div className="pl-0 sm:pl-12 flex justify-center">
            <img src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}/${film.profile_path}`} className="block h-[28em] sm:h-[36em] w-[30em]  object-cover px-5 mb-6" />
          </div>
          <div className="px-4 mr-8">
            <h1 className="mb-12 md:text-4xl sm:text-2xl text-2xl text-white">
              {film.name} ({film.birthday ? film.birthday.slice(0, 4) : null})
            </h1>

            <div>
              <h1 className="text-xl text-white">{film.biography ? film.biography.slice(0, 500) + "..." : "Biography not available"}</h1>
            </div>

            <h1 className="sm:text-xl text-md text-white">{film.overview}</h1>
          </div>
        </header>

        <Header title="Medias" />
        <SliderPerson api={credit} />
      </div>
    </>
  );
};

export default Person;
