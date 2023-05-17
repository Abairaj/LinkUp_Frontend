import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";

const OpenComment = ({ Post_Id, is_commented }) => {
  console.log(Post_Id);
  const [comments, setComments] = useState([]);
  // page and page size is for pagination of comment
  const [page, setPage] = useState(1);
  const pageSize = 2;

  useEffect(() => {
    fetchComments();
    // is commented to ensure render if new comment is done
  }, [page, is_commented]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/post/comment/?post_id=${Post_Id}`
      );
      const data = response.data;
      console.log(response.data);
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };

  // pagination logic more will be increasing page by one on each click
  const loadMoreComments = () => {
    setPage(page + 1);
  };

  // clicking less will set it to one again
  const viewLessComments = () => {
    setPage(1);
  };
  const displayedComments = comments.slice(0, page * pageSize); // comments array will be sliced according to page and page size which is initially 2 here

  return (
    <div>
      {displayedComments.map((comment) => (
        <div key={comment.comment_id}>
          <div className="profilebar flex flex-row">
            <Avatar
              sx={{
                height: "40px",
                width: "40px",
                marginRight: "6px",
              }}
              src={`${import.meta.env.VITE_API_URL}/${comment.user.profile}`}
            >
              {comment.user.username[0]}
            </Avatar>
            <span className="text-bold mt-4">{comment.user.username}</span>
          </div>
          <div className="comment_content">
            <p className="text-lg text-gray-600 ms-4 mt-1 mb-2">
              {comment.content}
            </p>
          </div>
        </div>
      ))}

      {comments.length > pageSize && page * pageSize < comments.length && (
        <button onClick={loadMoreComments} className="text-sm text-gray-500">
          More...
        </button>
      )}

      {page > 1 && (
        <button onClick={viewLessComments} className="text-sm text-gray-500">
          View Less
        </button>
      )}
    </div>
  );
};

export default OpenComment;
