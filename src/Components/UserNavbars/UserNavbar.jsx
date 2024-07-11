import { NavLink } from "react-router-dom";

const UserNavbar = () => {
  return (
    <div className="space-y-4">
      <li>
        <NavLink>User Profile</NavLink>
      </li>
      <li>
        <NavLink>User History</NavLink>
      </li>
    </div>
  );
};

export default UserNavbar;
