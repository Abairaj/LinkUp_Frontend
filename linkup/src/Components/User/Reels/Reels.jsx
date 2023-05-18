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
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    fetchReels();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchReels = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/post/posts/${Cookies.get(
          "id"
        )}?filter=reels`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      setReels(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleScroll = () => {
    const visibleVideos = getVisibleVideos();
    const firstVisibleVideo = visibleVideos[0];

    if (firstVisibleVideo && currentVideo !== firstVisibleVideo.id) {
      setCurrentVideo(firstVisibleVideo.id);
      pauseAllVideos();
      playVideo(firstVisibleVideo.id);
    }
  };

  const getVisibleVideos = () => {
    return reels.filter((reel) => {
      const videoRef = videoRefs.current[reel.id];
      if (!videoRef) return false;

      const rect = videoRef.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });
  };

  const playVideo = (videoId) => {
    const videoRef = videoRefs.current[videoId];
    if (videoRef) {
      videoRef.play();
    }
  };

  const pauseAllVideos = () => {
    videoRefs.current.forEach((videoRef) => {
      if (videoRef && !videoRef.paused) {
        videoRef.pause();
      }
    });
  };

  const handleVideoClick = (e, reel) => {
    const videoId = e.target.dataset.reelId;
    if (currentVideo === videoId) {
      if (e.target.paused) {
        e.target.play();
      } else {
        e.target.pause();
      }
    } else {
      setCurrentVideo(videoId);
      pauseAllVideos();
      e.target.play();
    }
  };

  return (
    <div className="Reels">
      <div className="reels_nav">
        <Sidenav />
      </div>

      <div className="reels_content">
        {reels.length > 0 ? (
          <div className="reels_container">
            <div className="reels_grid">
              {reels.map((reel) => (
                                  <center>
                <div className="reel" key={reel.id}>
                  <div className="reel_video">
                    <video
                      ref={(ref) => (videoRefs.current[reel.id] = ref)}
                      src={`${import.meta.env.VITE_API_URL}/${reel.media_url}`}
                      alt=""
                      loop
                      className={`reel_video ${
                        currentVideo === reel.id ? "active" : ""
                      }`}
                      controls={false}
                      onClick={(e) => handleVideoClick(e, reel)}
                      data-reel-id={reel.id}
                    />
                    {currentVideo === reel.id && !reel.videoPlaying && (
                      <div className="resume_button">
                        <button
                          onClick={(e) => handleVideoClick(e, reel)}
                          data-reel-id={reel.id}
                        >
                          Resume
                        </button>
                      </div>
                    )}
                    <div className="reel_buttons">
                      <button className="reel_button">
                        <FavoriteBorderIcon />
                      </button>
                      <button className="reel_button">
                        <ModeCommentIcon />
                      </button>
                      <button className="reel_button">
                        <SendIcon />
                      </button>
                      <button className="reel_button">
                        <BookmarkIcon />
                      </button>
                      <button className="reel_button">
                        <MoreHorizIcon />
                      </button>
                    </div>
                  </div>
                </div>
                </center>
              ))}
            </div>
          </div>
        ) : (
          <p>No reels yet</p>
        )}
      </div>
    </div>
  );
};

export default Reels;
