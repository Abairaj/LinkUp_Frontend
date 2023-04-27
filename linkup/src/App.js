import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Signin & Signup/Signup";
import SignIn from "./Components/Signin & Signup/Signin";
import Home from "./Components/User/Home/Home";
import Profile from "./Components/User/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/signin"
            element={<SignIn value={"Sign In"} admin={false} />}
          />
          <Route
            path="/admin"
            element={<SignIn value={"ADMIN"} admin={true} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
