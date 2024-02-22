import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../store/CartSlice";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch(removeCartItem(id));
    toast.success("Removed Item", {
      autoClose: 1200,
    });
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Layout title={"my cart"} description={"cart"}>
      {cartItems?.length == 0 ? (
        <div className="w-full h-[80vh] grid place-items-center">
          <div className="flex justify-center flex-col">
            <h2 className="w-96 max-md:w-full text-center text-xl font-semibold my-2">
              Your cart is Empty
            </h2>
            <NavLink to={"/"} className="mx-auto">
              <button className="bg-purple-500 shadow-lg  text-white rounded-md px-3 py-1">
                Shop now
              </button>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="w-full h-[90vh] border gap-2 bg-gray-100 flex max-md:flex-col max-md:h-auto ">
          <div className="w-full gap-2 flex flex-col px-2 items-center h-auto  py-3">
            {/* product cart */}
            {cartItems.map((e, index) => (
              <div
                key={index}
                className="w-full rounded-md flex max-md:flex-col bg-white gap-4 items-start  relative"
              >
                <button
                  onClick={() => remove(e.id)}
                  className="absolute right-0 p-2 text-red-400 text-xl"
                >
                  <MdDeleteOutline />
                </button>
                <div className="w-36 h-36 grid place-items-center max-xl:w-28  max-xl:h-28  overflow-hidden rounded-md p-4 max-p-2">
                  <img src={e.image} className="w-full" alt="" />
                </div>
                <div className="w-[50%] max-md:w-full ">
                  <h2 className="text-xl font-semibold">{e.title}</h2>
                  <div className="w-full h-auto overflow-hidden">
                    <p className="multipleLine text-sm text-gray-600">
                      {e.description}
                    </p>
                    <span className="text-gray-600">Seller : BUZZINDIA </span>
                  </div>
                  <div className="flex items-center my-2 gap-3">
                    <button className="w-8 h-8 border rounded-full bg-gray-100 text-2xl font-semibold leading-6">
                      +
                    </button>
                    <h2 className="text-xl border w-16 text-center">0</h2>
                    <button className="w-8 h-8 border rounded-full bg-gray-100  text-2xl font-semibold leading-6">
                      -
                    </button>
                  </div>
                </div>
                <div className="w-auto ">
                  <h2 className="text-2xl font-bold">₹ {e.price}</h2>
                  <span className=" font-semibold">{e.discount} % off</span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-96 max-xl:w-80 bg-white border"></div>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
