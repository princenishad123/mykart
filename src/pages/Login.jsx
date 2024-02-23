import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import services from "../firebase/service";
import { useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [button, setButton] = useState("Login");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All Field is Required", {
        theme: "colored",
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      setButton("Loading...");
      services
        .login(email, password)
        .then((res) => {
          toast.success("You are Logged In", {
            theme: "colored",
            position: "top-right",
            autoClose: 3000,
          });

          setButton("Login");

          navigate("/");
        })
        .catch((err) => {
          console.log(err.code);
          if (err.code == "auth/network-request-failed") {
            toast.error("No internet connection", {
              theme: "colored",
              position: "top-right",
              autoClose: 3000,
            });
          } else if (err.code == "auth/invalid-credential") {
            toast.error("Invalid email or password", {
              theme: "colored",
              position: "top-right",
              autoClose: 3000,
            });
          }
          setButton("Login");
        });
    }
  };

  const [passwordIcon, setePasswordIcon] = useState(<IoEyeOffOutline />);
  const [passwordType, setPasswordType] = useState("password");

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
    <Layout title={"login"} description={"Login in my account"}>
      <ToastContainer />
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
            <form onSubmit={handleLogin} className="my-4">
              <div className="w-72 max-lg:w-72 max-sm:w-full  my-3">
                <span className="ml-1 text-gray-600 font-semibold">Email</span>{" "}
                <br />
                <input
                  autoComplete={"off"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  name="email"
                  className="outline-none w-full bg-gray-100 rounded-md border py-1 px-2"
                />
              </div>
              <div className="w-72 max-lg:w-72 max-sm:w-full  my-3">
                <span className="ml-1 text-gray-600 font-semibold">
                  Password
                </span>
                <br />
                <div className="flex items-center w-full bg-gray-100 rounded-md border py-1 px-2">
                  <input
                    autoComplete={"off"}
                    type={passwordType}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

              <h2>
                Have a not account ?{" "}
                <span className="text-blue-500">
                  <NavLink to={"/sign-up"}>Sign Up</NavLink>
                </span>
              </h2>

              <button className="py-1 w-44 rounded-md my-4 bg-blue-500 text-white">
                {button}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
