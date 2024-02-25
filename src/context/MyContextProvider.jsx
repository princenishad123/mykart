import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import services from "../firebase/service";

const MyContextProvider = ({ children }) => {
  const [searchItem, setSearchItem] = useState();
  const [loaderOval, setLoaderOval] = useState(true);
  const [userInformation, setUserInformation] = useState();
  const [allUsers, setAllUsers] = useState([]);
  const useEmail = JSON.parse(localStorage.getItem("user"));
  const [allProducts, setAllProducts] = useState([]);
  const [status, setStatus] = useState("pending");
  const [ordersData, setOrdersData] = useState([]);

  // get all users fot admin
  const getuserData = () => {
    services.getDataForDb("users").then((res) => {
      const data = [];
      res.forEach((doc) => {
        data.push(doc.data());
      });
      setAllUsers(data);
    });
  };
  //get all products for admin

  const getAllProducts = () => {
    services.getDataForDb("products").then((res) => {
      const productsData = [];
      res.forEach((doc) => {
        productsData.push(doc.data());
      });
      setAllProducts(productsData);
    });
  };

  const orderData = () => {
    services.getDataForDb("orders").then((res) => {
      const order = [];
      res.forEach((doc) => {
        order.push(doc.data());
      });
      setOrdersData(order);
    });
  };

  useEffect(() => {
    if (useEmail?.email == import.meta.env.VITE_ADMIN_EMAIL) {
      getuserData();
      getAllProducts();
      orderData();
    }
  }, []);

  return (
    <MyContext.Provider
      value={{
        searchItem,
        setSearchItem,
        loaderOval,
        setLoaderOval,
        userInformation,
        setUserInformation,
        allUsers,
        setAllUsers,
        allProducts,
        setAllProducts,
        status,
        setStatus,
        ordersData,
        setOrdersData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
