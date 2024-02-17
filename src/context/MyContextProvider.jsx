import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import services from "../firebase/service";

const MyContextProvider = ({ children }) => {
  const [searchItem, setSearchItem] = useState();
  const [loaderOval, setLoaderOval] = useState(true);
  const [userInformation, setUserInformation] = useState();

  return (
    <MyContext.Provider
      value={{
        searchItem,
        setSearchItem,
        loaderOval,
        setLoaderOval,
        userInformation,
        setUserInformation,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
