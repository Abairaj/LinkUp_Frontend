import React from "react";
import Sidenav from "../Sidenav/Sidenav";
import "./Explore.css";
import Bottomnav from "../Bottomnav/Bottomnav";

export default function Explore() {
  return (
    <div className="explore flex flex-row justify-center md:justify-normal">
      <div className="explore_nav w-1/6">
        <Sidenav />
      </div>

      <div className="explore_posts grid grid-cols-3 lg:grid-cols-4 w-5/6">
        <div className="first_div w-52 bg-red-500 p-44"></div>{" "}
        <div className="first_div w-52 bg-red-500 p-44">one</div>
        <div className="first_div w-52 bg-red-500 p-44">one</div>{" "}
        <div className="first_div w-52 bg-red-500 p-44">one</div>
      </div>

      <Bottomnav />
    </div>
  );
}
