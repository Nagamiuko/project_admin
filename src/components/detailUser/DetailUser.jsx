import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import "./detail.scss";
import { Link, useParams } from "react-router-dom";
import { getDetailOfUser } from "../redux/action/users";
import { getAllUserProduct } from "../redux/action/product";
import { useDispatch, useSelector } from "react-redux";
import Load from "../loadalert/Load";
import moment from "moment-timezone";
import Swal from "sweetalert2"
import axios from "axios";
import { server } from "../../server";
const DetailUser = () => {
  const [data_search, setSearch] = useState("");
  const { userid } = useParams();
  const { detailu } = useSelector((state) => state.user);
  const { productu ,isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getDetailOfUser(userid));
      dispatch(getAllUserProduct(userid));
  }, [userid ]);
 
 console.log();
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
            <Link to={`/product-detail/${params?.row?._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div onClick={()=> DeteleUsers(params.row)} className="deleteButton">Delete</div>
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
                params?.row.cover_image?.cover_image_url ||
                "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
              }
              alt="avatar"
            />
            <p>{params?.row?.title}</p>
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
            {params?.row?._id === "" ? (
              <span className={`status Admin`}>ไม่ขาย</span>
            ) : (
              <span className={`status User`}>วางจำหน่าย</span>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <> 
    { isLoading ? <Load/> :
      <div className="single">
        <div className="singleContainerUser">
          <div className="top">
            <div className="left">
              <h1 className="title">Information</h1>
              <div className="item">
                <img
                  src={
                    detailu?.avatar?.avatar_url ||
                    "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                  }
                  alt=""
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">{detailu?.fullname}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{detailu?.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">TH</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Total Money:</span>
                    <span className="itemValue">{detailu?.total_money} THB</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Credit:</span>
                    <span className="itemValue">{detailu?.credit} THB</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Date of membership:</span>
                    <span className="itemValue">{moment(detailu?.createdAt).format("YYYY / MMM / DD")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-right">
          <div className="right">
            <div style={{ height: 750, width: "100%" }}>
              <DataGrid
                rows={productu?.filter((da) =>
                  da.title.toLowerCase().includes(data_search)
                )}
                columns={columns.concat(actionColumn)}
                getRowId={(row) => row._id}
              />
            </div>
          </div>
        </div>
      </div>
    }
    </>
  );
};

export default DetailUser;
