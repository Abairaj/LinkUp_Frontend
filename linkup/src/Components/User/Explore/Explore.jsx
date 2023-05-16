import React from "react";
import Sidenav from "../Sidenav/Sidenav";
import "./Explore.css";
import Bottomnav from "../Bottomnav/Bottomnav";

export default function Explore() {
  return (
    <div className="explore flex flex-row justify-center md:justify-normal">
      <div className="explore_nav w-2/6">
        <Sidenav />
      </div>

      <div className="explore_posts md:w-4/6  md:ms-52 mt-5  flex-row  grid grid-cols-2 sm:grid-cols-3  ">
        <div className="explorepost__post  me-1 mt-1 ">
          <img
            className="w-40 h-40 md:h-52 md:w-72"
            src="https://images.unsplash.com/photo-1682685797439-a05dd915cee9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>

        <div className="explorepost__post  mt-1 me-1 ">
          <img
            className="w-40 h-40 md:h-60 md:w-72"
            src="https://plus.unsplash.com/premium_photo-1682437950549-cea05d4844ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60
"
            alt=""
          />
        </div>

        <div className="explorepost__post mt-1 me-1">
          <img
            className=" w-40 h-40 md:h-60 md:w-80"
            src="https://plus.unsplash.com/premium_photo-1682437950549-cea05d4844ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60
"
            alt=""
          />
        </div>
        <div className="explorepost__post mt-1 me-1">
          <img
            className=" w-40 h-40 md:h-60 md:w-72"
            src="https://plus.unsplash.com/premium_photo-1682437950549-cea05d4844ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60
"
            alt=""
          />
        </div>

        <div className="explorepost__post  mt-1 me-1">
          <img
            className=" w-40 h-40 md:h-60 md:w-72"
            src="https://plus.unsplash.com/premium_photo-1682437950549-cea05d4844ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60
"
            alt=""
          />
        </div>
        <div className="explorepost__post mt-1 me-1">
          <img
            className="w-40 h-40 md:h-60 md:w-72"
            src="https://plus.unsplash.com/premium_photo-1682437950549-cea05d4844ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60
"
            alt=""
          />
        </div>
      </div>

      <Bottomnav />
    </div>
  );
}
