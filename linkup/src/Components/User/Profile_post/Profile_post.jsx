import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

export default function Profile_post() {
  const [userPosts, setUserPosts] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/post/posts/${Cookies.get("id")}?filter=user_post`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setUserPosts(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="profile__post flex-wrap justify-center grid grid-cols-3">
      {userPosts.length > 0 ? (
        userPosts.map((post) => (
          <React.Fragment key={post.id}>
            {post.media_type === "Image" && (
              <img src={`${API_URL}/${post.media_url}`} alt="" />
            )}
            {post.media_type === "Video" && (
              <video
                src={`${API_URL}/${post.media_url}`}
                width=""
                height=""
                controls
              />
            )}
          </React.Fragment>
        ))
      ) : (
        <p>No posts yet</p>
      )}
    </div>
  );
}
