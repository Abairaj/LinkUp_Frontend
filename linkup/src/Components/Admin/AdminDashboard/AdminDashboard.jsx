import React from "react";
import Sidenav from "../../User/Sidenav/Sidenav";
import "./AdminDashboard.css";
import Bottomnav from "../../User/Bottomnav/Bottomnav";

export default function AdminDashboard() {
  return (
    <>
      <div className="admin_dashboard flex flex-row">
        <div className="admin_pannel_sidenav">
          <Sidenav isAdmin={true} />
        </div>
        <div className="admin_pannel_area justify-center">
          <div className="user_statistic_details flex flex-row pt-7 overflow-x-auto">
            <div className="Total_users xl:ms-9 ms-5 me-5 w-52 h-40 pt-10 pb-10 rounded text-center bg-blue-500">
              <h1 className="text-2xl">Total Users</h1>
              <h4 className="text-bold text-xl">4590</h4>
            </div>

            <div className="Total_active_users me-5 w-52 h-40 pt-10 pb-10 rounded text-center bg-red-600">
              <h1 className="text-2xl">Total Active</h1>
              <h4 className="text-bold text-xl">4590</h4>
            </div>

            <div className="Total_active_users me-5 w-52 h-40 pt-10 pb-10 rounded text-center bg-green-500">
              <h1 className="text-2xl">Blocked</h1>
              <h4 className="text-bold text-xl">4590</h4>
            </div>

            <div className="Total_active_users me-5 w-52 h-40 pt-10 pb-10 rounded text-center bg-orange-600">
              <h1 className="text-2xl"></h1>
              <h4 className="text-bold text-xl">4590</h4>
            </div>

            <div className="Total_active_users me-5 w-52 h-40 pt-10 pb-10 rounded text-center bg-slate-600">
              <h1 className="text-2xl">Total Active</h1>
              <h4 className="text-bold text-xl">4590</h4>
            </div>
          </div>
          <div className="user_statistics block">
            <div className="user_graph">graph</div>
          </div>
        </div>

        <Bottomnav isAdmin={true} />
      </div>
    </>
  );
}
