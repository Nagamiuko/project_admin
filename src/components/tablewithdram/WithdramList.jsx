import React, { useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import "./tableproduct.scss";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import Swal from "sweetalert2";
import axios from "axios";
import { server } from "../../server";
import PopDetail from "./popUp/PopDetail";
import Load from "../loadalert/Load";
const WithdramList = ({ rows, loading }) => {
  const [data_search, setSearch] = useState("");
  const [datachapter, setDataChapter] = useState(rows);
  const [monny, setMonny] = useState(0);
  const [data_statue, setStatue] = useState("สำเร็จ");
  const [pop, setPop] = useState(false);
  const [id, setId] = useState(null);

  const UpDateWithdram = (data) => {
    try {
      Swal.fire({
        text: "ต้องการอนุมัติใช่หรือไม่ ?",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยัน",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire("Success!", "ยืนยันข้อมูลสำเร็จ", "success");
          // setDataChapter(DataToonChapter.filter((f) => f._id !== data._id));
          await axios.put(
            `${server}/api/users/user-update-withdram/${data?.shopId}`,
            {
              moneyTotal: monny,
            }
          );
          await axios.put(`${server}/api/withdram-update/${data?._id}`, {
            status: data_statue,
          });
          window.location.reload();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  const DeteleWithdram = (data) => {
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
          setDataChapter(datachapter.filter((f) => f._id !== data._id));
          await axios.delete(`${server}/api/withdram-detele/${data?._id}`);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const OpenPopDatail = (data) => {
    setPop(true);
    setId(data._id);
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div style={{ textDecoration: "none" }}>
              {params.row.status === "สำเร็จ" ? (
                <button className={``} disabled>
                  Approve
                </button>
              ) : (
                <button
                  onClick={() => UpDateWithdram(params.row)}
                  className={`AllowButton`}
                >
                  Approve
                </button>
              )}
            </div>
            <div style={{ textDecoration: "none" }}>
              <button onClick={() => setPop(true) || setId(params.row._id)} className="CheckButton">
                Check
              </button>
            </div>
            <div
              onClick={() => DeteleWithdram(params.row)}
              className="deleteButton"
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  const columns = [
    { field: "_id", headerName: "WithdramID", width: 250 },
    { field: "bankHolderName", headerName: "Name Withdram", width: 200 },
    { field: "moneyTotal", headerName: "Amount of money / THB", width: 200 },
    {
      field: "Date",
      headerName: "DataTime",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {moment(params.row.paidAt).format("YYYY / MMM / DD - h:mm:ss a")}
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
            {params.row.status === "สำเร็จ" ? (
              <span className={`status User`}>สำเร็จ</span>
            ) : (
              <span className={`status Admin`}>รอดำเนินการ</span>
            )}
          </div>
        );
      },
    },
  ];
  console.log(rows);
  return (
    <div>
      {pop && <PopDetail setPop={setPop}  id={id}/>}
      { loading ? <Load/> :
      <div>
        <div className="search-bar">
          <p>Search Shop</p>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="หมายเลขร้านค้า หรือ ชื่อผู้รับเงิน/ชื่อผู้ขาย"
          />
          <div className="icon"></div>
        </div>
        <div style={{ width: "100%", height: 680 }}>
          <DataGrid
            rows={datachapter?.filter(
              (da) =>
                da.shopId.toLowerCase().includes(data_search) ||
                da.bankHolderName.toLowerCase().includes(data_search)
            )}
            columns={columns.concat(actionColumn)}
            getRowId={(row) => row._id}
          />
        </div>
      </div>
       }
    </div>
  );
};

export default WithdramList;
