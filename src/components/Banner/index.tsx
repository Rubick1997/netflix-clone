import axios from "../../axios";
import React, { useEffect, useState } from "react";

import requests from "../../requests";
import styles from "./index.module.scss";
import { ItemType } from "../../types";

const Banner = () => {
  const [movie, setMovie] = useState<ItemType>();

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  const truncate = (string: string | undefined, n: number) => {
    if (string) {
      return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
  };

  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.bannerContents}>
        <h1 className={styles.bannerTitle}>{movie?.name || movie?.title}</h1>
        <div className={styles.bannerButtons}>
          <button className={styles.bannerButton}>Play</button>
          <button className={styles.bannerButton}>My List</button>
        </div>
        <h1 className={styles.bannerDescription}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className={styles.bannerFadeBottom} />
    </header>
  );
};

export default Banner;
