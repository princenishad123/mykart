import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ Component }) => {
  const isLoggedIn = localStorage.getItem("user");
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoutes;
