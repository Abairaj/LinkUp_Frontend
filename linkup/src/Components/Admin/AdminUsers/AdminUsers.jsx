import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import styles from "./AdminUsers.module.css";
import Usertable from "./Usertable";
export default function AdminUsers() {
  const [userData, setUserData] = useState([]);
  const rows = userData;

  const formatDate = (date) => {
    const dateObject = new Date(date);
    return dateObject.toDateString();
  };





  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/admin/get_userlist/`,
          {
            headers: { Authorization: `Bearer ${Cookies.get("token")}` },
          }
        );
        setUserData(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const banUnban = (user_id) => {
    const is_banned = userData.find((obj) => obj.id === user_id).is_banned;
    console.log(is_banned, ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");

    axios
      .patch(
        `${import.meta.env.VITE_API_URL}/admin/block_unblock_user/${Cookies.get(
          "id"
        )}`,
        { is_banned: !is_banned },
        { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return <Usertable data={userData}/>
}
{/* <div className="overflow-x-auto">
<table className={styles.table}>
  <thead className={styles.tablehead}>
    <tr>
      <th>Username</th>
      <th>Full Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Joined Date</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {userData.length > 0 ? (
      userData.map((obj) => (
        <tr key={obj.id} className={styles.tablerow}>
          <td>{obj.username}</td>
          <td>{obj.full_name}</td>
          <td>{obj.email}</td>
          <td>{obj.phone}</td>
          <td>{formatDate(obj.date_joined)}</td>
          <td>
            {!obj.is_banned ? (
              <button
                className={styles.ban_btn}
                onClick={() => banUnban(obj.id)}
              >
                Ban
              </button>
            ) : (
              <button
                className={styles.unban_btn}
                onClick={() => banUnban(obj.id)}
              >
                Unban
              </button>
            )}
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="6">No data</td>
      </tr>
    )}
  </tbody>
</table>
</div> */}