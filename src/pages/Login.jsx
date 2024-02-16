import React from "react";
import Layout from "../components/layout/Layout";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <Layout title={"login"} description={"Login in my account"}>
      <div className="w-full h-full grid place-items-center my-8">
        <div className="w-3/5 max-lg:w-11/12 rounded-md overflow-hidden md:shadow-xl border flex items-center max-sm:px-4 bg-slate-50 max-md:justify-center">
          <div className="w-1/2 max-md:hidden bg-red-400 grid place-items-center py-10">
            <img
              src="https://assets-global.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e2988372b93da9_3d-digital-tb.png"
              alt=""
              className=" w-56"
            />
            <h1 className="text-xl font-semibold text-white">
              Welcome to E-Bharat
            </h1>
          </div>
          <div className="w-1/2 max-md:w-80 max-sm:w-full  px-4 max-md:px-1 py-8">
            <h2 className="text-2xl font-semibold">Login</h2>
            <form className="my-4">
              <div className="w-72 max-lg:w-72 max-sm:w-full  my-3">
                <span className="ml-1 text-gray-600 font-semibold">Email</span>{" "}
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="outline-none w-full rounded-md border py-1 px-2"
                />
              </div>
              <div className="w-72 max-lg:w-72 max-sm:w-full  my-3">
                <span className="ml-1 text-gray-600 font-semibold">
                  Password
                </span>{" "}
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="outline-none w-full rounded-md border py-1 px-2"
                />
              </div>

              <h2>
                Have a not account ?{" "}
                <span className="text-blue-500">
                  <NavLink to={"/sign-up"}>Sign Up</NavLink>
                </span>
              </h2>

              <button className="py-1 w-44 rounded-md my-4 bg-blue-500 text-white">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
