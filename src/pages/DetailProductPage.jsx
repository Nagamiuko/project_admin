import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "./home/home.scss";
import DetailProduct from "../components/detailProduct/DetailProduct";

const DetailProductPage = () => {

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Product All</div>
           <DetailProduct/>
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
