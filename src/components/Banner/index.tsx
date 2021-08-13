import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { Button, IconButton, withStyles } from "@material-ui/core";
import { Add, PlayArrow } from "@material-ui/icons";

import requests from "../../requests";
import styles from "./index.module.scss";
import { ItemType } from "../../types";

const PlayButton = withStyles({
  root: {
    borderRadius: 4,
    padding: "0px 24px",
    marginRight: 22,
    height: 56,
    background: "rgba(0,0,0,0.3)",
    border: "1px solid rgb(249,249,249)",
    color: "rgb(249,249,249)",
  },
})(Button);

const AddButton = withStyles({
  root: {
    borderRadius: "50%",
    height: 44,
    width: 44,
    border: "2px solid white",
    backgroundColor: "rgba(0,0,0,0.6)",
    marginRight: 16,
  },
})(IconButton);

const Banner = () => {
  const [movie, setMovie] = useState<ItemType>();

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
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
          <PlayButton
            variant="contained"
            startIcon={<PlayArrow style={{ fontSize: 30 }} />}
          >
            <div style={{ letterSpacing: 1.8, fontSize: 15 }}>Play</div>
          </PlayButton>
          <AddButton>
            <Add
              style={{
                fontSize: 25,
                color: "white",
              }}
            />
          </AddButton>
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
