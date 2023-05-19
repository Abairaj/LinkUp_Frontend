import axios from "axios";
import React, { useEffect, useState } from "react";
import App from "../../TableComponents/Column";

export default function AdminUsers() {
  const [userData, setUserdata] = useState([]);

  return (
    <div>
      {userData.length>0
        ? userData.map((obj) => {
            return(<>fdf</>)
          })
        : "No data"}
    </div>
  );
}
