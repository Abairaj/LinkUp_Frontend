import * as React from "react";
import Box from "@mui/material/Box";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Modal from "@mui/material/Modal";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Comment.css";

import {
  Avatar,
  Button,
  InputAdornment,
  TextField,
  colors,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function OpenComment(props) {
  const { post_id, user } = props;
  console.log(post_id, "kfdslgjdfkgndfkjgnfkjgnijfnriifn");
  const handleComments = () => {
    handleCommentOpen();
    const response = axios
      .get(`${import.meta.env.VITE_API_URL}/post/comment/?post_id=${post_id}`, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then((response) => {
        console.log(response.data);
        setComment(response.data.data);
      });
  };

  const [openComment, setOpenComment] = React.useState(false);
  const navigate = useNavigate();

  const handleCommentOpen = () => setOpenComment(true);
  const handleCommentClose = () => setOpenComment(false);
  const [comment, setComment] = React.useState("");
  const inputRef = useRef(null);

  return (
    <div>
      <button
        onClick={handleComments}
        className="text-white text-semibold text-sm"
      >
        <ChatBubbleOutlineIcon />
      </button>
      <Modal
        open={openComment}
        onClose={handleCommentClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="w-full h-screen  bg-blend-saturation">
          <div className="close_btn flex justify-end md:w-11/12">
            <button
              onClick={handleCommentClose}
              className="text-2xl text-semibold m-2 pl-3 pr-3 pb-2 rounded hover:bg-slate-800"
            >
              x
            </button>
          </div>

          <div
            style={{ backgroundColor: "#212529" }}
            className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg wrapper border border-slate-50 w-fit rounded"
          >
            <div className="createPost_selected max-w-2xl md:flex md:flex-row">
              <div
                style={{ width: "320px" }}
                className="createPost_selected_image"
              >
                <img
                  className="w-full h-full"
                  src="https://images.unsplash.com/photo-1684162485237-bda5fab36be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
              </div>

              <div className="createPost_comment_box md:ps-3  md:w-2/5">
                <div className="shareanduserbar flex flex-row pt-4 md:ps-3 md:pe-3 justify-between border-b border-s border-slate-50 ">
                  <div className="add_comment__ flex flex-row pb-3 ps-3">
                    <Avatar>A</Avatar>
                    <span className="ps-2 pt-2">{user}</span>
                  </div>
                  <div className="comment_morebtn">
                    <MoreHorizIcon />
                  </div>
                </div>
                {comment != "" ? (
                  comment.map((obj) => {
                    return (
                      <div
                        className="comment_list overflow-y-auto pt-3"
                        style={{ maxHeight: "200px" }}
                      >
                        <div className="comment_individual ">
                          <div className="comment_individual_profile flex flex-row pb-3 pt-3 ps-3">
                            <Avatar>A</Avatar>
                            <span className="ps-2 pt-2 pe-5">
                              {obj.user.username}
                            </span>
                            <MoreHorizIcon sx={{ paddingTop: "2px" }} />
                          </div>
                          <div className="comment_body ps-2">
                            <p className="ps-5">{obj.content}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div
                    className="comment_list overflow-y-auto pt-3"
                    style={{ maxHeight: "200px" }}
                  >
                    <div className="comment_individual ">
                      <div className="comment_individual_profile flex flex-row pb-3 pt-3 ps-3">
                        {/* <Avatar>A</Avatar>
                        <span className="ps-2 pt-2">user_one</span> */}
                      </div>
                      <div className="comment_body ps-2">
                        <p>No Comments yet</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="createPost_selected_captioninput"></div>

                {/* <TextField
                  sx={{
                    minWidth: "290px",
                  }}
                  type="text"
                  placeholder="Add Comment"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                      </InputAdornment>
                    ),

                    style: { color: "white" },
                  }}
                /> */}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
