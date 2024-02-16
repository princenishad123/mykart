import React from "react";

const Address = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Shipping Address</h2>
      <div>
        <form>
          <div className="my-6 flex flex-wrap gap-4 items-center">
            <div className="">
              <span>Full Name</span>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="py-1 px-2 outline-none border bg-slate-50 rounded-md"
              />
            </div>
            <div className="">
              <span>Phone</span>
              <br />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="py-1 px-2 outline-none border bg-slate-50 rounded-md"
              />
            </div>
            <div className="">
              <span>Alternate Number</span>
              <br />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="py-1 px-2 outline-none border bg-slate-50 rounded-md"
              />
            </div>
            <div className="">
              <span>State</span>
              <br />
              <input
                type="text"
                name="state"
                placeholder="State"
                className="py-1 px-2 outline-none border bg-slate-50 rounded-md"
              />
            </div>
            <div className="">
              <span>City</span>
              <br />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="py-1 px-2 outline-none border bg-slate-50 rounded-md"
              />
            </div>
            <div className="">
              <span>Post Office</span>
              <br />
              <input
                type="text"
                name="post_office"
                placeholder="Post Office"
                className="py-1 px-2 outline-none border bg-slate-50 rounded-md"
              />
            </div>
            <div className="">
              <span>Office/House No.</span>
              <br />
              <input
                type="text"
                name="house_no"
                placeholder="000"
                className="py-1 px-2 outline-none border bg-slate-50 rounded-md"
              />
            </div>
            <div className="">
              <span>Village/Road No/Landmark.</span>
              <br />
              <input
                type="text"
                name="village"
                placeholder="Village"
                className="py-1 px-2 outline-none border bg-slate-50 rounded-md"
              />
            </div>
          </div>
          <button className="w-44 h-9 rounded-md shadow-xl shadow-puple-100 bg-purple-500 text-white">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Address;
