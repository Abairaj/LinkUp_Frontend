import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Sidenav from "../Sidenav/Sidenav";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import SendIcon from "@mui/icons-material/Send";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Reels.css";

const Reels = () => {
  const [reels, setReels] = useState([]);
  const playVideo = useRef([])

  useEffect(() => {
    fetchReels();
  }, []);

  const fetchReels = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/post/getpost/${Cookies.get(
          "id"
        )}?filter=reels`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      setReels(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Reels">
      <div className="reels_nav">
        <Sidenav />
      </div>

      <div className="reels__area">
        <div className="reels__container">
          {reels.length > 0
            ? reels.map((reel) => {
                return (
                  <div
                    key={reel.post_id}
                    className="reels__player mt-3 mb-3 flex flex-row relative"
                  >
                    <video
                      className="reels_video"
                      src={`${import.meta.env.VITE_API_URL}/${reel.media_url}`}
                      autoPlay
                    ></video>
                    <div className="reels__buttons flex flex-col absolute bottom-40 right-1">
                      <FavoriteBorderIcon sx={{ marginBottom: "20px" }} />
                      <ModeCommentIcon sx={{ marginBottom: "20px" }} />
                      <SendIcon sx={{ marginBottom: "20px" }} />
                      <BookmarkIcon sx={{ marginBottom: "20px" }} />
                      <MoreHorizIcon sx={{ marginBottom: "20px" }} />
                    </div>
                  </div>
                );
              })
            : "no post yet"}
        </div>
      </div>
    </div>
  );
};

export default Reels;
