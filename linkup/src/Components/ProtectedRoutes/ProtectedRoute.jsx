import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Preloader from "../Others/Preloader";

export default function ProtectedRoute({ children }) {
  const [Is_loading, setIsLoading] = useState(true);
  const [is_auth, setIs_auth] = useState(false);

  useEffect(() => {
    authenticate();
  }, []);

  const authenticate = () => {
    axios
      .get(`http://127.0.0.1:8000/users/auth/${Cookies.get("id")}`, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then((response) => {
        console.log(response);
        if (response) {
          setIs_auth(true);
        } else {
          setIs_auth(false);
        }
      })
      .catch((error) => {
        setIs_auth(false);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return Is_loading ? (
    <Preloader />
  ) : is_auth ? (
    children
  ) : (
    <Navigate to="/signin" replace />
  );
}
