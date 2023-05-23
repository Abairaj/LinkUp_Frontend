import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Cookies from "js-cookie";
import axios from "axios";
import OpenComment from "../Comments/Comments";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [like, setLike] = useState({});
  const [commented, setCommented] = useState(false); // to render when new comment is done
  const { register, handleSubmit, reset } = useForm(); // to render home page after creating a new post
  const shareSucces = useSelector((state) => state.share_success.state);

  // to show hours ago and days ago
  const getDuration = (created_at) => {
    const currentTime = new Date();
    const postTime = new Date(created_at);
    const timeDiff = currentTime - postTime;
    const duration = Math.floor(timeDiff / (1000 * 60 * 60));
    const daysAgo = Math.floor(duration / 24);

    if (daysAgo > 0) {
      return `${daysAgo}d`;
    } else if (duration === 0) {
      return "Just now";
    } else if (duration === 1) {
      return "1h";
    } else {
      return `${duration}h`;
    }
  };

  // creating comments useform hook
  const onSubmit = (data, postId) => {
    let formdata = {
      post: postId,
      user: parseInt(Cookies.get("id")),
      content: data[`comment-${postId}`],
    };
    axios
      .post(`${import.meta.env.VITE_API_URL}/post/comment/`, formdata, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then((response) => {
        alert(response.data.message);
      });
    reset();
    setCommented(!commented);
  };

  const handleLikes = (post_id) => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/post/Post_like/${Cookies.get("id")}`,
        { post_id: post_id },
        {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        }
      )
      .then((response) => {
        const updatedPosts = posts.map((post) => {
          if (post.post_id === post_id) {
            return { ...post, likes: response.data.likes };
          }
          return post;
        });
        setPosts(updatedPosts);
      });
  };

  const toggleLike = (post_id) => {
    handleLikes(post_id);
    setLike((prevLikes) => {
      const updatedLikes = { ...prevLikes };
      updatedLikes[post_id] = !updatedLikes[post_id];
      localStorage.setItem("likes", JSON.stringify(updatedLikes));
      return updatedLikes;
    });
  };

  // fetching the post details
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/post/posts/${Cookies.get("id")}`,
          {
            headers: { Authorization: `Bearer ${Cookies.get("token")}` },
          }
        );
        setPosts(response.data.data);

        const storedLikes = localStorage.getItem("likes");
        if (storedLikes) {
          setLike(JSON.parse(storedLikes));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, [shareSucces]);

  return (
    <>
      {posts &&
        posts.map((post) => (
          <div className="post" key={post.post_id}>
            <div className="post__header">
              <div className="post__headerAuthor">
                {post.user.profile ? (
                  <Avatar
                    src={`${import.meta.env.VITE_API_URL}/${post.user.profile}`}
                  />
                ) : (
                  <Avatar className="avatar">
                    {post.user.username.split("")[0]}
                  </Avatar>
                )}
                {post.user.username} .{" "}
                <span>&nbsp;{`${getDuration(post.created_at)} `}</span>
              </div>
              <MoreHorizIcon />
            </div>
            <div className="post__content">
              {post.media_type === "Image" && (
                <img
                  src={`${import.meta.env.VITE_API_URL}/${post.media_url}`}
                  alt="image"
                />
              )}
              {post.media_type === "Video" && (
                <video controls>
                  <source
                    src={`${import.meta.env.VITE_API_URL}/${post.media_url}`}
                    type="video/mp4"
                  />
                </video>
              )}
            </div>
            <div className="post_footer">
              <div className="post__footerIcons">
                <div className="post__iconMain flex flex-row">
                  {like[post.post_id] ? (
                    <button onClick={() => toggleLike(post.post_id)}>
                      <FavoriteIcon className="postIcon" />
                    </button>
                  ) : (
                    <button onClick={() => toggleLike(post.post_id)}>
                      <FavoriteBorderIcon className="postIcon" />
                    </button>
                  )}

                  <SendIcon className="postIcon" />
                </div>
                <div className="post__iconSave">
                  <BookmarkBorderIcon />
                </div>
              </div>
            </div>
            <p className="pb-3">
              {post.likes.length != 0
                ? `Liked by ${post.likes.length}people`
                : "No likes"}
            </p>
            <p className="pb-3">{post.caption}</p>

            <OpenComment
              Post_Id={post.post_id}
              user={post.user.username}
              is_commented={commented}
            />

            <form
              className="post__commentForm"
              onSubmit={handleSubmit((data) => onSubmit(data, post.post_id))}
            >
              <input
                className="bg-black outline-none w-full"
                type="text"
                name={`comment-${post.post_id}`}
                placeholder="Add comment"
                {...register(`comment-${post.post_id}`)}
              />
              <button className="text-blue-900" type="submit">
                Post
              </button>
            </form>
          </div>
        ))}
    </>
  );
};

export default Post;
