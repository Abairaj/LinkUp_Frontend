import axios from "axios";
import React, { useEffect, useState } from "react";
import UserTable from "../../TableComponents/UserTable";

export default function AdminUsers() {
const userData = 8;
  return (
    <div>
      {/* {userData.length>0
        ? userData.map((obj) => {
            return(<>fdf</>)
          })
        : "No data"} */}
        <UserTable/>
    </div>
  );
}
