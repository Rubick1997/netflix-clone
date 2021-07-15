import React from "react";
import styles from "./index.module.scss";

const Banner = () => {
  const truncate = (string: string, n: number) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://i.ytimg.com/vi/N-K7kH6JgbM/maxresdefault.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.bannerContents}>
        <h1 className={styles.bannerTitle}> Avatar:The Last Air bender</h1>
        <div className={styles.bannerButtons}>
          <button className={styles.bannerButton}>Play</button>
          <button className={styles.bannerButton}>My List</button>
        </div>
        <h1 className={styles.bannerDescription}>
          {truncate("This is description", 150)}
        </h1>
      </div>
      <div className={styles.bannerFadeBottom} />
    </header>
  );
};

export default Banner;
