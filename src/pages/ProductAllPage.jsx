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
import { getAllProduct } from "../components/redux/action/product";
import Load from "../components/loadalert/Load";

const ProductAllPage = () => {
  const { products ,isLoading} = useSelector((state) => state.product);
  const [listbook, setListBook] = useState();

  useEffect(() => {
    setListBook(products);
  }, [products]);

  return (
    <>
      { isLoading ? <Load/> :
        <div className="home">
          <Sidebar />
          <div className="homeContainer">
            <Navbar />
            <div className="listContainer">
              <div className="listTitle">Product All</div>
              <ProductList rows={products} />
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ProductAllPage;
