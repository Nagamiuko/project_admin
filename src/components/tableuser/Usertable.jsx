import React, { useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import "./tableuser.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { server } from "../../server";
const Usertable = ({ rows }) => {
  const [data_search, setSearch] = useState("");
  const [datauser, setDataUser] = useState(rows);
  const DeteleUsers = (data) => {
    try {
      Swal.fire({
        text: "ต้องการลบใช่หรือไม่ ?",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยัน",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire("Success!", "ลบข้อมูลสำเร็จ", "success");
          setDataUser(datauser.filter((f) => f._id !== data._id));
          await axios.delete(`${server}/api/auth/user/delete/${data?._id}`);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/user-detail/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div onClick={()=> DeteleUsers(params.row)} className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  const columns = [
    { field: "_id", headerName: "UserID", width: 250 },
    {
      field: "user",
      headerName: "Profile",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img
              className="cellImg"
              src={
                params.row.avatar?.avatar_url ||
                "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
              }
              alt="avatar"
            />
            {params.row.fullname}
          </div>
        );
      },
    },
    {
      field: "isAdmin",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.isAdmin === true ? (
              <span className={`status Admin`}>admin</span>
            ) : (
              <span className={`status User`}>customer</span>
            )}
          </div>
        );
      },
    },
  ];
  console.log(rows);

  return (
    <div>
      <div className="search-bar">
        <p>Search Users</p>
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Users"
        />
      </div>
      <div style={{ height: 680, width: "100%" }}>
        <DataGrid
          rows={datauser?.filter((da) =>
            da.fullname.toLowerCase().includes(data_search)
          )}
          columns={columns.concat(actionColumn)}
          getRowId={(row) => row._id}
        />
      </div>
    </div>
  );
};

export default Usertable;
