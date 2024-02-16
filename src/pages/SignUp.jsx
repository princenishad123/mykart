import React from "react";
import Layout from "../components/layout/Layout";

const SignUp = () => {
  return (
    <Layout title={"Sing Up"} description={"Are you new user please sing up "}>
      <div className="w-full h-screen grid place-items-center">
        <div className="w-4/5 max-lg:w-11/12 rounded-md overflow-hidden md:shadow-xl border flex items-center max-sm:px-4 bg-slate-50 max-md:justify-center">
          <div className="w-1/2 max-md:hidden bg-red-400 grid place-items-center py-14">
            <img
              src="https://assets-global.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e2988372b93da9_3d-digital-tb.png"
              alt=""
              className=" w-96"
            />
            <h1 className="text-xl font-semibold text-white">
              Welcome to E-Bharat
            </h1>
          </div>
          <div className="w-1/2 max-md:w-80 max-sm:w-full  px-8 max-md:px-1 py-8">
            <h2 className="text-2xl font-semibold">Sign Up</h2>
            <form className="my-4">
              <div className="w-80 max-lg:w-72 max-sm:w-full  my-3">
                <span className="ml-1 text-gray-600 font-semibold">
                  Full Name
                </span>{" "}
                <br />
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  className="outline-none w-full rounded-md border py-1 px-2"
                />
              </div>
              <div className="w-80 max-lg:w-72 max-sm:w-full  my-3">
                <span className="ml-1 text-gray-600 font-semibold">Email</span>{" "}
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="outline-none w-full rounded-md border py-1 px-2"
                />
              </div>
              <div className="w-80 max-lg:w-72 max-sm:w-full  my-3">
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
              <div className="w-80 max-lg:w-72 max-sm:w-full  my-3">
                <span className="ml-1 text-gray-600 font-semibold">
                  Confirm Password
                </span>{" "}
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="outline-none w-full rounded-md border py-1 px-2"
                />
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" name="term" className="mt-1" />
                <p className="text-sm text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Maiores, nemo?
                </p>
              </div>
              <button className="py-1 w-44 rounded-md my-4 bg-blue-500 text-white">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
