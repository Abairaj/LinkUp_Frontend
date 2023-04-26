import Sidenav from "../Sidenav/Sidenav";
import Timeline from "../Timelilne/Timeline";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__nav">
        <Sidenav />
      </div>
      <div className="home_timeline">
        <Timeline />
      </div>
    </div>
  );
};

export default Home;
