import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import CotegoriesMenu from "../components/Category/CotegoriesMenu";
import MainPage from "../components/HomeSlider/MainPage";
import BrowseByCategory from "../components/HomeSlider/BrowseByCategory";
import ProductCard from "../components/Cards/ProductCard";
import SaleCard from "../components/Cards/SaleCard";
import services from "../firebase/service";

const Home = () => {
  let [item, setItem] = useState([]);

  useEffect(() => {
    services.homeData().then((res) => {
      let data = [];
      res.forEach((doc) => {
        data.push(doc.data());
      });
      setItem(data);
    });
  }, []);
  function uploadData() {
    services.uploadDocs().then((res) => {
      console.log(res);
    });
  }

  return (
    <Layout>
      <CotegoriesMenu />

      <button onClick={uploadData}>upload docs</button>

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
          {item.map((e) => (
            <ProductCard
              image={e.image}
              title={e.title}
              discount={e.discount}
              key={e.id}
            />
          ))}
        </div>
      </div>

      {/* sale card */}
      <div>
        <h1 className="text-xl font-semibold px-3 my-6 text-center ">
          Trending Clothes
        </h1>
        <div className="w-11/12  mx-auto flex items-center justify-center gap-4 flex-wrap ">
          <SaleCard />
          <SaleCard />
          <SaleCard />
          <SaleCard />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
