import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="space-y-4">
      <li>
        <NavLink>Admin Profile</NavLink>
      </li>
      <li>
        <NavLink>Admin History</NavLink>
      </li>
    </div>
  );
};

export default AdminNavbar;
