import React from "react";
import DataTable from "react-data-table-component";
import Cookies from 'js-cookie'
import axios from 'axios'
// 091928

const Usertable = ({ data }) => {

  const API_URL = import.meta.env.VITE_API_URL


  const handleBanUnban =(id)=>{
axios.patch(`${API_URL}/admin/block_unblock_user/${id}`,{
  headers: { Authorization: `Bearer ${Cookies.get("token")}` },
}).then((response)=>{
  console.log(response.data.message)
})

  }





  const customStyles = {
    rows: {
      style: {
        color: "white",
        backgroundColor: "#091928",
        border: "white 1px solid",
        fontSize: "16px",
        padding: "30px",
        textAlign: "center",
      },
    },
    headCells: {
      style: {
        color: "white",
        backgroundColor: "#021f3e",
        border: "white 0.2px solid",
        fontSize: "20px",
        padding: "20px",
      },
    },
    pagination: {
      style: {
        color: "white",
        backgroundColor: "#091928",
        border: "white 0.2px solid",
      },
    },
  };

  const columns = [
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Full Name",
      selector: (row) => row.full_name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Joined On",
      selector: (row) => row.date_joined,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <button onClick={()=>handleBanUnban(row.id)} className="bg-red-500 hover:bg-red-900 rounded ps-5 pe-5 pt-2 pb-2">
          Ban
        </button>
      ),
    },
  ];
  return (
    <div>
      {/* <div>
        <input className='text-end text-white'  type="text" />
      </div> */}
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        fixedHeader
        pagination
        customStyles={customStyles}
      />
    </div>
  );
};

export default Usertable;
