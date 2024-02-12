import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [userSearch, setUserSearch] = useSearchParams();
  let userQuery = userSearch.get("q");

  return <Layout></Layout>;
};

export default Search;
