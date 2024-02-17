import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRouteForAdmin = ({ AdminProtected }) => {
  const adminIsLoggedIn = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (adminIsLoggedIn?.email === import.meta.env.VITE_ADMIN_EMAIL) {
      navigate("/owner/admin");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <AdminProtected />
    </div>
  );
};

export default ProtectedRouteForAdmin;
