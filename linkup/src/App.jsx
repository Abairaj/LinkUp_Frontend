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
import Messages from "./Messages/Messages";
import Explore from "./Components/User/Explore/Explore";
import Reels from "./Components/User/Reels/Reels";
import Profile_post from "./Components/User/Profile_post/Profile_post";
import OpenComment from "./Components/User/Comments/Comments";

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

<Route path="/messages" element={<Messages />}></Route>
<Route path="/explore" element={<Explore />}></Route>
<Route path="/reels" element={<Reels/>}></Route>



          <Route path="/preload" element={<Preloader />}></Route>
          {/* <Route path="/test" element={<Profile/>}>
            <Route path="post" element={<Profile_post/>}/>
          </Route> */}
          <Route path="/test" element={<OpenComment/>}></Route>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
