import React, { useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import "./tableproduct.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { server } from "../../server";
const ProductList = ({ rows }) => {
  const [data_search, setSearch] = useState("");
  const [databook, setDataBook] = useState(rows);
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
          setDataBook(databook.filter((f) => f._id !== data._id));
          await axios.delete(`${server}/api/book-delete/${data?._id}`);
          window.location.reload()
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
            <Link to={`/product-detail/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={()=> DeteleUsers(params.row)}>Delete</div>
          </div>
        );
      },
    },
  ];
  const columns = [
    { field: "_id", headerName: "ProductID", width: 250 },
    {
      field: "user",
      headerName: "CoverBook",
      width: 420,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img
              className="cellImg"
              src={
                params.row.cover_image?.cover_image_url ||
                "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
              }
              alt="avatar"
            />
            <p>{params.row.title}</p>
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row._id === "" ? (
              <span className={`status Admin`}>ไม่ขาย</span>
            ) : (
              <span className={`status User`}>วางจำหน่าย</span>
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
        <p>Search Products</p>
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Products"
        />
      </div>
      <div style={{ width: "100%", height: 680 , color: "gray"}}>
        <DataGrid
          rows={databook?.filter((da) =>
            da.title.toLowerCase().includes(data_search)
          )}
          columns={columns.concat(actionColumn)}
          getRowId={(row) => row._id}
        />
      </div>
    </div>
  );
};

export default ProductList;
