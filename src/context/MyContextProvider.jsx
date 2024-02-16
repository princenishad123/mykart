import React, { useState } from "react";
import MyContext from "./MyContext";

const MyContextProvider = ({ children }) => {
  const [searchItem, setSearchItem] = useState();
  const [loaderOval, setLoaderOval] = useState(true);
  return (
    <MyContext.Provider
      value={{ searchItem, setSearchItem, loaderOval, setLoaderOval }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
