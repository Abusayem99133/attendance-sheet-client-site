import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const UserNavbar = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/login";

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="space-y-4">
      <div>
        <li>
          <NavLink to="/profile">User Profile</NavLink>
        </li>
        <li>
          <NavLink to="/history">User History</NavLink>
        </li>
      </div>
      <div>
        <li>
          <button onClick={handleLogOut} className="">
            Logout
          </button>
        </li>
      </div>
    </div>
  );
};

export default UserNavbar;
