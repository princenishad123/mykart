import React, { useContext } from "react";
import MyContext from "../../context/MyContext";
import { NavLink } from "react-router-dom";
import DeleteConfirmation from "../../components/AdminComponents/DeleteConfirmation";
import { CiEdit } from "react-icons/ci";

const Products = () => {
  const { allProducts, setAllProducts } = useContext(MyContext);

  return (
    <div>
      <div
        className="bg-white overflow-x-scroll p-2 rounded-md"
        style={{ minHeight: "80vh" }}
      >
        <h1 className="text-xl font-semibold my-2">Products</h1>
        <h2 className="text-gray-600 font-semibold my-2">Filter</h2>
        <div className="w-full h-auto  flex justify-between my-3 items-start gap-4">
          <div className="flex gap-4 items-start">
            <div className="border py-1 px-2 rounded bg-gray-100">
              <input
                type="text"
                className="outline-none bg-transparent"
                placeholder="Search by product Id"
              />
            </div>

            <div className="border py-1 px-2 rounded bg-gray-100">
              <input
                type="text"
                className="outline-none bg-transparent"
                placeholder="Search by product Name"
              />
            </div>

            <div className="border py-1 outline-none px-2 rounded bg-gray-100">
              <select className="bg-transparent" name="" id="">
                <option value="electronic">Electronic</option>
                <option value="fashion">Fashion</option>
                <option value="shoose">Shoose</option>
                <option value="mensclothe">Mens clothe</option>
                <option value="mensclothe">Mens clothe</option>
              </select>
            </div>
          </div>
          <div>
            <NavLink to={"/owner/admin/upload"}>
              <button>Upload Products</button>
            </NavLink>
          </div>
        </div>
        <table className="table-fixed text-sm w-full max-lg:w-screen">
          <thead>
            <tr className="border-b  text-center ">
              <th className="text-start px-3 py-2 w-16">Image</th>
              <th className="text-start px-3  py-2">Id</th>
              <th className="text-start px-3 py-2">Name</th>
              <th className="text-start px-3 w-28 py-2">Price</th>
              <th className="text-start px-3 w-28 py-2">Price</th>
              <th className="text-start px-3 w-32  py-2">action</th>
            </tr>
          </thead>

          <tbody className="text-start text-gray-500">
            {allProducts.map((e) => (
              <tr
                key={e.id}
                className="border-b cursor-pointer my-1 hover:bg-slate-50"
              >
                <td className="">
                  <div className="w-14 h-14 rounded-full p-1 overflow-hidden border">
                    <img src={e.image} alt="" className="w-14" />
                  </div>
                </td>
                <td className=" truncate">{e.id}</td>
                <td className=" py-2 px-3 truncate capitalize">{e.title}</td>
                <td className=" py-2 px-3 truncate">₹ {e.price}</td>
                <td className=" py-2 px-3 truncate">1961</td>
                <td className=" py-2 px-3 w-32 truncate flex items-center gap-2">
                  <DeleteConfirmation id={e.id} />
                  <NavLink to={"update"}>
                    <button className="h-8 grid place-items-center text-xl w-8 bg-green-100 text-green-600 rounded-md">
                      <CiEdit />
                    </button>
                  </NavLink>

                  {/* <UpdateProduct id={e.id} /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
