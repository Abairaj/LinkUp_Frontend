import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const ApiURL = useSelector((state) => state.User.User);
  const [is_auth, setIs_auth] = useState(false);
  useEffect(() => {
    authenticate();
  }, []);
  const authenticate = () => {
    axios
      .get(`${ApiURL}/auth/`, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then((response) => {
        if (response) {
          setIs_auth(true);
        } else {
          setIs_auth(false);
        }
      })
      .catch((error) => {
        setIs_auth(false);
        console.log(error);
      });
  };
  return is_auth ? children : <Navigate to="/signin" replace />;
}
