import React from "react";
import Banner from "../Banner";
import NavBar from "../NavBar";
import styles from "./index.module.scss";
import { rowsData } from "../../requests";
import Row from "../Row";

const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <NavBar />
      <Banner />
      {rowsData.map((item) => (
        <Row
          key={item.id}
          title={item.title}
          fetchUrl={item.fetchUrl}
        />
      ))}
    </div>
  );
};
export default HomeScreen;
