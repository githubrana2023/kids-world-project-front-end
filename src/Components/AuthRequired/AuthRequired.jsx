/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Swal from "sweetalert2";

const AuthRequired = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner />;
  }

  const location = useLocation();

  console.log(location);

  if (!user) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You have to log in first to view details',
      footer: 'Why do I have this issue?'
    })
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthRequired;
