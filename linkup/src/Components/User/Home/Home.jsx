import React from "react";
import Sidenav from "../Sidenav/Sidenav.jsx";
import Timeline from "../Timelilne/Timeline.jsx";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__nav}>
        <Sidenav />
      </div>
      <div className={styles.home_timeline}>
        <Timeline />
      </div>
    </div>
  );
};

export default Home;
