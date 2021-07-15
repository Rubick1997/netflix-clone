import React from "react";
import Banner from "../Banner";
import NavBar from "../NavBar";
import styles from "./index.module.scss";

const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <NavBar />
      <Banner />
    </div>
  );
};
export default HomeScreen;
