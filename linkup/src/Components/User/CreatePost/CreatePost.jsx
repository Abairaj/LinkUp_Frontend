import * as React from "react";
import Box from "@mui/material/Box";

import { Avatar, Button, InputAdornment, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import PhotoIcon from "@mui/icons-material/Photo";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import axios from "axios";
import Cookies from "js-cookie";
import { shareSuccessAction } from "../../../Store/Actions/ShareSuccessAction";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const handleShare = () => {
    let media_type;
    // Determine media_type based on selectedPost (assuming it contains the filename)
    const fileExtension = selectedPost.name
      .slice(selectedPost.name.lastIndexOf("."))
      .toLowerCase();
    if ([".mp4", ".avi", ".mov"].includes(fileExtension)) {
      media_type = "Video";
    } else if (
      [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(fileExtension)
    ) {
      media_type = "Image";
    }
    console.log(selectedPost, ".......", caption, ".........", location);

    let formdata = {
      media_url: selectedPost,
      caption: caption,
      media_type: media_type,
      user: Cookies.get("id"),
    };

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/post/posts/${Cookies.get("id")}`,
        formdata,
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((response) => {
        setSelected(false);
        dispatch(shareSuccessAction(!shareSucces));
        navigate("/home");
        console.log(response);
      });
  };

  const dispatch = useDispatch();
  const shareSucces = useSelector((state) => state.share_success.state);
  const [open, setOpen] = React.useState(false);
  const [caption, setCaption] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [selected, setSelected] = React.useState(false);
  const [selectedPost, setSelectedPost] = React.useState("");
  const navigate = useNavigate();
  const OpenSelected = (e) => {
    handleClose();
    const img = e.target.files[0];
    setSelectedPost(img);
    setSelected(true);
  };
  const CloseSelected = () => setSelected(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const inputRef = useRef(null);
  const handleCreate = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <button onClick={handleOpen} className="text-white text-semibold text-sm">
        Create
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="w-screen h-screen  bg-blend-saturation">
          <div className="close_btn flex justify-end md:w-11/12">
            <button
              onClick={handleClose}
              className="text-2xl text-semibold m-2 pl-3 pr-3 pb-2 rounded hover:bg-slate-800"
            >
              x
            </button>
          </div>

          <div
            style={{ backgroundColor: "#212529" }}
            className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg wrapper border border-slate-50 w-fit rounded"
          >
            <div className="text-center border-b border-slate-50 p-4 m-0">
              <p className="text-semibold text-lg">Create Post</p>
            </div>
            <div className="p-5 text-center">
              <PhotoIcon sx={{ fontSize: "100px" }} />
              <p className="text-semibold text-xl pt-3 pb-3">
                Drag photos and videos here
              </p>
              <input
                accept="image/*,video/*"
                ref={inputRef}
                type="file"
                onChange={OpenSelected}
                style={{ display: "none" }}
              />
              <Button
                onClick={handleCreate}
                variant="contained"
                size="small"
                sx={{
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                Select from computer
              </Button>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={selected}
        onClose={CloseSelected}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="w-full h-screen  bg-blend-saturation">
          <div className="close_btn flex justify-end md:w-11/12">
            <button
              onClick={CloseSelected}
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
                {selectedPost && (
                  <img
                    className="w-full h-full"
                    src={URL.createObjectURL(selectedPost)}
                    alt=""
                  />
                )}
              </div>

              <div className="createPost_selected_caption ps-3 pe-3 pt-4 w-2/5">
                <div className="shareanduserbar flex flex-row justify-between">
                  <div className="createPost_Selected_Avatat flex flex-row pb-3">
                    <Avatar>A</Avatar>
                    <span className="ps-2 pt-2">Abai raj.k</span>
                  </div>

                  <div className="create_submitbtn pt-2">
                    <button
                      onClick={handleShare}
                      className="text-blue-800 text-bold"
                    >
                      share
                    </button>
                  </div>
                </div>

                <div className="createPost_selected_captioninput">
                  {/* ... */}
                  <TextareaAutosize
                    className="caption"
                    style={{
                      minHeight: "70px",
                      minWidth: "290px",
                      backgroundColor: "#212529",
                    }}
                    minRows={4}
                    placeholder="Your caption here..."
                    onChange={(e) => setCaption(e.target.value)}
                  />
                  {/* ... */}
                </div>
                <TextField
                  sx={{
                    minWidth: "290px",
                  }}
                  type="text"
                  placeholder="Add Location"
                  onChange={(e) => setLocation(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AddLocationIcon sx={{ color: "white" }} />
                      </InputAdornment>
                    ),

                    style: { color: "white" },
                  }}
                />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
