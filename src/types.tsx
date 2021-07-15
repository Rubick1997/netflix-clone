export type GenresList = {
  type: string;
  selectedGenres: GenresType[];
  genres: GenresType[];
  setGenres: React.Dispatch<React.SetStateAction<GenresType[]>>;
  setSelectedGenres: React.Dispatch<React.SetStateAction<GenresType[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export type ContentType = {
  id: number;
  media_type: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  title: string;
  name: string;
  vote_average: number;
  backdrop_path: string;
};

export type ItemType = {
  poster_path: string;
  release_date: string;
  first_air_date: string;
  title: string;
  name: string;
  tagline: string;
  overview: string;
  backdrop_path: string;
};

export type RowType = {
  title: string;
  fetchUrl: string;
};

export type RowItemType = {
  id: number;
  vote_average: number;
  poster_path: string;
  title: string;
  name: string;
};

export type GenresType = { id: number; name: string };

export type CarouselType = {
  media_type: string;
  id: number;
};

export type CreditType = {
  profile_path: string;
  name: string;
};
