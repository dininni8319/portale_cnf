import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth/index";

// middleware for the protected route
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/sign" />;
};

export default ProtectedRoute;
