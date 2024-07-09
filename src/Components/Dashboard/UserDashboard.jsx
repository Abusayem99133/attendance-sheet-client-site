import { NavLink, Outlet } from "react-router-dom";
import UserProfile from "./UserProfile";
import UserHistory from "./UserHistory";

const UserDashboard = () => {
  return (
    <div className="flex">
      {/* dashboard site bar */}
      <div className="w-64 min-h-screen bg-[#97783b]">
        <ul className="menu p-4 my-4 space-y-4">
          <>
            <li>
              <NavLink>
                <UserProfile />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <UserHistory />
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
