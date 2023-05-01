import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Signin & Signup/Signup";
import SignIn from "./Components/Signin & Signup/Signin";
import Home from "./Components/User/Home/Home";
import Profile from "./Components/User/Profile/Profile";
import EditProfile from "./Components/User/EditProfile/EditProfile";
import AdminDashboard from "./Components/Admin/AdminDashboard/AdminDashboard";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoute";
import Preloader from "./Components/Others/Preloader";
import FacebookRegister from "./Components/User/SocialmediaAuth/FacebookRegister";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/signin"
            element={
              <SignIn value={"Sign In"} url={"users/login/"} admin={false} />
            }
          />
          <Route
            path="/admin"
            element={<SignIn value={"ADMIN"} url={"admin/"} admin={true} />}
          />
          <Route
            path="/admin_pannel"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit_profile"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />

          <Route path="/preload" element={<Preloader />}></Route>
        </Routes>
      </Router>
      <FacebookRegister/>
    </div>
  );
}

export default App;
