import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Sidenav from "../Sidenav/Sidenav";
import VideoPlayer from "./VideoPlayer";
import "./Reels.css";

const Reels = () => {
  const [reels, setReels] = useState([]);
  const [playing, setPlaying] = useState({});

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
      setPlaying(new Array(response.data.data.length).fill(true));
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
          {reels.length > 0 ? (
            <VideoPlayer
              videos={reels}
              setPlaying={setPlaying}
              playing={playing}
            />
          ) : (
            "No posts yet"
          )}
        </div>
      </div>
    </div>
  );
};

export default Reels;
