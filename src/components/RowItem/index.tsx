import React, { FunctionComponent } from "react";
import styles from "./index.module.scss";
import { RowItemType } from "../../types";
import { Badge } from "@material-ui/core";

const RowItem: FunctionComponent<RowItemType> = ({
  vote_average,
  poster_path,
  name,
  title,
}) => {
  const base_url = `https://image.tmdb.org/t/p/original/`;
  return (
    <div className={styles.rowCard}>
      <Badge
        badgeContent={`${vote_average * 10}%`}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className={styles.rowPoster}
        src={`${base_url}/${poster_path}`}
        alt={`${name || title} poster`}
      />
    </div>
  );
};

export default RowItem;
