import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Signin & Signup/Signup";
import SignIn from "./Components/Signin & Signup/Signin";
import Home from "./Components/User/Home/Home";
import Profile from "./Components/User/Profile/Profile";
import EditProfile from "./Components/User/EditProfile/EditProfile";
import AdminDashboard from "./Components/Admin/AdminDashboard/AdminDashboard";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/signin"
            element={<SignIn value={"Sign In"} url={'users/login/'} admin={false} />}
          />
          <Route
            path="/admin"
            element={<SignIn value={"ADMIN"} url={'users/admin/'} admin={true} />}
          />
                <Route
            path="/admin_pannel"
            element={<AdminDashboard/>}
          />
          
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit_profile" element={<EditProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
