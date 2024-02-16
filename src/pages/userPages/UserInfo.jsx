import React from "react";
import Order from "../../assets/received.png";
import Exchange from "../../assets/exchange.png";

const UserInfo = () => {
  return (
    <div>
      {" "}
      <div className="w-full h-40 max-sm:h-32 flex items-center px-14 max-md:px-4 gap-8 max-sm:gap-2 max-sm:flex-col max-md:justify-center">
        <div className="w-28   h-28 max-md:w-20 max-md:h-20 max-sm:w-16 max-sm:h-16 rounded-full border overflow-hidden shadow-xl shadow-gray-100">
          <img src="" alt="user image" />
        </div>

        <div className="max-sm:w-11/12 max-sm:text-center">
          <h2 className="text-xl">Prince Nishad</h2>
          <span className="text-gray-500">Uttar Pradesh</span>
        </div>
      </div>
      {/* orders status and more */}
      <div className="w-full  h-auto flex my-4 items-center px-4 gap-4 flex-wrap max-md:justify-center">
        <div className="h-16 w-52 max-sm:w-11/12 rounded flex bg-orange-100 border border-orange-500 shadow-xl shadow-orange-100  items-center justify-around">
          <div className="h-14 w-14 rounded-full overflow-hidden p-1">
            <img src={Order} alt="" />
          </div>
          <h1 className="font-semibold text-md text-center">
            00 <br /> <span className="text-md">Orders</span>
          </h1>
        </div>
        <div className="h-16 w-52 max-sm:w-11/12 rounded flex bg-purple-100 border border-purple-500 shadow-purple-100  items-center shadow-xl justify-around">
          <div className="h-14 w-14 rounded-full overflow-hidden p-1">
            <img src={Exchange} alt="" />
          </div>
          <h1 className="font-semibold text-md text-center">
            00 <br /> <span className="text-md">Money Spend</span>
          </h1>
        </div>
      </div>
      {/* user personal Info */}
      <div className="w-full  h-auto my-4 px-4">
        <form className="w-2/3 flex flex-wrap gap-4 max-md:justify-center">
          <div className="max-sm:w-11/12">
            <span className="text-gray-500">Full Name</span> <br />
            <input
              type="text"
              className="py-1 px-2 outline-none bg-slate-100 border max-sm:w-full rounded"
            />
          </div>
          <div className="max-sm:w-11/12">
            <span className="text-gray-500">Phone</span> <br />
            <input
              type="text"
              className="py-1 px-2 outline-none bg-slate-100 max-sm:w-full border rounded"
            />
          </div>
          <div className="max-sm:w-11/12">
            <span className="text-gray-500">Email</span> <br />
            <input
              type="text"
              className="py-1 px-2 outline-none bg-slate-100 max-sm:w-full border rounded"
            />
          </div>
          <div className="max-sm:w-11/12">
            <span className="text-gray-500">State</span> <br />
            <input
              type="text"
              className="py-1 px-2 outline-none bg-slate-100 max-sm:w-full border rounded"
            />
          </div>
          <div className="max-sm:w-11/12">
            <button
              type="submit"
              className="bg-red-400 text-white py-1 sm:mt-6
              
              px-2 rounded "
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
