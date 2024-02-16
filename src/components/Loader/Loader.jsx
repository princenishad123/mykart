import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      className="z-20 w-full bg-slate-100 grid place-items-center"
      style={{ height: "80vh" }}
    >
      <Oval
        visible={true}
        height="40"
        width="40"
        color="#FF6600"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
