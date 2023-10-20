import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "./home/home.scss";
import DetailUser from "../components/detailUser/DetailUser";

const DetailUserPage = () => {

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Users All</div>
           <DetailUser/>
        </div>
      </div>
    </div>
  );
};

export default DetailUserPage;
