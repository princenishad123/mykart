import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Filter from "../components/Filter/Filter";
import SaleCard from "../components/Cards/SaleCard";
import { CiFilter } from "react-icons/ci";
import { useParams } from "react-router-dom";
import services from "../firebase/service";
import MyContext from "../context/MyContext";
import Loader from "../components/Loader/Loader";

const AllProduct = () => {
  const { category } = useParams();
  const [catData, setCatData] = useState([]);
  const { loaderOval, setLoaderOval } = useContext(MyContext);

  useEffect(() => {
    setLoaderOval(true);
    const categoriesData = [];
    services.cotegoryData(category).then((res) => {
      res.forEach((doc) => {
        categoriesData.push(doc.data());
      });
      setLoaderOval(false);

      setCatData(categoriesData);
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title={`product ${category}`}
      description={"indias most popular shopping site"}
    >
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
            {catData.map((e) => (
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

export default AllProduct;
