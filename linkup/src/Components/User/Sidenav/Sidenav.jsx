import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SearchIcon from "@mui/icons-material/Search";
import MovieIcon from "@mui/icons-material/Movie";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ReportIcon from "@mui/icons-material/Report";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../Assets/logotrans.png";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import CreatePost from "../CreatePost/CreatePost";

const Sidenav = ({ isAdmin }) => {
  const navigate = useNavigate();
  return (
    <>
      {!isAdmin ? (
        <div className="sidenav">
          <img className="sidenav__logo" src={logo} alt="icon" />
          <div className="sidenav__buttons">
            <button
              onClick={() => navigate("/home")}
              className="sidenav__button"
            >
              <HomeIcon sx={{ fontSize: "30px" }} className="icon" />
              <span>Home</span>
            </button>
            <button className="sidenav__button">
              <SearchIcon sx={{ fontSize: "30px" }} className="icon" />
              <span>Search</span>
            </button>
            <button
              onClick={() => navigate("/explore")}
              className="sidenav__button"
            >
              <ExploreIcon sx={{ fontSize: "30px" }} className="icon" />
              <span>Explore</span>
            </button>
            <button
              onClick={() => navigate("/reels")}
              className="sidenav__button"
            >
              <MovieIcon sx={{ fontSize: "30px" }} className="icon" />
              <span>Reels</span>
            </button>
            <button
              onClick={() => navigate("/messages")}
              className="sidenav__button"
            >
              <ChatIcon sx={{ fontSize: "30px" }} className="icon" />
              <span>Messages</span>
            </button>
            <button className="sidenav__button">
              <NotificationsActiveIcon
                sx={{ fontSize: "30px" }}
                className="icon"
              />
              <span>Notification</span>
            </button>

            <button className="sidenav__button">
              <AddCircleOutlineIcon sx={{ fontSize: "30px" }} />
              <span>
                <CreatePost />
              </span>
            </button>
            <button
              onClick={() => navigate("/profile")}
              className="sidenav__button"
            >
              <Avatar className="icon">A</Avatar>
              <span className="sidenav__text">Abairaj.K</span>
            </button>
          </div>
          <div className="sidenav__more">
            <button className="sidenav__button">
              <MenuIcon sx={{ fontSize: "30px" }} className="icon" />
              <span className="sidenav__text">More</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="sidenav">
          <img className="sidenav__logo" src={logo} alt="icon" />
          <div className="sidenav__buttons">
            <button
              onClick={() => navigate("/admin_pannel")}
              className="sidenav__button"
            >
              <Avatar>A</Avatar>
              <span>Admin</span>
            </button>
            <button className="sidenav__button">
              <PersonOutlineIcon sx={{ fontSize: "30px" }} className="icon" />
              <span>Users</span>
            </button>
            <button className="sidenav__button">
              <ReportIcon sx={{ fontSize: "30px" }} className="icon" />
              <span>Reports</span>
            </button>
          </div>
          <div className="sidenav__more">
            <button className="sidenav__button">
              <MenuIcon sx={{ fontSize: "30px" }} className="icon" />
              <span className="sidenav__text">More</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidenav;
