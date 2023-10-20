import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style/dark.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Store from "./components/redux/store";
import { getAllOfUser } from "./components/redux/action/users";
import UserAllPage from "./pages/UserAllPage";
import { getAllProduct } from "./components/redux/action/product";
import ProductAllPage from "./pages/ProductAllPage";
import WithdramPage from "./pages/WithdramPage";
import { getAllWithdram } from "./components/redux/action/withdram";
import DetailUserPage from "./pages/DetailUserPage";
import DetailProductPage from "./pages/DetailProductPage";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  useEffect(()=> {
    Store.dispatch(getAllOfUser())
    Store.dispatch(getAllProduct())
    Store.dispatch(getAllWithdram())
  },[])
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UserAllPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product-all"
            element={
              <ProtectedRoute>
                <ProductAllPage/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/withdram-all"
            element={
              <ProtectedRoute>
                <WithdramPage/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-detail/:userid"
            element={
              <ProtectedRoute>
                <DetailUserPage/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/product-detail/:bookid"
            element={
              <ProtectedRoute>
                <DetailProductPage/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
