import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./row.css";

const imgUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isPoster }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => (
          <div
            className={`row__poster ${isPoster && "netflix_og_holder"} `}
            key={movie.id}>
            <img
              className={`row_img ${isPoster && "netflix_ogs"} `}
              src={`${imgUrl}${
                isPoster ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie?.name || movie?.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
