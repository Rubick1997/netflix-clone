import React, { useEffect, useState } from "react";
import { Button, IconButton, withStyles } from "@material-ui/core";
import { Add, People, PlayArrow } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./index.module.scss";
import { getYear } from "../../helpers";
import { ContentType, DetailsType } from "../../types";

const PlayButton = withStyles({
  root: {
    borderRadius: 4,
    padding: "0px 24px",
    marginRight: 22,
    height: 56,
    background: "rgb(249, 249, 249)",
    border: "none",
  },
})(Button);

const TrailerButton = withStyles({
  root: {
    background: "rgba(0,0,0,0.3)",
    border: "1px solid rgb(249,249,249)",
    color: "rgb(249,249,249)",
  },
})(PlayButton);

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

const GroupWatchButton = withStyles({
  root: {
    background: "rgb(0, 0, 0)",
  },
})(AddButton);

const Details = () => {
  const { id, media_type } = useParams();
  const [currentDetails, setCurrentDetails] = useState<DetailsType>();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCurrentDetails(data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      {currentDetails && (
        <>
          <div className={styles.background}>
            <img
              src={
                currentDetails?.backdrop_path
                  ? `https://image.tmdb.org/t/p/w1280/${currentDetails?.backdrop_path}`
                  : "https://www.movienewz.com/img/films/poster-holder.jpg"
              }
              alt={`${
                currentDetails?.name || currentDetails?.title
              } background`}
            />
          </div>
          <div className={styles.imgTitle}>
            <img
              src={
                currentDetails?.backdrop_path
                  ? `https://image.tmdb.org/t/p/w342/${currentDetails?.poster_path}`
                  : "https://www.movienewz.com/img/films/poster-holder.jpg"
              }
              alt={`${
                currentDetails?.name || currentDetails?.title
              } background`}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.subTitle}>
              {getYear(
                currentDetails?.release_date || currentDetails?.first_air_date
              )}
              • {currentDetails?.runtime || currentDetails?.episode_run_time[0]}
              m •
              {currentDetails?.genres.map((item) => (
                <span>{item.name},</span>
              ))}
            </div>
            <div className={styles.description}>{currentDetails?.overview}</div>
          </div>
          <div className={styles.controls}>
            <PlayButton
              variant="contained"
              startIcon={<PlayArrow style={{ fontSize: 30 }} />}
            >
              <div style={{ letterSpacing: 1.8, fontSize: 15 }}>Play</div>
            </PlayButton>
            <TrailerButton
              variant="outlined"
              startIcon={<PlayArrow style={{ fontSize: 30, fill: "white" }} />}
            >
              <div style={{ letterSpacing: 1.8, fontSize: 15 }}>Trailer</div>
            </TrailerButton>
            <AddButton>
              <Add
                style={{
                  fontSize: 25,
                  color: "white",
                }}
              />
            </AddButton>
            <GroupWatchButton>
              <People
                style={{
                  fontSize: 25,
                  color: "white",
                }}
              />
            </GroupWatchButton>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
