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
    <div className="profile flex   lg:justify-evenly w-fit lg:w-2/3 pe-0">
      <div className="profile_nav md:w-1/6">
        <Sidenav />
      </div>

      <div className="profile_area  justify-center  lg:w-5/6">
        <div className="profile_bar">
          <ProfileBar />
        </div>
        <div className="profile_stories">
          <Stories />
        </div>
        <div className="profile__posts">
          <div className="profile__post__nav flex space-x-4 justify-center text-sm mt-3 border-t border-gray-500 pb-3 ">
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
          <div className="flex flex-row justify-center">
            <Profile_post />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

