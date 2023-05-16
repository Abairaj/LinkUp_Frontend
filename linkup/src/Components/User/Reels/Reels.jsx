import React from "react";
import Sidenav from "../Sidenav/Sidenav";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import SendIcon from "@mui/icons-material/Send";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Reels.css";

export default function Reels() {
  return (
    <div className="Reels grid grid-cols-3">
      <div
        style={{ flex: "0.2" }}
        className="reels_nav md:col-span-1 hidden md:flex"
      >
        <Sidenav />
      </div>

      <div className="reels__window h-screen w-screen md:w-full  col-span-2 overflow-scroll flex">
        <div className="reels_and_buttons">
          <div className="reels_area md:pt-5 relative">
            <div className="reels_play md:w-50 h-screen md:me-8 ">
              <img
                className="h-screen"
                src="https://images.unsplash.com/photo-1682687220801-eef408f95d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="button_bar absolute bottom-0 right-0 md:pb-8 pe-3">
              <button className="block mb-2">
                <FavoriteBorderIcon />
              </button>
              <button className="block mb-2">
                <ModeCommentIcon />
              </button>
              <button className="block mb-2">
                <SendIcon />
              </button>
              <button className="block mb-2">
                <BookmarkIcon />
              </button>
              <button className="block mb-15">
                <MoreHorizIcon />
              </button>
            </div>
          </div>

          <div className="reels_area pt-5 relative">
            <div className="reels_play w-50 h-screen me-8 ">
              <img
                src="https://images.unsplash.com/photo-1682687220801-eef408f95d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="button_bar absolute bottom-0 right-0 pb-8">
              <button className="block mb-2">
                <FavoriteBorderIcon />
              </button>
              <button className="block mb-2">
                <ModeCommentIcon />
              </button>
              <button className="block mb-2">
                <SendIcon />
              </button>
              <button className="block mb-2">
                <BookmarkIcon />
              </button>
              <button className="block mb-2">
                <MoreHorizIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
