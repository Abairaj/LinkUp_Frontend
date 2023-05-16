import React from "react";
import { useState, useRef } from "react";
import {Button, Modal } from "@mui/material";
import "./ProfileUploadPopup.css";
import axios from "axios";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

export default function ProfileuploadPopup() {
  const ApiURL = useSelector((state) => state.ApiURL.ApiURL);
  const [image, setImage] = useState();
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
    uploadImage(e.target.files[0]);
  };

  const uploadImage = (image) => {
    axios
      .patch(
        `${ApiURL}/users/user_profile/${Cookies.get("id")}`,
        { profile: image },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        handleClose();
        window.location.reload();
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button className="sm:text-sm" onClick={handleOpen}>
        Change Profile
      </Button>
      <Modal
        className="modalpopup bottom-0 w-screen h-screen"
        open={open}
        onClose={handleClose}
      >
        <div className="popup_card fixed  w-80 h-fit border border-slate-200 rounded bg-black">
          <div className="avatar_div border-b border-slate-200 flex justify-center mt-2">
            {" "}
            <h1 className="text-bold text-xl pb-2">Change Profile</h1>
          </div>
          <div className="popup_card_1st flex flex-row justify-center  pb-1 pt-1 border-b border-slate-200">
            <div className="upld_btn pt-3 ">
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />{" "}
              <button
                className=" row-auto text-blue-600"
                onClick={handleUploadButtonClick}
              >
                Upload
              </button>
            </div>
          </div>
          <div className="popup_card_2nd text-center text-red-600 pt-1 pb-1 border-b border-slate-100">
            <button className="pt-1 pb-1">Remove Current Photo</button>
          </div>
          <div className="popup_card_3rd pb-1 pt-1 text-center">
            <button onClick={handleClose} className="pb-1 pt-1">
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
