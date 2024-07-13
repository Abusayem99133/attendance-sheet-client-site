import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <h1 className="text-5xl text-center">
        <span className="loading loading-lg loading-spinner text-primary"></span>
      </h1>
    );
  }

  if (!user) {
    // If no user, navigate to login
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (user && user.isAdmin) {
    // If user is admin, navigate to admin login
    return <Navigate to="/adminLogin" state={{ from: location }} />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
