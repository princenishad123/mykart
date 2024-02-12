import React from "react";
import ShoppingGirl from "../../assets/shopping_girl.png";

const MainPage = () => {
  return (
    <div className="w-full  flex items-center justify-center gap-4 max-sm:flex-col max-sm:justify-between max-sm:relative bg-slate-100 ">
      <div className="w-1/2  max-sm:h-auto max-sm:text-center px-16 max-sm:px-1   max-sm:w-full z-10">
        <h1 className="text-8xl max-lg:text-7xl max-md:text-6xl font-semibold text-gray-700 max-sm:leading-tight max-sm:hidden ">
          Let's <br /> Explore <br />
          <span className=" text-red-400 ">Unique</span> <br /> Shopping
        </h1>

        <h1 className="text-8xl max-lg:text-7xl max-md:text-6xl max-sm:py-4 max-sm:text-4xl max-sm:pt-12 font-semibold text-gray-700 max-sm:leading-tight sm:hidden">
          Let's Explore
          <span className=" text-red-400  "> Unique</span> Shopping
        </h1>
        <h1 className="text-3xl px-3 font-semibold my-7 sm:hidden">
          Get Reward upto 60 % cashback
        </h1>
      </div>

      <div className="w-1/2 max-sm:w-full max-sm:grid max-sm:place-items-center  ">
        <img
          src={ShoppingGirl}
          alt="image"
          className="w-11/12 max-lg:w-full max-sm:w-96 drop-shadow-xl"
          // style={{ width: "90%" }
        />
      </div>
    </div>
  );
};

export default MainPage;
