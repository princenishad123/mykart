import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useSearchParams } from "react-router-dom";
import services from "../firebase/service";
import Filter from "../components/Filter/Filter";
import { CiFilter } from "react-icons/ci";
import SaleCard from "../components/Cards/SaleCard";
import MyContext from "../context/MyContext";
import Loader from "../components/Loader/Loader";

const Search = () => {
  const [userSearch, setUserSearch] = useSearchParams();
  const [searchedItem, setSearchedItem] = useState([]);
  const { loaderOval, setLoaderOval } = useContext(MyContext);
  let userQuery = userSearch.get("q");

  useEffect(() => {
    setLoaderOval(true);
    let data = [];
    window.scrollTo(0, 0);
    services.cotegoryData(userQuery).then((res) => {
      res.forEach((doc) => {
        data.push(doc.data());
      });
      setLoaderOval(false);

      setSearchedItem(data);
    });
  }, [userQuery]);

  return (
    <Layout title={"Search"} description={"Search anything anywhere"}>
      {loaderOval ? (
        <Loader />
      ) : (
        <div className="w-full h-auto lg:flex  ">
          {/* this is for filter */}
          <div className="w-72 max-lg:w-64 border h-screen max-lg:hidden px-4 py-2">
            <Filter />
          </div>

          <div className="lg:hidden float-end clear-both flex  rounded-md  bg-red-100 my-1 px-6 mx-8">
            <button onClick={() => alert()} className="flex items-center ">
              Filter
              <CiFilter />
            </button>
          </div>

          <div className="w-full  h-auto flex flex-wrap gap-8 justify-center ">
            {searchedItem.map((e) => (
              <SaleCard
                image={e.image}
                title={e.title}
                description={e.description}
                price={e.price}
                subprice={e.subprice}
                discount={e.discount}
                key={e.id}
                id={e.id}
              />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Search;
