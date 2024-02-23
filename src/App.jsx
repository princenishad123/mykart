import React from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import SignUp from "./pages/SignUp";
import Order from "./pages/Order";
import Account from "./pages/Account";
import AllProduct from "./pages/AllProduct";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import HelpCenter from "./pages/HelpCenter";
import Coupons from "./pages/Coupons";
import View from "./pages/View";
import Offers from "./pages/Offers";
import Notification from "./pages/Notification";
import NoPage from "./pages/NoPage";
import Search from "./pages/Search";
import UserInfo from "./pages/userPages/UserInfo";
import Address from "./pages/userPages/Address";
import WatchList from "./pages/userPages/WatchList";
import Notifications from "./pages/userPages/Notifications";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./pages/protectedRoutes/ProtectedRoutes";
//admin Pages
import ProtectedRouteForAdmin from "./pages/protectedRoutes/ProtectedRouteForAdmin";
import Dashboard from "./pages/AdminPages/Dashboard";
import Users from "./pages/AdminPages/Users";
import Products from "./pages/AdminPages/Products";
import Orders from "./pages/AdminPages/Orders";
import Upload from "./pages/AdminPages/Upload";
import Update from "./pages/AdminPages/Update";
import Checkout from "./pages/Checkout";

const App = () => {
  AOS.init({
    duration: 850,
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      // routes for admin Dashbaord
      <Route
        path="/owner/admin/"
        element={<ProtectedRouteForAdmin AdminProtected={Admin} />}
      >
        <Route path="" element={<ProtectedRoutes Component={Dashboard} />} />
        <Route path="users" element={<ProtectedRoutes Component={Users} />} />
        <Route
          path="products"
          element={<ProtectedRoutes Component={Products} />}
        />
        <Route path="orders" element={<ProtectedRoutes Component={Orders} />} />
        <Route path="upload" element={<ProtectedRoutes Component={Upload} />} />
        <Route path="update" element={<ProtectedRoutes Component={Update} />} />
      </Route>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/order" element={<ProtectedRoutes Component={Order} />} />
      <Route
        path="/checkout/:product"
        element={<ProtectedRoutes Component={Checkout} />}
      />
      <Route path="/search" element={<Search />} />
      {/* <Route path="/account" element={<Account />} /> */}
      <Route path="/account/" element={<ProtectedRoutes Component={Account} />}>
        <Route path="" element={<ProtectedRoutes Component={UserInfo} />} />
        <Route
          path="address"
          element={<ProtectedRoutes Component={Address} />}
        />
        <Route path="watchlist" element={<WatchList />} />
        <Route path="notification" element={<Notifications />} />
      </Route>
      <Route path="/products/:category" element={<AllProduct />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="/coupons" element={<Coupons />} />
      <Route path="/offer-zone" element={<Offers />} />
      <Route path="/cart" element={<ProtectedRoutes Component={Cart} />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
