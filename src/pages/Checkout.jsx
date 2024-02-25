import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import services from "../firebase/service";
import MyContext from "../context/MyContext";
import { toast } from "react-toastify";

const Checkout = () => {
  const { product } = useParams();
  const [purchaseItem, setPurchaseItem] = useState([]);
  const cartItems = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(8);
  const [deliveryCharge, setDeliveryCharge] = useState(49);
  const { userInformation, setUserInformation } = useContext(MyContext);

  useEffect(() => {
    if (product == "cartitems") {
      setPurchaseItem(cartItems);
    } else {
      services.getDataById(product).then((res) => {
        setPurchaseItem([res]);
      });
    }
  }, []);

  useEffect(() => {
    let price = 0;

    purchaseItem.forEach((e) => {
      price = price + parseInt(e.price);
    });

    setTotalPrice(price);
  }, [purchaseItem]);

  const buyNow = () => {
    if (
      !userInformation.phone ||
      !userInformation.alternatePhone ||
      !userInformation.state ||
      !userInformation.city ||
      !userInformation.village_landmark
    ) {
      return toast.error("Address is mendatry");
    }
    var options = {
      key: import.meta.env.VITE_RAZOR_PAY_KEY,
      key_secret: import.meta.env.VITE_RAZOR_SCRETE_KEY,
      amount: parseInt(
        (totalPrice > 1000
          ? Math.floor(totalPrice - (totalPrice * discount) / 100)
          : Math.floor(totalPrice - (totalPrice * discount) / 100) +
            deliveryCharge) * 100
      ),
      currency: "INR",
      order_receipt: "order_rcptid_" + "prince",
      name: "E-Shop",
      description: "for testing purpose",
      handler: function (response) {
        console.log(response);
        toast.success("Payment Successful");
        const paymentId = response.razorpay_payment_id;
        // store firebase

        const orderInfo = {
          purchaseItem,
          name: userInformation.name,
          email: userInformation.email,
          phone: userInformation.phone,
          alternatePhone: userInformation.alternatePhone,
          city: userInformation.city,
          state: userInformation.state,
          userId: userInformation.userId,
          office_house_no: userInformation.office_house_no,
          village_landmark: userInformation.village_landmark,
          status: "Pending",
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          paymentId,
        };
        try {
          services.uploadOrders(orderInfo).then((res) => {
            console.log(`services ${res}`);
          });
        } catch (error) {
          console.log(error);
        }
      },

      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay);
  };

  return (
    <Layout>
      <div className="p-4">
        <div className="w-full flex max-md:flex-col gap-2">
          <div className="w-full h-auto">
            {purchaseItem?.map((item, index) => (
              <div
                key={index}
                className="flex my-2 gap-4 justify-start border-b pb-2 max-md:items-start items-center max-sm:flex-col "
              >
                <div className="w-40 grid place-items-center h-40 max-md:w-28  max-md:h-28  rounded-md p-3 overflow-hidden">
                  <img src={item.image} className="w-full" alt="" />
                </div>
                <div className="w-4/5 max-md:w-full ">
                  <div className="w-full ">
                    <h2 className="text-xl max-sm:text-md font-semibold">
                      {item.title}
                    </h2>

                    <p className="multipleLine  text-sm text-gray-600">
                      {item.description}
                    </p>
                    <h2 className="text-xl  text-start font-semibold">
                      ₹ {item.price}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
            <div className="">
              <h2 className="text-xl font-semibold my-2">Shipping address</h2>
              <ul className="text-xl">
                <li className="">{userInformation?.name} , </li>
                <li className="">{userInformation?.state}, </li>
                <li className="">{userInformation?.city}, </li>
                <li className="">
                  {userInformation?.office_house_no} ,
                  {userInformation?.village_landmark} , {userInformation?.phone}{" "}
                  ,{userInformation?.alternatePhone} ,
                </li>
              </ul>
              <NavLink to={"/account/address"}>
                <button className="py-1 px-3 bg-purple-600 text-white my-2 rounded-md">
                  Edit
                </button>
              </NavLink>
            </div>
          </div>
          <div className="w-96 max-sm:w-full h-auto max-xl:w-80 py-3 px-2 bg-white border">
            <h2 className="text-xl font-semibold text-gray-600">
              Price Details
            </h2>
            <hr className="my-3" />
            <div className="flex justify-between py-2 font-semibold text-gray-500">
              <h3>Price ({purchaseItem.length}items)</h3>
              <div>₹{totalPrice}</div>
            </div>
            <div className="flex justify-between py-2 font-semibold text-gray-500">
              <h3>Discount</h3>
              <div className="text-green-500">
                -₹{Math.floor((totalPrice * discount) / 100)}
              </div>
            </div>
            <div className="flex justify-between py-2 font-semibold text-gray-500">
              <h3>Delivery charges</h3>
              <div className="text-green-500">
                {" "}
                {totalPrice > 4000 ? "Free" : "₹ 49"}
              </div>
            </div>
            <div className="flex justify-between border-t border-b py-2 font-semibold text-xl">
              <h3 className=" font-semibold">Total Amount</h3>
              <div className="text-green-500">
                ₹{" "}
                {totalPrice > 1000
                  ? Math.floor(totalPrice - (totalPrice * discount) / 100)
                  : Math.floor(totalPrice - (totalPrice * discount) / 100) +
                    deliveryCharge}
              </div>
            </div>
            <h2 className="my-2 text-md font-semibold text-green-500">
              You will save ₹{Math.floor((totalPrice * discount) / 100)} on This
              order
            </h2>
            <div>
              <NavLink to={`/checkout/${product}`}>
                <button
                  onClick={buyNow}
                  className="py-1 px-4 bg-purple-500 shadow-md shadow-purple-100 rounded w-44 my-2 text-white"
                >
                  Check Out
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
