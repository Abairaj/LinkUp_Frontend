import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";

export default function Message_area() {
  return (
    <div
      style={{ backgroundColor: "#252323" }}
      className="right_wrapper w-3/5 flex items-center justify-center border border-slate-50"
    >
      <div className="message_area">
        <div className="message_area_icon mb-4 text-center">
          <SendIcon sx={{ fontSize: "170px" }} />
          <p className="text-2xl text-semibold pt-2 pb-2">Your Messages</p>
          <p className="text-sm text-gray-500 pt-1 pb-1">
            Send private photos and messages to a friend or group.
          </p>
        </div>
        <div className="button_and_content  mt-3 text-center">
          <Button variant="contained" size="small">
            Sent Message
          </Button>
        </div>
      </div>
    </div>
  );
}
