import React from "react";
import Sidenav from "../Sidenav/Sidenav.jsx";
import Timeline from "../Timelilne/Timeline.jsx";
import styles from "./Home.module.css";
import Stories from "../Stories/Stories.jsx";
import Suggestions from "../Timelilne/Suggestions.jsx";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__nav}>
        <Sidenav />
      </div>
      <div className={styles.home_timeline}>
      <div className="home_stories block">
        <Stories/>
      </div>
      <div>
        <Timeline />
      </div>
    <div className={styles.home_suggestions}>
        <Suggestions />
      </div>
      </div>

    </div>
  );
};

export default Home;
