import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const imgUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isPoster }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

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
              onClick={() => handleClick(movie)}
              src={`${imgUrl}${
                isPoster ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie?.name || movie?.title}
            />
          </div>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
