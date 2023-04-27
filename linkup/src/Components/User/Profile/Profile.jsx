import React from "react";
import "./Profile.css";
import Sidenav from "../Sidenav/Sidenav";
import Stories from "../Stories/Stories";
import ProfileBar from "../ProfileBar/ProfileBar";
import CollectionsIcon from "@mui/icons-material/Collections";
import Bottomnav from "../Bottomnav/Bottomnav";

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
        <div className="profile__posts h-screen mt-10 w-full w-screen">
          <div className="profile__post__nav flex space-x-4 justify-center text-sm mt-3 border-t border-gray-500 pb-3">
            <button className="profile__post__navbtn pe-10 pt-3">
              {" "}
              <CollectionsIcon />
              &nbsp;POSTS
            </button>
            <button className="profile__post__navbtn pe-10 pt-3">SAVED</button>
            <button className="profile__post__navbtn pe-10 pt-3">TAGGED</button>
          </div>

          <div className="profile__post flex flex-wrap justify-center grid grid-cols-3">
            <img
              src="https://th.bing.com/th?id=OIP.puneKKH0oYv0zyZRhPjAMgHaEK&w=188&h=132&c=7&o=6&dpr=1.3&pid=SANGAM"
              className="p-2"
            />

            <img
              src="https://th.bing.com/th?id=OIP.puneKKH0oYv0zyZRhPjAMgHaEK&w=188&h=132&c=7&o=6&dpr=1.3&pid=SANGAM"
              className="p-2"
            />

            <img
              src="https://th.bing.com/th?id=OIP.puneKKH0oYv0zyZRhPjAMgHaEK&w=188&h=132&c=7&o=6&dpr=1.3&pid=SANGAM"
              className="p-2"
            />

            <img
              src="https://th.bing.com/th?id=OIP.puneKKH0oYv0zyZRhPjAMgHaEK&w=188&h=132&c=7&o=6&dpr=1.3&pid=SANGAM"
              className="p-2"
            />

            <img
              src="https://th.bing.com/th?id=OIP.puneKKH0oYv0zyZRhPjAMgHaEK&w=188&h=132&c=7&o=6&dpr=1.3&pid=SANGAM"
              className="p-2"
            />
          </div>

          <div className="profile__footer"></div>
        </div>
      </div>

      <Bottomnav />
    </div>
  );
};

export default Profile;
