import React, { useRef, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import SendIcon from "@mui/icons-material/Send";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import "./Reels.css";

const VideoPlayer = ({ videos, setPlaying, playing }) => {
  const playVideoRef = useRef([]);

  const handlePlay = (post_id) => {
    setPlaying((prevStatus) => {
      const updatedStatus = [...prevStatus];
      updatedStatus[post_id] = true;
      return updatedStatus;
    });
  };

  const handlePause = (post_id) => {
    setPlaying((prevStatus) => {
      const updatedStatus = [...prevStatus];
      updatedStatus[post_id] = false;
      return updatedStatus;
    });
  };

  const handlePlayvideo = (post_id) => {
    const video = playVideoRef.current[post_id];

    if (video.paused) {
      video.play();
      handlePlay(post_id);
    } else {
      video.pause();
      handlePause(post_id);
    }
  };

  return (
    <div>
      {videos.map((video) => (
        <div
          key={video.post_id}
          className="reels__player mt-3 mb-3 flex flex-row relative"
        >
          <PlayCircleFilledWhiteIcon
            sx={{
              position: "absolute",
              bottom: "50%",
              right: "45%",
              fontSize: "50px",
              visibility: `${playing[video.post_id] ? "hidden" : ""}`,
            }}
          />
          <video
            className="reels_video"
            onClick={() => handlePlayvideo(video.post_id)}
            ref={(ref) => (playVideoRef.current[video.post_id] = ref)}
            src={`${import.meta.env.VITE_API_URL}/${video.media_url}`}
          ></video>
          <div className="reels__buttons flex flex-col absolute lg:bottom-40 lg:right-1">
            <FavoriteBorderIcon sx={{ marginBottom: "20px" }} />
            <ModeCommentIcon sx={{ marginBottom: "20px" }} />
            <SendIcon sx={{ marginBottom: "20px" }} />
            <BookmarkIcon sx={{ marginBottom: "20px" }} />
            <MoreHorizIcon sx={{ marginBottom: "20px" }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoPlayer;
