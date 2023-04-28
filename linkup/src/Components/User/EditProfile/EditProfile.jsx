import Bottomnav from "../Bottomnav/Bottomnav";
import Sidenav from "../Sidenav/Sidenav";
import "./EditProfile.css";

import React from "react";
import EditProfileForm from "./EditProfileForm";

const EditProfile = () => {
  return (
    <div className="editprofile flex flex-row">
      <div className="profileedit__sidenav">
        <Sidenav />
      </div>
      <div className="profileedit__area  flex flex-row border border-slate-50 h-full mt-10 w-full mb-10">
        {/* <div className="editprofile__right border-e border-slate-50 w-1/3">
          right
        </div> */}
        <div className="editprofile__left w2/3 pb-10">
          <h1 className="p-5 font-semibold text-lg">Edit Profile</h1>
          <EditProfileForm />
        </div>
      </div>
      <Bottomnav />
    </div>
  );
};

export default EditProfile;
