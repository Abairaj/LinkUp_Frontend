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
        <button className="group hover:bg-slate-700 p-2 rounded-md">
          <HomeIcon className="icon last:group-hover:bg-slate-700" />
        </button>
        <button className="group hover:bg-slate-700 p-2 rounded-md">
          <ExploreIcon className="icon group-hover:bg-slate-700" />
        </button>
        <button className="group hover:bg-slate-700 p-2 rounded-md">
          <SearchIcon className=" icon group-hover:bg-slate-700" />
        </button>
        <button className="group hover:bg-slate-700 p-2 rounded-md">
          <MovieIcon className="icon group-hover:bg-slate-700" />
        </button>
        <button className="group hover:bg-slate-700 p-2 rounded-md">
          <ChatIcon className=" icon group-hover:bg-slate-700" />
        </button>
        <button className="group hover:bg-slate-700 p-2 rounded-md">
          <NotificationsActiveIcon className="icon group-hover:bg-slate-700" />
        </button>
        <button className="group hover:bg-slate-700 p-2 rounded-md">
          <AddCircleOutlineIcon className="icon group-hover:bg-slate-700" />
        </button>
        <button className="group hover:bg-slate-700 p-2 rounded-md">
          <MenuIcon className="icon group-hover:bg-slate-700" />
        </button>
      </div>
    </div>
  );
};

export default Bottomnav;
