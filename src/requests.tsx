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
};

export const rowsData = [
  {
    id: 1,
    title: "NETFLIX ORIGINALS",
    fetchUrl: requests.fetchNetflixOriginals,
  },
  {
    id: 9,
    title: "DISNEY PlUS ORIGINALS",
    fetchUrl: requests.fetchDisneyPlusOriginals,
  },
  {
    id: 2,
    title: "Trending Now",
    fetchUrl: requests.fetchTrending,
  },
  {
    id: 3,
    title: "Top Rated",
    fetchUrl: requests.fetchTopRated,
  },
  {
    id: 4,
    title: "Action Movies",
    fetchUrl: requests.fetchActionMovies,
  },
  {
    id: 5,
    title: "Comedy Movies",
    fetchUrl: requests.fetchComedyMovies,
  },
  {
    id: 6,
    title: "Horror Movies",
    fetchUrl: requests.fetchHorrorMovies,
  },
  {
    id: 7,
    title: "Romance Movies",
    fetchUrl: requests.fetchRomanceMovies,
  },
  {
    id: 8,
    title: "Documentaries",
    fetchUrl: requests.fetchDocumentaries,
  },
];

export default requests;
