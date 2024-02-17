import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import services from "../firebase/service";
import SaleCard from "../components/Cards/SaleCard";
import MyContext from "../context/MyContext";
import Loader from "../components/Loader/Loader";

const View = () => {
  const { id } = useParams();

  const { loaderOval, setLoaderOval } = useContext(MyContext);
  const [value, setValue] = useState(4);
  const [category, setCategory] = useState();
  const [product, setProduct] = useState("");
  const [suggetion, setSuggetion] = useState([]);

  useEffect(() => {
    setLoaderOval(true);
    services.getDataById(id).then((res) => {
      window.scrollTo(0, 0);
      setCategory(res.category);
      setProduct(res);
      setLoaderOval(false);

      const suggestedData = [];
      services.cotegoryData(res.category).then((resp) => {
        resp.forEach((doc) => {
          suggestedData.push(doc.data());
        });
        setSuggetion(suggestedData);
      });
    });
  }, [id]);

  return (
    <Layout title={category} description={"indias most popular shopping site"}>
      {loaderOval ? (
        <Loader />
      ) : (
        <div>
          <div className="w-full my-8 auto flex items-center max-md:flex-col">
            <div className="w-2/5 h-full grid place-items-center  border-spacing-3">
              <img src={product.image} alt="" className="w-52" />
            </div>
            <div className="w-3/5 py-4 max-md:w-full max-md:px-2 h-auto">
              <div className="pr-3">
                <h2 className="text-2xl py-2 font-bold">{product.title}</h2>
                {/* price and discount info */}
                <div className="flex justify-between max-sm:flex-col ">
                  <div>
                    <span className="text-xl py-1 font-semibold text-gray-700">
                      <strike className="font-sm text-gray-500">
                        {product.subprice}
                      </strike>{" "}
                      ₹{product.price}
                    </span>
                    <span className=" text-md mx-2 px-3 rounded bg-red-500   text-white">
                      {product.discount} %off
                    </span>
                  </div>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
                {/* buttons for mobile  */}
                <div className="flex items-center justify-center flex-wrap gap-6 my-6 md:hidden">
                  <button className="py-1 px-6 rounded-md bg-gray-200 border border-gray-400 font-semibold shadow-xl shadow-gray-200 ">
                    Add to cart
                  </button>
                  <button className="py-1 px-6 rounded-md bg-red-500 shadow-lg shadow-red-200 text-white font-semibold">
                    Buy Now
                  </button>
                </div>
                {/* close info tag */}
                <hr className="my-3" />
                {/* products Description */}

                <div>
                  <p>{product.description}</p>
                </div>
                <hr className="my-3" />
                <div className="size-max px-3 py-1 rounded-sm text-white font-semibold bg-green-600 origin-center skew-x-3">
                  <h2>1,000+ People Ordered in this week</h2>
                </div>
                {/*buttons for md screens */}

                <div className="flex items-center gap-6 my-6 max-md:hidden">
                  <button className="py-1 px-6 rounded-md bg-gray-200 border border-gray-400 font-semibold shadow-xl shadow-gray-200 ">
                    Add to cart
                  </button>
                  <button className="py-1 px-6 rounded-md bg-red-500 shadow-lg shadow-red-200 text-white font-semibold">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-3" />
          <div className="w-11/12  mx-auto flex items-center justify-center gap-4 flex-wrap ">
            {suggetion.map((e) => (
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

export default View;