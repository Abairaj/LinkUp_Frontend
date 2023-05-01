import Bottomnav from "../Bottomnav/Bottomnav";
import Sidenav from "../Sidenav/Sidenav";
import "./EditProfile.css";
import logo from "../../../Assets/logotrans.png";
import EditProfileForm from "./EditProfileForm";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditProfile = () => {
  const ApiURL = useSelector(state=>state.ApiURL.ApiURL)
  const navigate = useNavigate()
  const logoutHandler = (e)=>{
    e.preventDefault()
      const response = axios.post(`${ApiURL}/users/logout/`,null, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      }).then((response)=>{
        Cookies.remove("id")
        Cookies.remove('token')
        navigate('/signin')
      }).catch((error)=>{
        console.log(error)
      })


  }
  return (
    <div className="editprofile md:flex md:flex-row">
      <div className="profileedit__sidenav">
        <Sidenav />
      </div>
      <div className="profileedit__area  flex flex-row border border-slate-50 h-screen mt-10 w-80 mb-10">
        <div className="editprofile__right border-e border-slate-50 w-60">
          <div className="firstcol pt-5 flex flex-col">
            <img className="w-52 h-52 ps-3 m-0" src={logo} alt="" />
            <button className="ps-3 pb-4 pt-4 text-bold hover:bg-slate-800">
              Password and Security
            </button>
            <button className="ps-3 pb-4 pt-4 text-bold hover:bg-slate-800">
              Blocked Accounts
            </button>
            <button className="ps-3 pb-4 pt-4 text-bold hover:bg-slate-800">
              Email Notification
            </button>
            <button className="ps-3 pb-4 pt-4 text-bold hover:bg-slate-800">
              Privacy
            </button>
            <button onClick={logoutHandler} className="ps-3 pb-4 pt-4 text-bold hover:bg-slate-800">
              Logout
            </button>
          </div>
        </div>
        <div className="editprofile__left border-s border-slate-50 ">
          <h1 className="p-5 font-semibold text-lg">Edit Profile</h1>
          <div className="profile__form ">
            <EditProfileForm />
          </div>
        </div>
      </div>
      <Bottomnav />
    </div>
  );
};

export default EditProfile;
