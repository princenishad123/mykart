import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";

const SidebarForAdmin = () => {
  return (
    <ul
      className=" px-2 mt-4 text-md text-gray-600"
      style={{ fontSize: "18px" }}
    >
      <NavLink to={"/owner/admin"}>
        <li className="my-1 flex items-center py-1 px-3 hover:bg-red-100 rounded-md gap-3">
          <LuLayoutDashboard /> Dashboard
        </li>
      </NavLink>

      <NavLink to={"orders"}>
        <li className="my-1 flex items-center py-1 px-3 hover:bg-red-100 rounded-md gap-3">
          <BsCart2 /> Orders
        </li>
      </NavLink>

      <NavLink to={"users"}>
        <li className="my-1 flex items-center py-1 px-3 hover:bg-red-100 rounded-md gap-3">
          <LuUsers2 /> Users
        </li>
      </NavLink>

      <NavLink to={"products"}>
        <li className="my-1 flex items-center py-1 px-3 hover:bg-red-100 rounded-md gap-3">
          <AiOutlineShopping /> Products
        </li>
      </NavLink>

      {/* <NavLink to={"Contegories"}> */}
      <li className="my-1 flex items-center py-1 px-3 hover:bg-red-100 rounded-md gap-3">
        <MdOutlineCategory /> Categories
      </li>
      {/* </NavLink> */}

      {/* <NavLink to={"Contegories"}> */}
      <li className="my-1 flex items-center py-1 px-3 hover:bg-red-100 rounded-md gap-3">
        <LuLogOut /> Logout
      </li>
      {/* </NavLink> */}
    </ul>
  );
};
export default SidebarForAdmin;
