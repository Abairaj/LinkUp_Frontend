import React from "react";
import "./Profile.css";
import Sidenav from "../Sidenav/Sidenav";
import Stories from "../Stories/Stories";
import ProfileBar from "../ProfileBar/ProfileBar";
import CollectionsIcon from "@mui/icons-material/Collections";
import Bottomnav from "../Bottomnav/Bottomnav";
import Profile_post from "../Profile_post/Profile_post";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__nav">
        <Sidenav />
      </div>

      <div className="profile__area">
        <div className="profile__bar">
          <ProfileBar />
        </div>
        <div className="profile__stories  pt-7">
          <Stories />
        </div>
        <div className="profile__posts h-screen mt-10 w-full">
          <div className="profile__post__nav flex space-x-4 justify-center text-sm mt-3 border-t border-gray-500 pb-3">
            <NavLink to={"post"} className="profile__post__navbtn pe-10 pt-3">
              {" "}
              <CollectionsIcon />
              &nbsp;POSTS
            </NavLink>
            <NavLink to={"saved"} className="profile__post__navbtn pe-10 pt-3">
              SAVED
            </NavLink>
            <button className="profile__post__navbtn pe-10 pt-3">TAGGED</button>
          </div>

          <Outlet />

          <div className="profile__footer"></div>
        </div>
      </div>

      <Bottomnav />
    </div>
  );
};

export default Profile;
