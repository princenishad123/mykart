import React from "react";
import { Route, Routes } from "react-router-dom";
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
import AllCategories from "./pages/AllCategories";
import Offers from "./pages/Offers";
import Notification from "./pages/Notification";
import NoPage from "./pages/NoPage";
import Search from "./pages/Search";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/owner/admin" element={<Admin />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/order" element={<Order />} />
      <Route path="/search" element={<Search />} />
      <Route path="/account" element={<Account />} />
      <Route path="/all-products" element={<AllProduct />} />
      <Route path="/all-cotegories" element={<AllCategories />} />
      <Route path="/coupons" element={<Coupons />} />
      <Route path="/offer-zone" element={<Offers />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
