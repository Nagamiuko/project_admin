import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import useFetch from "../../hooks/useFetch";
import useFetchBook from "../../hooks/useFetchBook";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Load from "../../components/loadalert/Load";

const Home = () => {
  const { users } = useSelector((state) => state.user)
  const { products , isLoading} = useSelector((state) => state.product)
  const [listuser, setListUser] = useState();
  const [listbook, setListBook] = useState();

  console.log(users);
  useEffect(()=>{
    setListUser(users)
    setListBook(products)
  },[users ,products])
  
  const row = [];
  listuser &&
  listuser.forEach((item) => {
      row.push({
        name: item.fullname,
        Total: item.total_money,
      });
    });
  return (
    <>{ isLoading ? <Load/> :
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" dataUser={listuser?.length}/>
          <Widget type="books" dataBook={listbook?.length} />
        </div>
        <div className="charts">
          {/* <Featured /> */}
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} data={row} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table rows={listuser} />
        </div>
      </div>
    </div>
     }
    </>
  );
};

export default Home;
