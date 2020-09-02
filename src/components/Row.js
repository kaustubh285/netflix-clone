import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Alert from "@material-ui/lab/Alert";

const imgUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isPoster }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [trailerNotFound, setTrailerNotFound] = useState(false);

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
    if (trailerUrl || trailerNotFound) {
      setTrailerUrl("");
      setTrailerNotFound(false);
    } else {
      movieTrailer(movie?.name || movie?.title || movie.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          setTrailerNotFound(false);
        })
        .catch((error) => {
          setTrailerNotFound(true);
          console.log(error);
        });
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
      {trailerNotFound && (
        <Alert severity='error'>Sorry! Trailer not found</Alert>
      )}
    </div>
  );
}

export default Row;
