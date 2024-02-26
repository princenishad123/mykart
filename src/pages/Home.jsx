import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { ToastContainer, toast } from "react-toastify";

import CotegoriesMenu from "../components/Category/CotegoriesMenu";
import MainPage from "../components/HomeSlider/MainPage";
import BrowseByCategory from "../components/HomeSlider/BrowseByCategory";
import ProductCard from "../components/Cards/ProductCard";
import SaleCard from "../components/Cards/SaleCard";
import services from "../firebase/service";
import Loader from "../components/Loader/Loader";
import MyContext from "../context/MyContext";

const Home = () => {
  const userid = JSON.parse(localStorage.getItem("user"));
  const [userUid, setUserUid] = useState(userid?.uid);
  let [item, setItem] = useState([]);
  const { loaderOval, setLoaderOval, userInformation, setUserInformation } =
    useContext(MyContext);

  useEffect(() => {
    services.homeData().then((res) => {
      let data = [];
      res.forEach((doc) => {
        data.push(doc.data());
      });
      setLoaderOval(false);
      setItem(data);
    });
    services.getLoggedInUser();
    services.getUserData(userUid).then((res) => {
      setUserInformation(res);
    });
  }, []);

  return (
    <Layout
      title={"E-shop | Home"}
      description={"indias most popular shopping site"}
    >
      {loaderOval ? (
        <div
          className="w-full z-40 fixed top-0 bg-slate-100 grid place-items-center"
          style={{ height: "100vh" }}
        >
          <Loader />
        </div>
      ) : (
        <>
          <CotegoriesMenu />

          <div className="w-full h-auto">
            <MainPage />
          </div>

          <BrowseByCategory />

          <div className="w-11/12 mx-auto max-sm:w-full">
            <h1 className="text-gray-700 text-2xl max-sm:px-4  my-3 font-semibold">
              Our Products
            </h1>

            <div
              id="productSection"
              className="w-full h-auto  mx-auto my-4 flex items-center justify-center flex-wrap gap-4 max-md:gap-2"
            >
              {item.slice(0, 6).map((e) => (
                <ProductCard
                  image={e.image}
                  title={e.title}
                  discount={e.discount}
                  key={e.id}
                  category={e.category}
                />
              ))}
            </div>
          </div>

          {/* sale card */}
          <div>
            <h1 className="text-xl font-semibold px-3 my-6 text-start ">
              Trending Clothes
            </h1>
            <div className="w-11/12 max-md:w-full border-b max-sm:gap-0 mx-auto flex items-center justify-center gap-3 flex-wrap ">
              {item.slice(6, -1).map((e) => (
                <SaleCard
                  image={e.image}
                  title={e.title}
                  description={e.description}
                  price={e.price}
                  subprice={e.subprice}
                  discount={e.discount}
                  key={e.id}
                  id={e.id}
                  dataAos={"zoom-in"}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Home;
