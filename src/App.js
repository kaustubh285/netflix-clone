import React from "react";
import requests from "./requests";
import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";

function App() {
  return (
    <div className='app'>
      <Banner />
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isPoster
      />
      <Row title='Trending' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action' fetchUrl={requests.fetchAction} />
      <Row title='Comedy' fetchUrl={requests.fetchComedy} />
      <Row title='Horror' fetchUrl={requests.fetchHorror} />
      <Row title='Romance' fetchUrl={requests.fetchRomance} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
