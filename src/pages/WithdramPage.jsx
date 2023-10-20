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
import ProductList from "../components/tableproduct/ProductList";
import WithdramList from "../components/tablewithdram/WithdramList";
import { getAllWithdram } from "../components/redux/action/withdram";
import Load from "../components/loadalert/Load";

const WithdramPage
 = () => {
  const { withdram , isLoading } = useSelector((state) => state.withdram)
  const [listwithdram, setListWithdram] = useState();
  
  useEffect(()=>{
    setListWithdram(withdram)
  },[withdram])
  
  return (
    <>
    { isLoading ? <Load/> :
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Withdram All</div>
           <WithdramList rows={withdram}/>
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default WithdramPage;
