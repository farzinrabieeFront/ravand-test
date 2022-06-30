import React from "react";
import { getByLabelText } from "@testing-library/react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const isLogin = () => {
    if (sessionStorage.getItem("auth")) {
      // const user = JSON.parse(localStorage.getItem("auth"));

      return true;
    } else {
      return false;
    }
  };

  let location = useLocation();
  const navigate = useNavigate();
  let params = useParams();

  return isLogin() ? (
    <Component {...{ location, navigate, params }} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
