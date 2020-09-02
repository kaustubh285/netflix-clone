import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "../axios";
import { Button } from "@material-ui/core";
import TextTruncate from "react-text-truncate";
import "./banner.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Banner() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);
  return (
    <header
      className='banner'
      style={{
        minHeight: 300,
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "top",
      }}>
      <div className='banner__contents'>
        <h2 className='banner__title'>
          {movies?.title || movies?.name || movies?.original_name}
        </h2>

        <div className='banner__buttons'>
          <Button
            className='banner__button'
            variant='contained'
            color='default'>
            <PlayArrowIcon />
            <span style={{ paddingLeft: 5 }}> Play </span>
          </Button>
          <Button
            className='banner__button info'
            variant='contained'
            color='default'
            style={{ backgroundColor: "rgba(89,88,89,0.9", color: "white" }}>
            <InfoOutlinedIcon />
            <span style={{ paddingLeft: 5 }}> more info</span>
          </Button>
        </div>

        <div className='banner__description'>
          <TextTruncate
            line={4}
            element='p'
            truncateText='...'
            text={movies?.overview}
          />
        </div>
      </div>
      <div className='banner--fadeBottom' />
    </header>
  );
}

export default Banner;
