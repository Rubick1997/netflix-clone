const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchDisneyPlusOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=2739`,
  fetchHuluCurrentStreams: `/discover/tv?api_key=${API_KEY}&with_networks=453`,
};

export const rowsData = [
  {
    id: 1,
    title: "NETFLIX ORIGINALS",
    fetchUrl: requests.fetchNetflixOriginals,
    media_type: "tv",
  },
  {
    id: 9,
    title: "DISNEY PlUS ORIGINALS",
    fetchUrl: requests.fetchDisneyPlusOriginals,
    media_type: "tv",
  },
  {
    id: 2,
    title: "Trending Now",
    fetchUrl: requests.fetchTrending,
    media_type: "",
  },
  {
    id: 3,
    title: "Top Rated",
    fetchUrl: requests.fetchTopRated,
    media_type: "movie",
  },
  {
    id: 4,
    title: "Action Movies",
    fetchUrl: requests.fetchActionMovies,
    media_type: "movie",
  },
  {
    id: 5,
    title: "Comedy Movies",
    fetchUrl: requests.fetchComedyMovies,
    media_type: "movie",
  },
  {
    id: 6,
    title: "Horror Movies",
    fetchUrl: requests.fetchHorrorMovies,
    media_type: "movie",
  },
  {
    id: 7,
    title: "Romance Movies",
    fetchUrl: requests.fetchRomanceMovies,
    media_type: "movie",
  },
  {
    id: 8,
    title: "Documentaries",
    fetchUrl: requests.fetchDocumentaries,
    media_type: "movie",
  },
  {
    id: 10,
    title: "Hulu Current Streams",
    fetchUrl: requests.fetchHuluCurrentStreams,
    media_type: "movie",
  },

];

export default requests;
