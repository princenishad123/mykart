import React, { useState, useContext } from "react";
import services from "../../firebase/service";
import { ToastContainer, toast } from "react-toastify";
import MyContext from "../../context/MyContext";

const Address = () => {
  const { userInformation, setUserInformation } = useContext(MyContext);
  const id = userInformation?.userId;
  const [button, setButton] = useState("Save changes");

  const [shippingAddress, setShippingAddress] = useState(userInformation);

  // validation shipping address
  const handleForm = (e) => {
    e.preventDefault();

    if (
      !shippingAddress.name ||
      !shippingAddress.phone ||
      !shippingAddress.alternatePhone ||
      !shippingAddress.state ||
      !shippingAddress.city ||
      !shippingAddress.postOffice ||
      !shippingAddress.office_house_no ||
      !shippingAddress.village_landmark
    ) {
      toast.error("all field is required", {
        theme: "colored",
      });
    } else if (shippingAddress.phone == shippingAddress.alternatePhone) {
      toast.error(" please use different alternate No.", {
        theme: "colored",
      });
    } else {
      setButton("Saving...");
      services
        .updateUserAddress(id, shippingAddress)
        .then((resp) => {
          toast.success("Address updated ");
          setButton("Save changes");
          services.getUserData(id).then((res) => {
            setUserInformation(res);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="p-6">
      <ToastContainer />
      <h2 className="text-xl font-semibold">Shipping Address</h2>
      <div>
        <form onSubmit={handleForm}>
          <div className="my-6  flex flex-wrap gap-4 items-center">
            <div className="max-sm:w-full">
              <span className="text-gray-700">Full Name</span>
              <br />
              <input
                type="text"
                name="name"
                value={shippingAddress?.name}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    name: e.target.value,
                  })
                }
                placeholder="Full Name"
                className="py-2 px-2 outline-none text-gray-600 max-sm:w-full border bg-slate-50 rounded-md "
              />
            </div>
            <div className="max-sm:w-full">
              <span className="text-gray-700">Phone</span>
              <br />
              <input
                type="text"
                name="phone"
                value={shippingAddress?.phone}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    phone: e.target.value,
                  })
                }
                placeholder="Phone"
                className="py-2 px-2 outline-none text-gray-600 max-sm:w-full border bg-slate-50 rounded-md"
              />
            </div>
            <div className="max-sm:w-full">
              <span className="text-gray-700">Alternate Number</span>
              <br />
              <input
                type="text"
                name="alternatePhone"
                value={shippingAddress?.alternatePhone}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    alternatePhone: e.target.value,
                  })
                }
                placeholder="Phone"
                className="py-2 px-2 outline-none text-gray-600 max-sm:w-full border bg-slate-50 rounded-md"
              />
            </div>
            <div className="max-sm:w-full">
              <span className="text-gray-700">State</span>
              <br />
              <input
                type="text"
                name="state"
                value={shippingAddress?.state}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    state: e.target.value,
                  })
                }
                placeholder="State"
                className="py-2 px-2 outline-none text-gray-600 max-sm:w-full border bg-slate-50 rounded-md"
              />
            </div>
            <div className="max-sm:w-full">
              <span className="text-gray-700">City</span>
              <br />
              <input
                type="text"
                name="city"
                value={shippingAddress?.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                placeholder="City"
                className="py-2 px-2 outline-none text-gray-600 max-sm:w-full border bg-slate-50 rounded-md"
              />
            </div>
            <div className="max-sm:w-full">
              <span className="text-gray-700">Post Office</span>
              <br />
              <input
                type="text"
                name="postOffice"
                value={shippingAddress?.postOffice}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postOffice: e.target.value,
                  })
                }
                placeholder="Post Office"
                className="py-2 px-2 outline-none text-gray-600 max-sm:w-full border bg-slate-50 rounded-md"
              />
            </div>
            <div className="max-sm:w-full">
              <span className="text-gray-700">Office/House No.</span>
              <br />
              <input
                type="text"
                name="office_house_no"
                value={shippingAddress?.office_house_no}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    office_house_no: e.target.value,
                  })
                }
                placeholder="000"
                className="py-2 px-2 outline-none text-gray-600 max-sm:w-full border bg-slate-50 rounded-md"
              />
            </div>
            <div className="max-sm:w-full">
              <span className="text-gray-700">Village/Road No/Landmark.</span>
              <br />
              <input
                type="text"
                name="village_landmark"
                value={shippingAddress?.village_landmark}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    village_landmark: e.target.value,
                  })
                }
                placeholder="Village"
                className="py-2 px-2 outline-none text-gray-600 max-sm:w-full border bg-slate-50 rounded-md"
              />
            </div>
          </div>
          <button className="w-44 h-9 rounded-md shadow-xl shadow-puple-100 bg-purple-500 text-white">
            {button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Address;
