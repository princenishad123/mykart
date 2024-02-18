import React from "react";
import { NavLink } from "react-router-dom";

const StatusCard = ({ iconBg, textColor, type, value, icon, link }) => {
  return (
    <NavLink to={link}>
      <div
        className={
          "h-16 w-48 max-sm:w-56 shadow-lg shadow-gray-200  bg-white rounded-md flex items-center py-2 px-2"
        }
      >
        <div
          className={`h-12  w-12 rounded-md ${iconBg} grid place-items-center `}
        >
          <span className={`text-3xl ${textColor} `}>{icon}</span>
        </div>
        <div className="px-2">
          <h2 className="text-xl font-semibold leading-4">{value}</h2>
          <span className="text-sm">{type}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default StatusCard;
