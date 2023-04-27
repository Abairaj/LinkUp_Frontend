import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SearchIcon from "@mui/icons-material/Search";
import MovieIcon from "@mui/icons-material/Movie";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../Assets/logotrans.png";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <img className="sidenav__logo" src={logo} alt="icon" />
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon className="icon" />
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon className="icon" />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <ExploreIcon className="icon" />
          <span>Explore</span>
        </button>
        <button className="sidenav__button">
          <MovieIcon className="icon" />
          <span>Reels</span>
        </button>
        <button className="sidenav__button">
          <ChatIcon className="icon" />
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          <NotificationsActiveIcon className="icon" />
          <span>Notification</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon className="icon" />
          <span>Create</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon className="icon" />
          <span className="sidenav__text">More</span>
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
