import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import services from "../firebase/service";
import { NavLink, useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const SignUp = () => {
  const [signUpNewUser, setSignUpNewUser] = useState({
    name: "",
    email: "",
    password: "",
    conPassword: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const [button, setButton] = useState("Sign Up");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !signUpNewUser.name ||
      !signUpNewUser.email ||
      !signUpNewUser.password ||
      !signUpNewUser.conPassword
    ) {
      toast.error("All Field is Required", {
        theme: "colored",
        position: "top-center",
      });
    } else if (signUpNewUser.password != signUpNewUser.conPassword) {
      toast.error("Password don't Match", {
        theme: "colored",
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      setButton("Loding...");
      services
        .signUp(signUpNewUser)
        .then((res) => {
          if (res == "auth/email-already-in-use") {
            toast.error("Email is already use", {
              position: "top-center",
            });

            // navigate("/login");
            setButton("Sign up");
          } else if (res == "auth/network-request-failed") {
            toast.error("No internet connection", {
              position: "top-center",
            });
            setButton("Sign up");
          } else {
            toast.success("Account is created", {
              position: "top-center",
            });
            navigate("/login");
            setButton("Sign up");
          }
        })
        .catch((err) => {
          console.log(`in sing up ${err}`);
        });
    }
  };
  const [passwordIcon, setePasswordIcon] = useState(<IoEyeOffOutline />);

  function showPassword() {
    if (passwordType == "password") {
      setPasswordType("text");
      setePasswordIcon(<MdOutlineRemoveRedEye />);
    } else {
      setPasswordType("password");
      setePasswordIcon(<IoEyeOffOutline />);
    }
  }

  return (
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
          <form onSubmit={handleSignup} className="my-4">
            <div className="w-80 max-lg:w-72 max-sm:w-full  my-3">
              <span className="ml-1 text-gray-600 font-semibold">
                Full Name
              </span>{" "}
              <br />
              <input
                type="text"
                value={signUpNewUser.name}
                placeholder="Full name"
                onChange={(e) =>
                  setSignUpNewUser({ ...signUpNewUser, name: e.target.value })
                }
                name="name"
                className="outline-none w-full rounded-md border bg-gray-100 py-1 px-2"
              />
            </div>
            <div className="w-80 max-lg:w-72 max-sm:w-full  my-3">
              <span className="ml-1 text-gray-600 font-semibold">Email</span>{" "}
              <br />
              <input
                type="email"
                placeholder="Email"
                value={signUpNewUser.email}
                onChange={(e) =>
                  setSignUpNewUser({ ...signUpNewUser, email: e.target.value })
                }
                name="email"
                className="outline-none w-full rounded-md border py-1 px-2 bg-gray-100"
              />
            </div>
            <div className="w-80 max-lg:w-72 max-sm:w-full  my-3">
              <span className="ml-1 text-gray-600 font-semibold">Password</span>{" "}
              <br />
              <div className="flex items-center w-full bg-gray-100 rounded-md border py-1 px-2">
                <input
                  type={passwordType}
                  value={signUpNewUser.password}
                  autoComplete="off"
                  onChange={(e) =>
                    setSignUpNewUser({
                      ...signUpNewUser,
                      password: e.target.value,
                    })
                  }
                  placeholder="Password"
                  name="password"
                  className="outline-none w-full bg-transparent"
                />

                <span
                  className="cursor-pointer text-gray-500 text-xl"
                  onClick={showPassword}
                >
                  {passwordIcon}
                </span>
              </div>
            </div>
            <div className="w-80 max-lg:w-72 max-sm:w-full  my-3">
              <span className="ml-1 text-gray-600 font-semibold">
                Confirm Password
              </span>{" "}
              <br />
              <div className="flex items-center w-full bg-gray-100 rounded-md border py-1 px-2">
                <input
                  type={passwordType}
                  placeholder="Password"
                  value={signUpNewUser.conPassword}
                  onChange={(e) =>
                    setSignUpNewUser({
                      ...signUpNewUser,
                      conPassword: e.target.value,
                    })
                  }
                  name="password"
                  className="outline-none w-full bg-transparent"
                />
                <span
                  className="cursor-pointer text-gray-500 text-xl"
                  onClick={showPassword}
                >
                  {passwordIcon}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" name="term" className="mt-1" />
              <p className="text-sm text-gray-500">
                Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Maiores, nemo?
              </p>
            </div>
            <p>
              Already have an account ?
              <NavLink to={"/login"} className="text-blue-600">
                login
              </NavLink>
            </p>
            <button className="py-1 w-44 rounded-md my-4 bg-blue-500 text-white">
              {button}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
