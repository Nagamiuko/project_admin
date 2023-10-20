import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "./home/home.scss";
import Widget from "../components/widget/Widget";
import Chart from "../components/chart/Chart";
import Table from "../components/table/Table";
import useFetch from "../hooks/useFetch";
import useFetchBook from "../hooks/useFetchBook";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Usertable from "../components/tableuser/Usertable";
import { getAllOfUser } from "../components/redux/action/users";
import { getAllProduct } from "../components/redux/action/product";
import Load from "../components/loadalert/Load";

const UserAllPage = () => {
  const { users, isLoading } = useSelector((state) => state.user);
  const [listuser, setListUser] = useState();

  useEffect(() => {
    setListUser(users);
  }, [users]);

  return (
    <>
      {isLoading ? <Load/> :
        <div className="home">
          <Sidebar />
          <div className="homeContainer">
            <Navbar />
            <div className="listContainer">
              <div className="listTitle">Users All</div>
              <Usertable rows={users} />
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default UserAllPage;
