import { Avatar } from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InfoIcon from "@mui/icons-material/Info";

export default function MessageSent_area() {
  return (
    <div
      style={{ backgroundColor: "#252323" }}
      className="right_wrapper w-3/5  border border-slate-50"
    >
      <div className="messageSentArea flex flex-row justify-between border-b border-slate-50">
        <div className="message_namewrapper ms-2 mt-2 flex flex-row">
          <Avatar className="mt-2">A</Avatar>
          <div className="message_user">
            <p className="m-1 pt-2">Abairaj.k</p>
            <p className="text-sm  pb-2 ms-1">Acive</p>
          </div>
        </div>
        <div className="icons m-4">
          <button className="text-sm ps-2 pe-2">
            <CallIcon sx={{ fontSize: "30px" }} />
          </button>
          <button className="text-sm ps-2 pe-2">
            <VideoCallIcon sx={{ fontSize: "30px" }} />
          </button>
          <button className="text-sm ps-2 pe-2">
            <InfoIcon sx={{ fontSize: "30px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
