import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import "./detail.scss";
import { Link, useParams } from "react-router-dom";
import { getDetailProduct, getProductChapter } from "../redux/action/product";
import { useDispatch, useSelector } from "react-redux";
import Load from "../loadalert/Load";
import { urlserverview } from "../../server";
const DetailProduct = () => {
  const [data_search, setSearch] = useState("");
  const { bookid } = useParams();
  const { detailbook, isLoading } = useSelector((state) => state.product);
  const { bookchapter } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [listuser, setListUser] = useState();

  useEffect(() => {
    dispatch(getDetailProduct(bookid));
    dispatch(getProductChapter(bookid));
  }, [bookid]);
  console.log();
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <a target="_back_view" href={`${urlserverview}/ViewChapter/${params.row._id}/${bookid}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </a>
          </div>
        );
      },
    },
  ];
  const columns = [
    { field: "_id", headerName: "ChapterID", width: 250 },
    {
      field: "user",
      headerName: "Name Chapter",
      width: 420,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <p>{params?.row?.title_name}</p>
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
              <span className={`status Admin`}>อ่านไม่ได้</span>
            ) : (
              <span className={`status User`}>อ่านได้</span>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <>
      {isLoading ? (
        <Load />
      ) : (
        <div className="single">
          <div className="singleContainer">
            <div className="top">
              <div className="left">
                <h1 className="title">Information</h1>
                <div className="box-item">
                  <img
                    src={
                      detailbook?.cover_image?.cover_image_url ||
                      "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                    }
                    alt=""
                    className="itemImg"
                  />
                  <div className="details">
                    <h1 className="itemTitle font-size">{detailbook?.title}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Detail Book:</span>
                      <span
                        className="itemValue"
                        dangerouslySetInnerHTML={{
                          __html: detailbook?.tagline,
                        }}
                      ></span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">BookType:</span>
                      <span className="itemValue">
                        {detailbook?.typebookAndnovel}
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Author:</span>
                      <span className="itemValue">{detailbook?.a_name}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Translator:</span>
                      <span className="itemValue">{detailbook?.t_name}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Seller:</span>
                      <span className="itemValue">
                        {detailbook?.mangauser?.namedisplay ||
                          detailbook?.mangauser?.fullname}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-right">
            <div className="right">
              <div className="search-bar">
                <p>Search Users</p>
                <input
                  type="search"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search Users"
                />
              </div>
              <div style={{ height: 750, width: "100%" }}>
                <DataGrid
                  rows={bookchapter?.filter((da) =>
                    da.title_name.toLowerCase().includes(data_search)
                  )}
                  columns={columns.concat(actionColumn)}
                  getRowId={(row) => row._id}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailProduct;
