import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SearchIcon from "@mui/icons-material/Search";
import MovieIcon from "@mui/icons-material/Movie";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import "./Bottomnav.css";

const Bottomnav = () => {
  return (
    <div className="bottomnav bg-black">
      <div className="bottomnav__icons flex justify-around pt-4 pb-4">
        <button className="group hover:bg-slate-700 p-3 rounded-md">
          <HomeIcon
            sx={{ fontSize: "30px" }}
            className="icon last:group-hover:bg-slate-700"
          />
        </button>
        <button className="group hover:bg-slate-700 p-3 rounded-md">
          <ExploreIcon
            sx={{ fontSize: "30px" }}
            className="icon group-hover:bg-slate-700"
          />
        </button>
        <button className="group hover:bg-slate-700 p-3 rounded-md">
          <SearchIcon
            sx={{ fontSize: "30px" }}
            className=" icon group-hover:bg-slate-700"
          />
        </button>
        <button className="group hover:bg-slate-700 p-3 rounded-md">
          <MovieIcon
            sx={{ fontSize: "30px" }}
            className="icon group-hover:bg-slate-700"
          />
        </button>
        <button className="group hover:bg-slate-700 p-3 rounded-md">
          <ChatIcon
            sx={{ fontSize: "30px" }}
            className=" icon group-hover:bg-slate-700"
          />
        </button>
        <button className="group hover:bg-slate-700 p-3 rounded-md">
          <NotificationsActiveIcon
            sx={{ fontSize: "30px" }}
            className="icon group-hover:bg-slate-700"
          />
        </button>
        <button className="group hover:bg-slate-700 p-3 rounded-md">
          <AddCircleOutlineIcon
            sx={{ fontSize: "30px" }}
            className="icon group-hover:bg-slate-700"
          />
        </button>
        <button className="group hover:bg-slate-700 p-3 rounded-md">
          <MenuIcon
            sx={{ fontSize: "30px" }}
            className="icon group-hover:bg-slate-700"
          />
        </button>
      </div>
    </div>
  );
};

export default Bottomnav;
