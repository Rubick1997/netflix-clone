import React, { FunctionComponent } from "react";
import styles from "./index.module.scss";
import { RowItemType } from "../../types";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";

const RowItem: FunctionComponent<RowItemType> = ({
  vote_average,
  poster_path,
  name,
  title,
  id,
  media_type,
}) => {
  const base_url = `https://image.tmdb.org/t/p/original/`;
  return (
    <Link to={`/details/${media_type}/${id}`}>
      <div className={styles.rowCard} key={id}>
        <Badge
          badgeContent={`${vote_average * 10}%`}
          color={vote_average > 6 ? "primary" : "secondary"}
          style={{ zIndex: 1 }}
        />
        <img
          className={styles.rowPoster}
          src={`${base_url}/${poster_path}`}
          alt={`${name || title} poster`}
        />
      </div>
    </Link>
  );
};

export default RowItem;
