import React, { useState } from "react";
import MyContext from "./MyContext";

const MyContextProvider = ({ children }) => {
  const [searchItem, setSearchItem] = useState();
  return (
    <MyContext.Provider value={{ searchItem, setSearchItem }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
