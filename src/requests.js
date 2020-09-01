const API_KEY = "0d3ca7edae2d9cb14c86ce991530aee6";

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  //   fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  //   fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  //   fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  //   fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  //   fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};
