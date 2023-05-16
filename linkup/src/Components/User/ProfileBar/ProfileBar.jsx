import React from "react";
import "./ProfileBar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileBar = () => {
  const navigate = useNavigate();
  const User = useSelector((state) => state.User.User);
  return (
    <div className="profilebar flex flex-row">
      <div className="profilebar__avatar pt-16 ps-10 pe-10">
        <Avatar className="avatar">A</Avatar>
      </div>
      <div className="profile__info pt-20 ps-10">
        <div className="profilebar_username flex flex-row">
          <p className="pe-6 font-semibold text-lg">{User.username}</p>
          <button
            onClick={() => navigate("/edit_profile")}
            className="profilebar__button font-semibold text-sm text-black bg-gray-300 rounded-md p-1 ps-4 pe-4 hover:bg-slate-400"
          >
            Edit Profile
          </button>
        </div>
        <div className="profilebar__followerstab flex flex-row pt-3 ">
          <p className="pe-6">23 posts</p>
          <p className="pe-6">453 Followers</p>
          <p className="pe-6">422 Following</p>
        </div>
        <div className="profilebar__fullname pt-3">
          <p className="fullname font-semibold">userfullname</p>
          <p className="profilebar__type font-extralight text-sm text-gray-100">
            personalblog
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
