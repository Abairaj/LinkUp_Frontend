import React from "react";
import Sidenav from "../Components/User/Sidenav/Sidenav";
import Bottomnav from "../Components/User/Bottomnav/Bottomnav";
import styles from "./Messages.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Message_area from "./Message_area";
import MessageSent_area from "./MessageSent_area";
import UserMessageList from "./UserMessageList";

export default function Messages() {
  return (
    <div className={styles.messages}>
      <div className={styles.messages__sidenav}>
        <Sidenav />
      </div>

      <div className="flex flex-1 md:flex-row border border-slate-50 h-screen w-screen md:w-3/6 lg:m-20 md:mt-15">
        <div className="left_wrapper  md:w-2/5 text-center border border-slate-50 h-full w-full overflow-scroll">
          <div className="message_username text-center border-b border-slate-50">
            <div className="name_icon flex justify-evenly pt-3 pb-7">
              <p className="mt-2 text-xl">abai__001</p>
              <button className="text-semibold pt-2">
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className="message_options flex flex-row border-b border-slate-500 justify-start">
            <button className="text-bold ps-8 pb-4 pt-3 hover:border-b border-slate-50">
              PRIMARY
            </button>
            <button className="text-bold ps-8 pb-4 pt-3 hover:border-b border-slate-50">
              GENERAL
            </button>
          </div>
          <UserMessageList />
        </div>
        <Message_area />

        {/* <MessageSent_area/> */}
      </div>
      <Bottomnav />
    </div>
  );
}
