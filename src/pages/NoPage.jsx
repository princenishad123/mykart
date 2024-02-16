import React from "react";

import { Empty } from "keep-react";
import Sad from "../assets/sad.png";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="w-full grid place-items-center h-screen bg-slate-100">
      <div className="w-2/3 max-md:w-full max-md:px-2 h-72 flex flex-col justify-center items-center ">
        <div className="w-32 h-32 max-md:w-20 max-md:h-20  mx-auto ">
          <img src={Sad} alt="" className="w-full" />
        </div>
        <h2 className="text-center text-4xl max-md:text-2xl text-gray-700 font-semibold my-2">
          Ooups, page not found
        </h2>
        <p className="text-center font-semibold text-gray-600">
          We are very sorry for the inconvenience. It lool like you are trying{" "}
          <br />
          to access a page that has been deleted or never even exist.
        </p>
        <Link to={"/"}>
          <button className="w-56 max-sm:w-40 bg-blue-600 rounded-md text-white border h-10 mx-auto my-6 py-2 shadow-lg shadow-blue-200">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
