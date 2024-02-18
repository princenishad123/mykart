import React, { useContext } from "react";
import MyContext from "../../context/MyContext";

const Users = () => {
  const { allUsers, setAllUsers } = useContext(MyContext);
  return (
    <div>
      <div
        className="bg-white p-2 overflow-x-scroll rounded-md"
        style={{ minHeight: "80vh" }}
      >
        <h1 className="text-xl font-semibold my-2">Users</h1>
        <table className="table-fixed text-sm w-full max-lg:w-screen">
          <thead>
            <tr className="border-b  text-center ">
              <th className="text-start px-3 py-2 w-16">Image</th>
              <th className="text-start px-3  py-2">Id</th>
              <th className="text-start px-3 py-2">Name</th>
              <th className="text-start px-3 py-2">Email</th>
              <th className="text-start px-3 py-2">Phone</th>
              <th className="text-start px-3 py-2">action</th>
            </tr>
          </thead>

          <tbody className="text-start text-gray-500">
            {allUsers.map((e) => (
              <tr
                key={e.userId}
                className="border-b cursor-pointer hover:bg-slate-50"
              >
                <td className="">
                  <div className="w-12 h-12 rounded-full border"></div>
                </td>
                <td className=" truncate">{e.userId}</td>
                <td className=" py-2 px-3 truncate">{e.username}</td>
                <td className=" py-2 px-3 truncate">{e.email}</td>
                <td className=" py-2 px-3 truncate">{e.phone}</td>
                <td className=" py-2 px-3 truncate">
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
