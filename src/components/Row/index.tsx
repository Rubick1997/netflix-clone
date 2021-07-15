import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "../../axios";

import styles from "./index.module.scss";
import { ContentType, RowType } from "../../types";

import RowItem from "../RowItem";

const Row: FunctionComponent<RowType> = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState<ContentType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.rowPosters}>
        {movies.map((movie) => (
          <RowItem
            vote_average={movie.vote_average}
            name={movie.name}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
